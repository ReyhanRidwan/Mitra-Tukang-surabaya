import React, { useState, useRef } from 'react';
import { CONTACT_INFO } from '../data';
import { SurveyForm as FormType } from '../types';
import { 
  FileText, 
  User, 
  Phone, 
  MapPin, 
  Hammer, 
  Maximize, 
  DollarSign, 
  Calendar, 
  Upload, 
  CheckCircle,
  HelpCircle,
  Send,
  Trash2
} from 'lucide-react';

export default function SurveyForm() {
  const [formData, setFormData] = useState<FormType>({
    name: '',
    phone: '',
    address: '',
    serviceType: '',
    buildingSize: '',
    budget: '',
    startDate: '',
    notes: '',
    hasPhoto: false
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const jobOptions = [
    'Renovasi Rumah tinggal',
    'Renovasi Kantor / Gedung',
    'Renovasi Gudang / Industri',
    'Renovasi Ruko / Komersial',
    'Pemasangan Plafon Gypsum/PVC',
    'Pemasangan Keramik / Granit / Marmer',
    'Pekerjaan Pengecatan Dinding',
    'Pemasangan Kanopi / Rangka Baja Ringan',
    'Instalasi Kelistrikan / MEP',
    'Bongkar Total Bangunan',
    'Penanganan Kebocoran & Tembok Rembes',
    'Lainnya / Perbaikan Minor'
  ];

  const budgetOptions = [
    'Kurang dari Rp 10 Juta',
    'Rp 10 Juta - Rp 50 Juta',
    'Rp 50 Juta - Rp 100 Juta',
    'Rp 100 Juta - Rp 300 Juta',
    'Lebih dari Rp 300 Juta'
  ];

  // Check form validation
  const isFormValid = 
    formData.name.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.address.trim() !== '' &&
    formData.serviceType !== '' &&
    formData.buildingSize.trim() !== '' &&
    formData.budget !== '' &&
    formData.startDate !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      setFormData(prev => ({ ...prev, hasPhoto: true }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile(file);
      setFormData(prev => ({ ...prev, hasPhoto: true }));
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedFile(null);
    setFormData(prev => ({ ...prev, hasPhoto: false }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Compile WhatsApp text template
    const waText = `*FORM PENGAJUAN SURVEY LOKASI GRATIS*
----------------------------------------
*PT MITRA TUKANG SURABAYA*

👤 *Nama Pengaju:* ${formData.name}
📞 *No. WhatsApp:* ${formData.phone}
📍 *Alamat Proyek:* ${formData.address}
🔨 *Jenis Pekerjaan:* ${formData.serviceType}
📐 *Luas Bangunan:* ${formData.buildingSize} m²
💰 *Estimasi Budget:* ${formData.budget}
📅 *Target Mulai:* ${formData.startDate}
📸 *Melampirkan Foto:* ${uploadedFile ? `Ya (${uploadedFile.name})` : 'Tidak'}

📝 *Catatan Tambahan:*
${formData.notes || '-'}

----------------------------------------
_Mohon jadwalkan survey lokasi secepatnya. Terima kasih._`;

    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodedText}`;

    setIsSubmitted(true);
    
    // Redirect to WhatsApp URL
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <section id="form-survey" className="py-20 bg-brand-gray-light scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Form Lead Konversi
          </div>
          <h2 className="font-display font-bold text-3xl text-brand-navy tracking-tight mb-3">
            Form Pengajuan Survey & Estimasi RAB Gratis
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500">
            Isi data di bawah ini secara lengkap. Setelah terkirim, sistem kami akan langsung menyusun laporan awal dan mengarahkan Anda ke WhatsApp tim estimator untuk penentuan jadwal survey lokasi gratis.
          </p>
        </div>

        {/* Form panel */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Grid for Personal Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nama */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                  <User className="w-4 h-4 text-brand-orange" />
                  <span>Nama Lengkap <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Contoh: Hadi Asemrowo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm placeholder-slate-400 text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
                />
              </div>

              {/* No WA */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Nomor WhatsApp Aktif <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Contoh: +62 823-3194-9283"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm placeholder-slate-400 text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
                />
              </div>

            </div>

            {/* Alamat Proyek */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Alamat Lengkap Proyek <span className="text-red-500">*</span></span>
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Tulis jalan, nomor rumah, RT/RW, kelurahan, kecamatan, dan kota/kabupaten"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm placeholder-slate-400 text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
              />
            </div>

            {/* Grid for Work Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Jenis Pekerjaan */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                  <Hammer className="w-4 h-4 text-brand-orange" />
                  <span>Jenis Pekerjaan <span className="text-red-500">*</span></span>
                </label>
                <select
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
                >
                  <option value="">-- Pilih Jenis Layanan --</option>
                  {jobOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Luas Bangunan */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                  <Maximize className="w-4 h-4 text-brand-orange" />
                  <span>Estimasi Luas Bangunan (m²) <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  name="buildingSize"
                  required
                  value={formData.buildingSize}
                  onChange={handleInputChange}
                  placeholder="Contoh: 150 atau 12x15"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm placeholder-slate-400 text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
                />
              </div>

            </div>

            {/* Grid for Budget and Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Budget */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-brand-orange" />
                  <span>Estimasi Anggaran / Budget <span className="text-red-500">*</span></span>
                </label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
                >
                  <option value="">-- Pilih Range Anggaran --</option>
                  {budgetOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Target Mulai */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-brand-orange" />
                  <span>Target Tanggal Mulai Kerja <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  required
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
                />
              </div>

            </div>

            {/* Upload Foto Lokasi Drag & Drop */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                <Upload className="w-4 h-4 text-brand-orange" />
                <span>Upload Foto Lokasi Properti (Opsional)</span>
              </label>
              
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
                  isDragOver 
                    ? 'border-brand-orange bg-brand-orange/5' 
                    : uploadedFile 
                      ? 'border-emerald-500 bg-emerald-50/50' 
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100/50'
                }`}
              >
                <input 
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {uploadedFile ? (
                  <div className="space-y-2">
                    <CheckCircle className="w-10 h-10 text-emerald-500 animate-bounce mx-auto" />
                    <div>
                      <p className="text-sm font-semibold text-emerald-600 line-clamp-1">{uploadedFile.name}</p>
                      <p className="text-xs text-slate-400">{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • Berhasil Terunggah</p>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Hapus Foto
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Seret & lepas foto lokasi di sini</p>
                      <p className="text-xs text-slate-400 mt-1">atau klik untuk menelusuri berkas dari perangkat Anda (Maksimal 10MB)</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Catatan */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                <FileText className="w-4 h-4 text-brand-orange" />
                <span>Detail Catatan Tambahan</span>
              </label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Tuliskan detail khusus, misal: 'Kerusakan bocor di atap plafon kamar mandi utama, tinggi atap 4 meter...'"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm placeholder-slate-400 text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
              />
            </div>

            {/* Validation warning & Submit Lock */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <HelpCircle className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Harap isi semua kolom bertanda <span className="text-red-500">*</span> untuk mengaktifkan tombol WhatsApp</span>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitted}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                  isFormValid 
                    ? 'bg-brand-orange hover:bg-brand-orange-hover text-white shadow-brand-orange/20 cursor-pointer hover:scale-105 active:scale-98' 
                    : 'bg-slate-200 text-slate-400 shadow-none cursor-not-allowed'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Mengalihkan...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    <span>Ajukan Survey ke WhatsApp</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
