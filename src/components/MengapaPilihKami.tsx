import React from 'react';
import { 
  Users, 
  PhoneCall, 
  MapPin, 
  BadgePercent, 
  Sparkles, 
  CheckCircle, 
  Boxes, 
  ShieldCheck, 
  ArrowRight,
  Map
} from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data';

export default function MengapaPilihKami() {
  const points = [
    {
      title: 'Tenaga Ahli Berpengalaman',
      description: 'Seluruh kru kami diawasi langsung oleh Mandor & Project Manager berpengalaman puluhan tahun di perumahan mewah & pabrik Jatim.',
      icon: Users
    },
    {
      title: 'Konsultasi Gratis',
      description: 'Bebas curhat mengenai denah, jenis bahan bangunan, estimasi waktu, hingga penyesuaian biaya proyek Anda tanpa denda.',
      icon: PhoneCall
    },
    {
      title: 'Survey Gratis',
      description: 'Layanan kunjungan ke lapangan gratis Rp 0. Tim kami mengukur presisi bidang kerja agar RAB benar-benar fixed tanpa selisih.',
      icon: MapPin
    },
    {
      title: 'Harga Kompetitif',
      description: 'Penyusunan RAB yang cerdas dan efisien. Kami bantu carikan bahan alternatif berskala pabrikan agar Anda mendapat harga ekonomis.',
      icon: BadgePercent
    },
    {
      title: 'Pengerjaan Cepat',
      description: 'Penjadwalan yang disiplin memakai metode target kurva-S untuk meminimalisir keterlambatan penyelesaian konstruksi.',
      icon: Sparkles
    },
    {
      title: 'Hasil Rapi',
      description: 'Kerapian finishing adalah tanda kehormatan kerja kami. Dari presisi sudut acian hingga sela-sela nat keramik bebas bergelombang.',
      icon: CheckCircle
    },
    {
      title: 'Material Berkualitas',
      description: 'Tidak ada material campuran kw. Kami menggunakan semen Gresik, baja ringan ber-SNI, cat weatherproof bergaransi resmi pabrik.',
      icon: Boxes
    },
    {
      title: 'Garansi Pekerjaan',
      description: 'Ketenangan hati Anda terjamin penuh. Kami memberikan masa garansi pemeliharaan tertulis resmi bercap basah perusahaan.',
      icon: ShieldCheck
    }
  ];

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#form-survey');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="mengapa-kami" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider">
              Mengapa Memilih Kami
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
              Kualitas Kontraktor Premium <br className="hidden sm:inline" />
              Untuk Kepuasan Tanpa Khawatir
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami sadar membangun atau merenovasi rumah adalah investasi emosional dan finansial yang besar. PT Mitra Tukang Surabaya hadir untuk mematahkan stigma tukang harian yang lambat atau borongan nakal dengan manajemen proyek transparan, profesional, dan bergaransi resmi.
            </p>
          </div>
        </div>

        {/* Bento/Modern Grid for reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index} 
                className="bg-brand-gray-light p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-brand-orange shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {point.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Indonesia Map Coverage Banner */}
        <div className="mt-16 bg-brand-navy-dark rounded-3xl p-8 lg:p-12 border border-white/10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 text-brand-orange">
              <Map className="w-5 h-5 animate-bounce" />
              <span className="text-xs font-bold uppercase tracking-widest">Jangkauan Area Luas</span>
            </div>
            
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Siap Melayani Surabaya Raya & Seluruh Provinsi Jawa Timur
            </h3>

            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Tim estimator dan tukang kami dibekali armada mobil operasional lengkap, siap meluncur langsung ke lokasi properti Anda untuk proses survey dan konsultasi cepat tanpa memandang batas regional.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {CONTACT_INFO.areas.map((area, idx) => (
                <span 
                  key={idx}
                  className="bg-white/5 border border-white/10 text-slate-200 text-xs font-medium px-3.5 py-1.5 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Callout Box */}
          <div className="lg:col-span-5 bg-brand-navy-light/60 border border-white/10 p-6 sm:p-8 rounded-2xl text-center space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-brand-orange font-bold">Layanan Darurat</p>
              <p className="text-2xl font-display font-bold text-white">Butuh Penanganan Cepat?</p>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">Tim Maintenance kami bersiaga 24/7 menangani kebocoran parah, instalasi kelistrikan darurat, serta kerusakan darurat lainnya.</p>
            </div>

            <a
              href="#form-survey"
              onClick={handleScrollToForm}
              className="inline-flex w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3 rounded-xl font-bold text-sm justify-center items-center gap-2 transition-all shadow-lg shadow-brand-orange/20"
            >
              <span>Jadwalkan Survey Hari Ini</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
