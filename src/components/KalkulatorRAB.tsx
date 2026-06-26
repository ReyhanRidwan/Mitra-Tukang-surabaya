import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  ChevronRight, 
  ChevronLeft, 
  Printer, 
  Check, 
  HelpCircle, 
  Info, 
  MessageSquare, 
  Sliders, 
  ClipboardList, 
  Sparkles,
  RefreshCw,
  Layers,
  Wrench,
  Zap,
  Hammer,
  Maximize
} from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function KalkulatorRAB() {
  // --- STATE TAHAP 1: DIMENSI RUANGAN & DINDING ---
  const [dindingA, setDindingA] = useState<number>(1.45); // atas (Panjang default)
  const [dindingB, setDindingB] = useState<number>(6.00); // kanan (Lebar default)
  const [dindingC, setDindingC] = useState<number>(1.45); // bawah
  const [dindingD, setDindingD] = useState<number>(6.00); // kiri
  const [tinggiPlafond, setTinggiPlafond] = useState<number>(2.8); // default Plafond

  // Stepper state
  const [currentStep, setCurrentStep] = useState<number>(1);

  // --- STATE TAHAP 2: PEKERJAAN ARSITEKTUR & DINDING ---
  const [plesterAciChecked, setPlesterAciChecked] = useState<boolean>(true);
  const [plesterAciPrice, setPlesterAciPrice] = useState<number>(65000); // slider 50k - 150k

  const [pengecatanChecked, setPengecatanChecked] = useState<boolean>(true);
  const [pengecatanPrice, setPengecatanPrice] = useState<number>(35000); // slider 25k - 80k

  const [keramikLantaiChecked, setKeramikLantaiChecked] = useState<boolean>(true);
  const [keramikLantaiPrice, setKeramikLantaiPrice] = useState<number>(150000); // slider 100k - 350k

  // --- STATE TAHAP 3: BONGKARAN & PINTU ---
  const [jumlahPintu, setJumlahPintu] = useState<number>(1);
  const [lebarPintu, setLebarPintu] = useState<number>(0.8);
  const [tinggiPintu, setTinggiPintu] = useState<number>(2.1);
  const [catPintuSpec, setCatPintuSpec] = useState<'Melamik' | 'Duco'>('Melamik');

  const [bongkarLantaiChecked, setBongkarLantaiChecked] = useState<boolean>(false);
  const [bongkarLantaiPrice, setBongkarLantaiPrice] = useState<number>(45000); // slider 30k - 100k

  const [catKusenChecked, setCatKusenChecked] = useState<boolean>(false);
  const [catKusenPrice, setCatKusenPrice] = useState<number>(55000); // slider 40k - 90k

  // --- STATE TAHAP 4: MEKANIKAL, ELEKTRIKAL, PLUMBING ---
  const [pasangLampuChecked, setPasangLampuChecked] = useState<boolean>(false);
  const [pasangLampuQty, setPasangLampuQty] = useState<number>(4);
  const [pasangLampuSpec, setPasangLampuSpec] = useState<'3 Inch' | '4 Inch' | '5 Inch'>('4 Inch');
  const [pasangLampuPrice, setPasangLampuPrice] = useState<number>(35000); // slider 15k - 100k

  const [saklarChecked, setSaklarChecked] = useState<boolean>(false);
  const [saklarQty, setSaklarQty] = useState<number>(4);
  const [saklarPrice, setSaklarPrice] = useState<number>(25000); // slider 15k - 50k

  const [exhaustChecked, setExhaustChecked] = useState<boolean>(false);
  const [exhaustQty, setExhaustQty] = useState<number>(1);
  const [exhaustPrice, setExhaustPrice] = useState<number>(350000); // slider 200k - 1.5M

  const [instalasiListrikChecked, setInstalasiListrikChecked] = useState<boolean>(false);
  const [instalasiListrikQty, setInstalasiListrikQty] = useState<number>(4);
  const [instalasiListrikPrice, setInstalasiListrikPrice] = useState<number>(220000); // slider 150k - 350k

  // --- CALCULATION FORMULAS ---
  // Averaging walls to support realistic custom layouts
  const panjangRuangan = (dindingA + dindingC) / 2;
  const lebarRuangan = (dindingB + dindingD) / 2;

  // Real-time calculation variables
  const volumeDindingKotor = ((panjangRuangan * 2) + (lebarRuangan * 2)) * tinggiPlafond;
  const volumeLantai = panjangRuangan * lebarRuangan;

  // Items Pricing
  // Item 1: Plester & Aci Dinding
  const costPlesterAci = plesterAciChecked ? volumeDindingKotor * plesterAciPrice : 0;
  // Item 2: Pengecatan Dinding
  const costPengecatan = pengecatanChecked ? volumeDindingKotor * pengecatanPrice : 0;
  // Item 3: Pemasangan Keramik Lantai
  const costKeramikLantai = keramikLantaiChecked ? volumeLantai * keramikLantaiPrice : 0;

  // Item 4: Bongkar Lantai Lama
  const costBongkarLantai = bongkarLantaiChecked ? volumeLantai * bongkarLantaiPrice : 0;
  // Item 5: Cat Kusen Pintu
  const volumeCatKusen = ((tinggiPintu * 2) + lebarPintu) * jumlahPintu;
  const ducoSurcharge = catPintuSpec === 'Duco' ? 200000 * jumlahPintu : 0;
  const costCatKusen = catKusenChecked ? (volumeCatKusen * catKusenPrice) + ducoSurcharge : 0;

  // Item 6: Pasang Lampu Baru
  const costPasangLampu = pasangLampuChecked ? pasangLampuQty * pasangLampuPrice : 0;
  // Item 7: Saklar & Stop Kontak
  const costSaklar = saklarChecked ? saklarQty * saklarPrice : 0;
  // Item 8: Exhaust Fan
  const costExhaust = exhaustChecked ? exhaustQty * exhaustPrice : 0;
  // Item 9: Instalasi Listrik (Kabel & Pipa)
  const costInstalasiListrik = instalasiListrikChecked ? instalasiListrikQty * instalasiListrikPrice : 0;

  const grandTotal = 
    costPlesterAci + 
    costPengecatan + 
    costKeramikLantai + 
    costBongkarLantai + 
    costCatKusen + 
    costPasangLampu + 
    costSaklar + 
    costExhaust + 
    costInstalasiListrik;

  // Format IDR helper
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  // Helper to sync parallel walls if user changes one, but let them remain fully editable
  const resetToSquare = () => {
    setDindingC(dindingA);
    setDindingD(dindingB);
  };

  const handlePrint = () => {
    window.print();
  };

  // Dynamic aspect ratio scaling for SVG Denah Ruang
  const maxCanvasSize = 160;
  const scaleFactor = Math.min(maxCanvasSize / Math.max(dindingA, dindingC, dindingB, dindingD, 1), 25);
  
  // Calculate average dimensions for SVG
  const svgWidth = Math.max(dindingA, dindingC) * scaleFactor + 40;
  const svgHeight = Math.max(dindingB, dindingD) * scaleFactor + 40;

  const handleWhatsAppConsult = () => {
    const message = `Halo PT Mitra Tukang Surabaya, saya telah menghitung estimasi proyek saya menggunakan Kalkulator RAB Pro dengan rincian berikut:\n\n` +
      `- Ukuran Ruangan: ${dindingA.toFixed(2)}m x ${dindingB.toFixed(2)}m\n` +
      `- Tinggi Plafond: ${tinggiPlafond.toFixed(2)}m\n` +
      `- Estimasi Total RAB: ${formatRupiah(grandTotal)}\n\n` +
      `Saya ingin mendiskusikan rincian ini untuk survey lokasi dan konsultasi gratis di lokasi saya.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <section id="kalkulator-rab" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-violet-600" />
            <span>Interactive Estimator Pro v3.5</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Kalkulator RAB Interior & MEP
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Dapatkan penaksiran anggaran instan yang reaktif secara real-time. Pilih pekerjaan yang dibutuhkan, atur spesifikasi serta upah slider, dan unduh rekapitulasi resminya.
          </p>
        </div>

        {/* Outer Split-screen Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ==========================================
              PANEL KIRI: VISUALISASI & DIAGRAM (5 Kolom)
              ========================================== */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-500" />
                <span>Visualisasi Interaktif Denah</span>
              </h3>
              <button 
                onClick={resetToSquare} 
                className="text-[11px] font-semibold text-violet-600 hover:text-violet-800 flex items-center gap-1 transition-colors"
                title="Presisikan dinding berseberangan agar menjadi persegi panjang sempurna"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Simetriskan Ruang</span>
              </button>
            </div>

            {/* 1. Diagram Denah Ruangan */}
            <div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[250px] relative border border-slate-100 overflow-hidden">
              <span className="absolute top-2.5 left-3 text-[10px] font-mono text-slate-400 uppercase tracking-widest">Tampak Atas (Denah)</span>
              
              {/* Dynamic SVG Drawing */}
              <div className="flex items-center justify-center p-4">
                <svg 
                  width={Math.max(svgWidth, 180)} 
                  height={Math.max(svgHeight, 180)} 
                  className="overflow-visible"
                >
                  {/* Drawing Area Coordinates Grid lines */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  
                  {/* Outer Wall Rectangle */}
                  <rect 
                    x="20" 
                    y="20" 
                    width={Math.max(dindingA * scaleFactor, 30)} 
                    height={Math.max(dindingB * scaleFactor, 30)} 
                    fill="rgba(124, 58, 237, 0.03)" 
                    stroke="#000000" 
                    strokeWidth="3" 
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />

                  {/* Inner Area Hatching or text */}
                  <text 
                    x={20 + (dindingA * scaleFactor) / 2} 
                    y={20 + (dindingB * scaleFactor) / 2 + 4} 
                    textAnchor="middle" 
                    className="font-sans text-[11px] font-bold text-violet-500 fill-current"
                  >
                    {(dindingA * dindingB).toFixed(2)} m²
                  </text>

                  {/* Label & Dimensi Dinding A (Atas) */}
                  <text 
                    x={20 + (dindingA * scaleFactor) / 2} 
                    y="12" 
                    textAnchor="middle" 
                    className="font-mono text-xs font-bold text-slate-800 fill-current transition-all"
                  >
                    Dinding A: {dindingA.toFixed(2)}m
                  </text>
                  <line 
                    x1="20" 
                    y1="15" 
                    x2={20 + (dindingA * scaleFactor)} 
                    y2="15" 
                    stroke="#94a3b8" 
                    strokeWidth="1" 
                    strokeDasharray="2,2" 
                  />

                  {/* Label & Dimensi Dinding B (Kanan) */}
                  <text 
                    x={25 + (dindingA * scaleFactor)} 
                    y={20 + (dindingB * scaleFactor) / 2} 
                    textAnchor="start" 
                    className="font-mono text-xs font-bold text-slate-800 fill-current transition-all"
                  >
                    Dinding B: {dindingB.toFixed(2)}m
                  </text>

                  {/* Label & Dimensi Dinding C (Bawah) */}
                  <text 
                    x={20 + (dindingC * scaleFactor) / 2} 
                    y={20 + (dindingB * scaleFactor) + 16} 
                    textAnchor="middle" 
                    className="font-mono text-xs font-bold text-slate-800 fill-current transition-all"
                  >
                    Dinding C: {dindingC.toFixed(2)}m
                  </text>

                  {/* Label & Dimensi Dinding D (Kiri) */}
                  <text 
                    x="5" 
                    y={20 + (dindingD * scaleFactor) / 2} 
                    textAnchor="end" 
                    className="font-mono text-xs font-bold text-slate-800 fill-current transition-all"
                  >
                    D{dindingD.toFixed(2)}m
                  </text>
                </svg>
              </div>

              {/* Helpful tooltips or legend */}
              <div className="w-full flex items-center justify-between text-[10px] text-slate-400 px-2 mt-2">
                <span>Dinding A (Atas) & C (Bawah)</span>
                <span>Dinding B (Kanan) & D (Kiri)</span>
              </div>
            </div>

            {/* 2. Diagram Potongan Vertikal Tinggi Plafond */}
            <div className="bg-slate-50 rounded-2xl p-4 flex flex-col relative border border-slate-100 overflow-hidden">
              <span className="absolute top-2.5 left-3 text-[10px] font-mono text-slate-400 uppercase tracking-widest">Tampak Samping (Potongan Vertikal)</span>
              
              <div className="flex items-center justify-center py-6 min-h-[120px]">
                <div className="w-full max-w-[280px] relative flex flex-col justify-between" style={{ height: `${tinggiPlafond * 30}px`, maxHeight: '110px', minHeight: '75px' }}>
                  
                  {/* Top ceiling layer */}
                  <div className="w-full h-2.5 bg-violet-200 border-b border-black flex items-center justify-between px-3">
                    <span className="text-[9px] font-bold text-violet-800 uppercase tracking-wider">PLAFOND (GYPSUM / PVC)</span>
                    <span className="text-[9px] font-mono text-slate-600">{tinggiPlafond.toFixed(2)}m</span>
                  </div>

                  {/* Mid dimension pointer line */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex flex-col justify-between items-center z-10 py-1">
                    <div className="w-2.5 h-px bg-slate-800"></div>
                    <div className="h-full w-px bg-slate-800 border-dashed border-slate-400 border-l"></div>
                    <div className="bg-white border border-slate-300 rounded px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-800 -my-2.5">
                      H: {tinggiPlafond.toFixed(2)}m
                    </div>
                    <div className="h-full w-px bg-slate-800 border-dashed border-slate-400 border-l"></div>
                    <div className="w-2.5 h-px bg-slate-800"></div>
                  </div>

                  {/* Floor line */}
                  <div className="w-full h-3 bg-slate-300 border-t border-black/80 flex items-center justify-between px-3">
                    <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">Lantai (Keramik / Beton)</span>
                    <span className="text-[9px] font-mono text-slate-500">Elevasi 0.00m</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time calculated variables breakdown */}
            <div className="bg-violet-50/50 rounded-2xl p-4 border border-violet-100 space-y-2 text-xs">
              <span className="font-bold text-violet-900 uppercase text-[10px] tracking-wider block">Spesifikasi Hasil Luas & Volume</span>
              <div className="grid grid-cols-2 gap-2 text-slate-600">
                <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase">Luas Lantai</p>
                  <p className="text-sm font-bold text-slate-800 font-mono">{volumeLantai.toFixed(2)} m²</p>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase">Keliling Ruang</p>
                  <p className="text-sm font-bold text-slate-800 font-mono">{((panjangRuangan * 2) + (lebarRuangan * 2)).toFixed(2)} m'</p>
                </div>
                <div className="col-span-2 bg-white p-2.5 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase">Volume Kotor Bidang Dinding</p>
                  <p className="text-sm font-bold text-slate-800 font-mono">{volumeDindingKotor.toFixed(2)} m²</p>
                </div>
              </div>
            </div>

            {/* Live conversion widget */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-3.5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/10 rounded-full blur-2xl"></div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Estimasi Instan Real-Time</p>
                <p className="text-2xl font-display font-black text-amber-400 font-mono tracking-tight mt-1">
                  {formatRupiah(grandTotal)}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Biaya terhitung mencakup seluruh item tercentang</span>
              </div>
            </div>

          </div>

          {/* ==========================================
              PANEL KANAN: STEPPER & INPUT FORM (7 Kolom)
              ========================================== */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Navigasi Stepper Tabs */}
            <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 flex items-center justify-between shadow-sm overflow-x-auto scrollbar-none">
              {[1, 2, 3, 4, 5].map((step) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    currentStep === step
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border ${
                    currentStep === step 
                      ? 'bg-white text-amber-500 border-white' 
                      : 'bg-slate-100 text-slate-600 border-slate-300'
                  }`}>
                    {step}
                  </span>
                  <span className="hidden sm:inline">
                    {step === 1 && 'Dimensi'}
                    {step === 2 && 'Dinding'}
                    {step === 3 && 'Bongkaran'}
                    {step === 4 && 'MEP'}
                    {step === 5 && 'Hasil'}
                  </span>
                </button>
              ))}
            </div>

            {/* STAGE CONTAINER WITH ACCENT COLOR FORM AREA */}
            <div className="bg-[#f8fafc] rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-8 min-h-[460px] flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* -------------------------------------------
                    STEP 1: DIMENSI RUANGAN (Input Dasar)
                    ------------------------------------------- */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="border-b border-slate-200/60 pb-3">
                      <h3 className="font-display font-bold text-lg text-slate-900">
                        Masukkan ukuran dalam-dalam ruang!
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        Sesuaikan dimensi tiap sisi ruangan agar diagram denah reaktif dan kalkulasi volume dinding presisi.
                      </p>
                    </div>

                    <div className="space-y-4">
                      
                      {/* Dinding A */}
                      <div className="bg-violet-50/70 border border-violet-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <label className="font-display font-bold text-xs text-violet-950 uppercase tracking-wider sm:w-1/3">
                          Dinding A (Atas / Panjang)
                        </label>
                        <div className="flex items-center gap-2.5 sm:w-2/3">
                          <input 
                            type="range"
                            min="0.95"
                            max="6.00"
                            step="0.05"
                            value={dindingA}
                            onChange={(e) => setDindingA(parseFloat(e.target.value))}
                            className="w-full accent-violet-600 cursor-pointer"
                          />
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shrink-0 min-w-[95px] justify-between">
                            <input 
                              type="number"
                              min="0.95"
                              max="6.00"
                              step="0.01"
                              value={dindingA}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                if (!isNaN(val)) setDindingA(Math.min(Math.max(val, 0.95), 6.00));
                              }}
                              className="w-12 font-mono font-bold text-xs text-slate-800 border-none outline-none focus:ring-0 p-0 text-right"
                            />
                            <span className="text-xs font-bold text-slate-400">m</span>
                          </div>
                        </div>
                      </div>

                      {/* Dinding B */}
                      <div className="bg-violet-50/70 border border-violet-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <label className="font-display font-bold text-xs text-violet-950 uppercase tracking-wider sm:w-1/3">
                          Dinding B (Kanan / Lebar)
                        </label>
                        <div className="flex items-center gap-2.5 sm:w-2/3">
                          <input 
                            type="range"
                            min="0.95"
                            max="6.00"
                            step="0.05"
                            value={dindingB}
                            onChange={(e) => setDindingB(parseFloat(e.target.value))}
                            className="w-full accent-violet-600 cursor-pointer"
                          />
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shrink-0 min-w-[95px] justify-between">
                            <input 
                              type="number"
                              min="0.95"
                              max="6.00"
                              step="0.01"
                              value={dindingB}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                if (!isNaN(val)) setDindingB(Math.min(Math.max(val, 0.95), 6.00));
                              }}
                              className="w-12 font-mono font-bold text-xs text-slate-800 border-none outline-none focus:ring-0 p-0 text-right"
                            />
                            <span className="text-xs font-bold text-slate-400">m</span>
                          </div>
                        </div>
                      </div>

                      {/* Dinding C */}
                      <div className="bg-violet-50/70 border border-violet-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <label className="font-display font-bold text-xs text-violet-950 uppercase tracking-wider sm:w-1/3">
                          Dinding C (Bawah)
                        </label>
                        <div className="flex items-center gap-2.5 sm:w-2/3">
                          <input 
                            type="range"
                            min="0.95"
                            max="6.00"
                            step="0.05"
                            value={dindingC}
                            onChange={(e) => setDindingC(parseFloat(e.target.value))}
                            className="w-full accent-violet-600 cursor-pointer"
                          />
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shrink-0 min-w-[95px] justify-between">
                            <input 
                              type="number"
                              min="0.95"
                              max="6.00"
                              step="0.01"
                              value={dindingC}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                if (!isNaN(val)) setDindingC(Math.min(Math.max(val, 0.95), 6.00));
                              }}
                              className="w-12 font-mono font-bold text-xs text-slate-800 border-none outline-none focus:ring-0 p-0 text-right"
                            />
                            <span className="text-xs font-bold text-slate-400">m</span>
                          </div>
                        </div>
                      </div>

                      {/* Dinding D */}
                      <div className="bg-violet-50/70 border border-violet-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <label className="font-display font-bold text-xs text-violet-950 uppercase tracking-wider sm:w-1/3">
                          Dinding D (Kiri)
                        </label>
                        <div className="flex items-center gap-2.5 sm:w-2/3">
                          <input 
                            type="range"
                            min="0.95"
                            max="6.00"
                            step="0.05"
                            value={dindingD}
                            onChange={(e) => setDindingD(parseFloat(e.target.value))}
                            className="w-full accent-violet-600 cursor-pointer"
                          />
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shrink-0 min-w-[95px] justify-between">
                            <input 
                              type="number"
                              min="0.95"
                              max="6.00"
                              step="0.01"
                              value={dindingD}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                if (!isNaN(val)) setDindingD(Math.min(Math.max(val, 0.95), 6.00));
                              }}
                              className="w-12 font-mono font-bold text-xs text-slate-800 border-none outline-none focus:ring-0 p-0 text-right"
                            />
                            <span className="text-xs font-bold text-slate-400">m</span>
                          </div>
                        </div>
                      </div>

                      {/* Tinggi Plafond */}
                      <div className="bg-violet-50/70 border border-violet-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <label className="font-display font-bold text-xs text-violet-950 uppercase tracking-wider sm:w-1/3">
                          Tinggi Plafond (H)
                        </label>
                        <div className="flex items-center gap-2.5 sm:w-2/3">
                          <input 
                            type="range"
                            min="2.50"
                            max="3.30"
                            step="0.05"
                            value={tinggiPlafond}
                            onChange={(e) => setTinggiPlafond(parseFloat(e.target.value))}
                            className="w-full accent-violet-600 cursor-pointer"
                          />
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shrink-0 min-w-[95px] justify-between">
                            <input 
                              type="number"
                              min="2.50"
                              max="3.30"
                              step="0.01"
                              value={tinggiPlafond}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                if (!isNaN(val)) setTinggiPlafond(Math.min(Math.max(val, 2.50), 3.30));
                              }}
                              className="w-12 font-mono font-bold text-xs text-slate-800 border-none outline-none focus:ring-0 p-0 text-right"
                            />
                            <span className="text-xs font-bold text-slate-400">m</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* -------------------------------------------
                    STEP 2: PEKERJAAN ARSITEKTUR & DINDING
                    ------------------------------------------- */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="border-b border-slate-200/60 pb-3">
                      <h3 className="font-display font-bold text-lg text-slate-900">
                        Pekerjaan Arsitektur & Dinding
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        Centang pekerjaan sipil / arsitektur yang dibutuhkan untuk area dinding dan lantai ruangan.
                      </p>
                    </div>

                    <div className="space-y-4">
                      
                      {/* Plester & Aci */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        plesterAciChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={plesterAciChecked}
                              onChange={(e) => setPlesterAciChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div>
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Plester & Aci Dinding
                              </label>
                              <span className="text-[11px] font-mono font-semibold text-slate-500 block">
                                Volume: {volumeDindingKotor.toFixed(2)} m² (Satuan m²)
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costPlesterAci)}
                          </span>
                        </div>

                        {plesterAciChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga Satuan: {formatRupiah(plesterAciPrice)} / m²</span>
                              <span>Rentang: Rp 50k - Rp 150k</span>
                            </div>
                            <input 
                              type="range"
                              min="50000"
                              max="150000"
                              step="2500"
                              value={plesterAciPrice}
                              onChange={(e) => setPlesterAciPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                      {/* Pengecatan Dinding */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        pengecatanChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={pengecatanChecked}
                              onChange={(e) => setPengecatanChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div>
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Pengecatan Dinding Interior
                              </label>
                              <span className="text-[11px] font-mono font-semibold text-slate-500 block">
                                Volume: {volumeDindingKotor.toFixed(2)} m² (Satuan m²)
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costPengecatan)}
                          </span>
                        </div>

                        {pengecatanChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga Satuan: {formatRupiah(pengecatanPrice)} / m²</span>
                              <span>Rentang: Rp 25k - Rp 80k</span>
                            </div>
                            <input 
                              type="range"
                              min="25000"
                              max="80000"
                              step="1000"
                              value={pengecatanPrice}
                              onChange={(e) => setPengecatanPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                      {/* Pemasangan Keramik */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        keramikLantaiChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={keramikLantaiChecked}
                              onChange={(e) => setKeramikLantaiChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div>
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Pemasangan Keramik / Granit Lantai
                              </label>
                              <span className="text-[11px] font-mono font-semibold text-slate-500 block">
                                Volume: {volumeLantai.toFixed(2)} m² (Satuan m²)
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costKeramikLantai)}
                          </span>
                        </div>

                        {keramikLantaiChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga Satuan: {formatRupiah(keramikLantaiPrice)} / m²</span>
                              <span>Rentang: Rp 100k - Rp 350k</span>
                            </div>
                            <input 
                              type="range"
                              min="100000"
                              max="350000"
                              step="5000"
                              value={keramikLantaiPrice}
                              onChange={(e) => setKeramikLantaiPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                )}

                {/* -------------------------------------------
                    STEP 3: BONGKARAN & PINTU (Kondisional)
                    ------------------------------------------- */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="border-b border-slate-200/60 pb-3">
                      <h3 className="font-display font-bold text-lg text-slate-900">
                        Pekerjaan Bongkaran & Kusen Pintu
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        Definisikan dimensi pintu dan kusen serta bongkaran lantai lama bila diperlukan.
                      </p>
                    </div>

                    {/* Inputs Spesifikasi Pintu */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Jumlah Pintu (Unit)</label>
                        <input 
                          type="number"
                          min="1"
                          max="10"
                          value={jumlahPintu}
                          onChange={(e) => setJumlahPintu(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Lebar Pintu (m)</label>
                        <input 
                          type="number"
                          min="0.5"
                          max="2.0"
                          step="0.1"
                          value={lebarPintu}
                          onChange={(e) => setLebarPintu(Math.max(0.5, parseFloat(e.target.value) || 0.8))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Tinggi Pintu (m)</label>
                        <input 
                          type="number"
                          min="1.5"
                          max="3.0"
                          step="0.1"
                          value={tinggiPintu}
                          onChange={(e) => setTinggiPintu(Math.max(1.5, parseFloat(e.target.value) || 2.1))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                        />
                      </div>
                      <div className="col-span-1 sm:col-span-3">
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Dropdown Spesifikasi Cat Pintu</label>
                        <select
                          value={catPintuSpec}
                          onChange={(e) => setCatPintuSpec(e.target.value as 'Melamik' | 'Duco')}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-1 focus:ring-violet-500"
                        >
                          <option value="Melamik">Melamik (Standar Natural)</option>
                          <option value="Duco">Duco Premium (+Rp 200.000 per unit)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      
                      {/* Bongkar Lantai Lama */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        bongkarLantaiChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={bongkarLantaiChecked}
                              onChange={(e) => setBongkarLantaiChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div>
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Bongkar Lantai Lama
                              </label>
                              <span className="text-[11px] font-mono font-semibold text-slate-500 block">
                                Volume: {volumeLantai.toFixed(2)} m² (Satuan m²)
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costBongkarLantai)}
                          </span>
                        </div>

                        {bongkarLantaiChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga Satuan: {formatRupiah(bongkarLantaiPrice)} / m²</span>
                              <span>Rentang: Rp 30k - Rp 100k</span>
                            </div>
                            <input 
                              type="range"
                              min="30000"
                              max="100000"
                              step="2000"
                              value={bongkarLantaiPrice}
                              onChange={(e) => setBongkarLantaiPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                      {/* Cat Kusen Pintu */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        catKusenChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={catKusenChecked}
                              onChange={(e) => setCatKusenChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div>
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Finishing Cat Kusen & Pintu ({catPintuSpec})
                              </label>
                              <span className="text-[11px] font-mono font-semibold text-slate-500 block">
                                Volume: {volumeCatKusen.toFixed(2)} m' (Meter Lari)
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costCatKusen)}
                          </span>
                        </div>

                        {catKusenChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga Satuan: {formatRupiah(catKusenPrice)} / m'</span>
                              <span>Rentang: Rp 40k - Rp 90k</span>
                            </div>
                            <input 
                              type="range"
                              min="40000"
                              max="90000"
                              step="1000"
                              value={catKusenPrice}
                              onChange={(e) => setCatKusenPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                )}

                {/* -------------------------------------------
                    STEP 4: MEKANIKAL, ELEKTRIKAL, PLUMBING
                    ------------------------------------------- */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="border-b border-slate-200/60 pb-3">
                      <h3 className="font-display font-bold text-lg text-slate-900">
                        Mekanikal, Elektrikal, & Plumbing (MEP)
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        Tentukan titik pencahayaan, exhaust sirkulasi udara, saklar listrik serta pemasangannya.
                      </p>
                    </div>

                    <div className="space-y-4">
                      
                      {/* Pasang Lampu Baru */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        pasangLampuChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={pasangLampuChecked}
                              onChange={(e) => setPasangLampuChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div className="space-y-1">
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Pengadaan & Pasang Lampu Downlight
                              </label>
                              <div className="flex items-center gap-3">
                                <span className="text-[11px] text-slate-500">
                                  Ukuran:
                                  <select 
                                    value={pasangLampuSpec}
                                    onChange={(e) => setPasangLampuSpec(e.target.value as '3.0' | '4.0' | '5.0' as any)}
                                    className="ml-1 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-bold"
                                  >
                                    <option value="3 Inch">3 Inch</option>
                                    <option value="4 Inch">4 Inch</option>
                                    <option value="5 Inch">5 Inch</option>
                                  </select>
                                </span>
                                <span className="text-[11px] text-slate-500">
                                  Jumlah:
                                  <input 
                                    type="number"
                                    min="1"
                                    value={pasangLampuQty}
                                    onChange={(e) => setPasangLampuQty(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-10 ml-1 text-center bg-slate-50 border border-slate-200 rounded text-[10px] font-bold"
                                  /> unit
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costPasangLampu)}
                          </span>
                        </div>

                        {pasangLampuChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga per Unit: {formatRupiah(pasangLampuPrice)}</span>
                              <span>Rentang: Rp 15k - Rp 100k</span>
                            </div>
                            <input 
                              type="range"
                              min="15000"
                              max="100000"
                              step="1000"
                              value={pasangLampuPrice}
                              onChange={(e) => setPasangLampuPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                      {/* Saklar & Stop Kontak */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        saklarChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={saklarChecked}
                              onChange={(e) => setSaklarChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div className="space-y-1">
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Saklar & Stop Kontak Panasonic
                              </label>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] text-slate-500">
                                  Jumlah:
                                  <input 
                                    type="number"
                                    min="1"
                                    value={saklarQty}
                                    onChange={(e) => setSaklarQty(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-10 ml-1 text-center bg-slate-50 border border-slate-200 rounded text-[10px] font-bold"
                                  /> unit
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costSaklar)}
                          </span>
                        </div>

                        {saklarChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga per Unit: {formatRupiah(saklarPrice)}</span>
                              <span>Rentang: Rp 15k - Rp 50k</span>
                            </div>
                            <input 
                              type="range"
                              min="15000"
                              max="50000"
                              step="1000"
                              value={saklarPrice}
                              onChange={(e) => setSaklarPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                      {/* Exhaust Fan */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        exhaustChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={exhaustChecked}
                              onChange={(e) => setExhaustChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div className="space-y-1">
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Pemasangan Exhaust Fan KDK
                              </label>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] text-slate-500">
                                  Jumlah:
                                  <input 
                                    type="number"
                                    min="1"
                                    value={exhaustQty}
                                    onChange={(e) => setExhaustQty(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-10 ml-1 text-center bg-slate-50 border border-slate-200 rounded text-[10px] font-bold"
                                  /> unit
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costExhaust)}
                          </span>
                        </div>

                        {exhaustChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga per Unit: {formatRupiah(exhaustPrice)}</span>
                              <span>Rentang: Rp 200k - Rp 1.5M</span>
                            </div>
                            <input 
                              type="range"
                              min="200000"
                              max="1500000"
                              step="25000"
                              value={exhaustPrice}
                              onChange={(e) => setExhaustPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                      {/* Instalasi Listrik (Kabel & Pipa) */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        instalasiListrikChecked ? 'bg-white border-violet-200 shadow-sm' : 'bg-slate-100/50 border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <input 
                              type="checkbox"
                              checked={instalasiListrikChecked}
                              onChange={(e) => setInstalasiListrikChecked(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded text-violet-600 accent-violet-600"
                            />
                            <div className="space-y-1">
                              <label className="font-display font-bold text-sm text-slate-800 block">
                                Instalasi Kabel Listrik & Pipa Conduit
                              </label>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] text-slate-500">
                                  Jumlah Titik:
                                  <input 
                                    type="number"
                                    min="1"
                                    value={instalasiListrikQty}
                                    onChange={(e) => setInstalasiListrikQty(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-10 ml-1 text-center bg-slate-50 border border-slate-200 rounded text-[10px] font-bold"
                                  /> titik (ttk)
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-violet-600 font-mono">
                            {formatRupiah(costInstalasiListrik)}
                          </span>
                        </div>

                        {instalasiListrikChecked && (
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Harga Jasa+Material: {formatRupiah(instalasiListrikPrice)} / ttk</span>
                              <span>Rentang: Rp 150k - Rp 350k</span>
                            </div>
                            <input 
                              type="range"
                              min="150000"
                              max="350000"
                              step="5000"
                              value={instalasiListrikPrice}
                              onChange={(e) => setInstalasiListrikPrice(parseInt(e.target.value))}
                              className="w-full accent-violet-600"
                            />
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                )}

                {/* -------------------------------------------
                    STEP 5: HALAMAN HASIL (REKAPITULASI)
                    ------------------------------------------- */}
                {currentStep === 5 && (
                  <div className="space-y-6 animate-in fade-in duration-300 print-section">
                    <div className="border-b border-slate-200/60 pb-3">
                      <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                        <ClipboardList className="w-5 h-5 text-violet-600" />
                        <span>Rekapitulasi Anggaran Rencana (RAB)</span>
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        Tinjau seluruh rincian volume, upah satuan, dan total pembiayaan yang telah Anda konfigurasikan.
                      </p>
                    </div>

                    {/* Tabel Ringkasan */}
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm overflow-x-auto">
                      <table className="w-full text-left text-xs font-sans">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-bold text-[10px] tracking-wider">
                          <tr>
                            <th className="px-4 py-3.5">Nama Item Pekerjaan</th>
                            <th className="px-4 py-3.5 text-center">Volume</th>
                            <th className="px-4 py-3.5 text-center">Satuan</th>
                            <th className="px-4 py-3.5 text-right">Harga Satuan</th>
                            <th className="px-4 py-3.5 text-right">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                          {plesterAciChecked && (
                            <tr>
                              <td className="px-4 py-3">Plester & Aci Dinding</td>
                              <td className="px-4 py-3 text-center font-mono">{volumeDindingKotor.toFixed(2)}</td>
                              <td className="px-4 py-3 text-center">m²</td>
                              <td className="px-4 py-3 text-right font-mono">{formatRupiah(plesterAciPrice)}</td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costPlesterAci)}</td>
                            </tr>
                          )}
                          {pengecatanChecked && (
                            <tr>
                              <td className="px-4 py-3">Pengecatan Dinding</td>
                              <td className="px-4 py-3 text-center font-mono">{volumeDindingKotor.toFixed(2)}</td>
                              <td className="px-4 py-3 text-center">m²</td>
                              <td className="px-4 py-3 text-right font-mono">{formatRupiah(pengecatanPrice)}</td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costPengecatan)}</td>
                            </tr>
                          )}
                          {keramikLantaiChecked && (
                            <tr>
                              <td className="px-4 py-3">Pemasangan Keramik/Granit</td>
                              <td className="px-4 py-3 text-center font-mono">{volumeLantai.toFixed(2)}</td>
                              <td className="px-4 py-3 text-center">m²</td>
                              <td className="px-4 py-3 text-right font-mono">{formatRupiah(keramikLantaiPrice)}</td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costKeramikLantai)}</td>
                            </tr>
                          )}
                          {bongkarLantaiChecked && (
                            <tr>
                              <td className="px-4 py-3">Bongkar Lantai Lama</td>
                              <td className="px-4 py-3 text-center font-mono">{volumeLantai.toFixed(2)}</td>
                              <td className="px-4 py-3 text-center">m²</td>
                              <td className="px-4 py-3 text-right font-mono">{formatRupiah(bongkarLantaiPrice)}</td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costBongkarLantai)}</td>
                            </tr>
                          )}
                          {catKusenChecked && (
                            <tr>
                              <td className="px-4 py-3">Cat Kusen & Pintu ({catPintuSpec})</td>
                              <td className="px-4 py-3 text-center font-mono">{volumeCatKusen.toFixed(2)}</td>
                              <td className="px-4 py-3 text-center">m'</td>
                              <td className="px-4 py-3 text-right font-mono">
                                {formatRupiah(catKusenPrice)} {ducoSurcharge > 0 && <span className="text-[9px] text-slate-400 block">+ Duco Surcharge</span>}
                              </td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costCatKusen)}</td>
                            </tr>
                          )}
                          {pasangLampuChecked && (
                            <tr>
                              <td className="px-4 py-3">Pasang Lampu ({pasangLampuSpec})</td>
                              <td className="px-4 py-3 text-center font-mono">{pasangLampuQty}</td>
                              <td className="px-4 py-3 text-center">Unit</td>
                              <td className="px-4 py-3 text-right font-mono">{formatRupiah(pasangLampuPrice)}</td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costPasangLampu)}</td>
                            </tr>
                          )}
                          {saklarChecked && (
                            <tr>
                              <td className="px-4 py-3">Saklar & Stop Kontak</td>
                              <td className="px-4 py-3 text-center font-mono">{saklarQty}</td>
                              <td className="px-4 py-3 text-center">Unit</td>
                              <td className="px-4 py-3 text-right font-mono">{formatRupiah(saklarPrice)}</td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costSaklar)}</td>
                            </tr>
                          )}
                          {exhaustChecked && (
                            <tr>
                              <td className="px-4 py-3">Pemasangan Exhaust Fan</td>
                              <td className="px-4 py-3 text-center font-mono">{exhaustQty}</td>
                              <td className="px-4 py-3 text-center">Unit</td>
                              <td className="px-4 py-3 text-right font-mono">{formatRupiah(exhaustPrice)}</td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costExhaust)}</td>
                            </tr>
                          )}
                          {instalasiListrikChecked && (
                            <tr>
                              <td className="px-4 py-3">Instalasi Listrik Jasa+Mat</td>
                              <td className="px-4 py-3 text-center font-mono">{instalasiListrikQty}</td>
                              <td className="px-4 py-3 text-center">ttk</td>
                              <td className="px-4 py-3 text-right font-mono">{formatRupiah(instalasiListrikPrice)}</td>
                              <td className="px-4 py-3 text-right font-mono text-slate-900 font-bold">{formatRupiah(costInstalasiListrik)}</td>
                            </tr>
                          )}

                          {grandTotal === 0 && (
                            <tr>
                              <td colSpan={5} className="px-4 py-8 text-center text-slate-400">
                                Tidak ada item pekerjaan yang dicentang. Silakan kembali ke tahap sebelumnya untuk mengonfigurasi.
                              </td>
                            </tr>
                          )}
                        </tbody>
                        <tfoot className="bg-slate-900 text-white font-mono font-bold">
                          <tr>
                            <td colSpan={4} className="px-4 py-4 uppercase text-right tracking-wider">Grand Total Estimasi RAB:</td>
                            <td className="px-4 py-4 text-right text-amber-400 text-sm sm:text-base">{formatRupiah(grandTotal)}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    {/* Official Trust Badge for Report */}
                    <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/50 text-xs text-amber-900 leading-relaxed space-y-1">
                      <p className="font-bold flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-amber-600" />
                        <span>Estimasi Harga Bersifat Rencana Anggaran Awal</span>
                      </p>
                      <p className="text-amber-800 font-sans">
                        RAB di atas dihitung secara sistematis menggunakan formula upah material wilayah Surabaya & Sidoarjo. Ajukan survey gratis sekarang untuk mendapatkan penawaran kontrak fisik resmi bergaransi PT Mitra Tukang Surabaya.
                      </p>
                    </div>

                    {/* Action buttons inside Hasil */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        onClick={handlePrint}
                        className="flex-1 bg-slate-800 hover:bg-slate-950 text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Cetak RAB / Simpan PDF</span>
                      </button>
                      <button
                        onClick={handleWhatsAppConsult}
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                      >
                        <span>Kirim ke Admin (Konsultasi Detail)</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                )}
              </div>

              {/* BOTTOM NAVIGATION BUTTONS FOR STEPPER (KECUALI JIKA DI HASIL) */}
              <div className="flex justify-between items-center pt-8 border-t border-slate-200/60 mt-8">
                {currentStep > 1 ? (
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center gap-1.5 transition-all focus:outline-none"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md focus:outline-none"
                  >
                    <span>Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="bg-white hover:bg-slate-100 text-violet-600 border border-violet-200 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center gap-1.5 transition-all focus:outline-none"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Hitung Ulang</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          FLOATING CUSTOMER SERVICE BUTTON (DARK BG)
          ======================================================== */}
      <div className="fixed bottom-6 right-24 z-40">
        <a
          href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Halo%20PT%20Mitra%20Tukang%20Surabaya,%20saya%20memerlukan%20bantuan%20layanan%20survey%20/%20konsultasi%20mengenai%20perhitungan%20RAB.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 hover:bg-slate-950 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-slate-800 text-xs font-bold"
        >
          <MessageSquare className="w-4 h-4 text-amber-400 fill-current" />
          <span>Customer Service</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </a>
      </div>

    </section>
  );
}
