import React from 'react';
import { Phone, CheckCircle, Shield, Award, Calendar, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data';

export default function Hero() {
  const handleStartClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <section id="beranda" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-brand-navy-dark">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBanner}
          alt="Proyek Konstruksi dan Renovasi PT Mitra Tukang Surabaya"
          className="w-full h-full object-cover object-center scale-105 filter brightness-30 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-transparent to-brand-navy-dark/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-wider animate-pulse">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              Kontraktor & Pertukangan Premium Jatim
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Jasa Renovasi & <br className="hidden sm:inline" />
              <span className="text-brand-orange">Pertukangan Profesional</span> Surabaya
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl leading-relaxed">
              Kami melayani jasa renovasi rumah, kantor, apartemen, gudang, ruko, hingga proyek pembangunan baru dengan tenaga ahli bersertifikat, harga transparan, dan siap melayani <span className="text-white font-semibold">24 Jam Nonstop</span>.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-white/90">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-medium">Garansi Pekerjaan Tertulis</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-medium">Tukang Ahli Bersertifikat</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-medium">Bahan Berstandar SNI</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#form-survey"
                onClick={(e) => handleStartClick(e, '#form-survey')}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/30 transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Survey Lokasi Gratis</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Halo%20PT%20Mitra%20Tukang%20Surabaya,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20saya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 text-brand-orange" />
                <span>Konsultasi Gratis (WA)</span>
              </a>
            </div>
          </div>

          {/* conversion Hero Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-all duration-500"></div>
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-orange/20 p-2.5 rounded-lg text-brand-orange">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Mitra Terpercaya</h3>
                    <p className="text-xs text-slate-400">Legalitas Resmi PT</p>
                  </div>
                </div>
                <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Siap Survey
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/5 p-2 rounded-lg text-slate-300 shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Pengerjaan Bergaransi</h4>
                    <p className="text-xs text-slate-400">Setiap hasil renovasi dilindungi garansi perawatan formal tertulis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/5 p-2 rounded-lg text-slate-300 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Transparansi RAB</h4>
                    <p className="text-xs text-slate-400">Rencana Anggaran Biaya rinci dan fixed price tanpa penambahan liar.</p>
                  </div>
                </div>

                <div className="bg-brand-navy-dark/60 border border-white/5 rounded-xl p-4 mt-2 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Wilayah Kerja</span>
                    <span className="text-white font-medium">Jawa Timur</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Survey Biaya</span>
                    <span className="text-emerald-400 font-bold">Gratis Rp 0</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Layanan Darurat</span>
                    <span className="text-brand-orange font-semibold">Siaga 24 Jam</span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={(e) => handleStartClick(e, '#form-survey')}
                  className="w-full bg-gradient-to-r from-brand-orange to-brand-orange-hover hover:from-brand-orange-hover hover:to-brand-orange text-white py-3 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Mulai Hitung Estimasi Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
