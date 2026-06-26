import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, IMAGES } from '../data';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Hammer, 
  MessageSquare, 
  ArrowUp, 
  Check, 
  CheckCircle, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function Footer() {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloat(true);
      } else {
        setShowFloat(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ========================================================
          BOTTOM CTA SECTION
          ======================================================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-brand-navy-dark text-white">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.ctaBg} 
            alt="PT Mitra Tukang Surabaya Team" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-25 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/85 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-widest animate-pulse">
            <ShieldCheck className="w-4 h-4" />
            <span>Garansi Kualitas 100%</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Siap Renovasi atau Bangun Properti Anda?
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dapatkan kenyamanan membangun tanpa drama. Tim PT Mitra Tukang Surabaya siap membantu mewujudkan hunian impian Anda dengan estimasi harga paling efisien, rapi, dan bergaransi resmi.
          </p>

          {/* Quick trust metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 pt-2 pb-4">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-orange" />
              Survey Gratis
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-orange" />
              Konsultasi Gratis
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-orange" />
              Garansi Pemeliharaan
            </span>
          </div>

          <div className="flex justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Halo%20PT%20Mitra%20Tukang%20Surabaya,%20saya%20ingin%20melakukan%20konsultasi%20mengenai%20proyek%20saya.%20Mohon%20jadwalkan%20survey%20lokasi%20gratis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl text-base font-bold shadow-2xl shadow-brand-orange/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group"
            >
              <Phone className="w-5 h-5 fill-current animate-bounce" />
              <span>Konsultasi Gratis via WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================
          OFFICIAL COMPANY FOOTER
          ======================================================== */}
      <footer className="bg-brand-navy-dark text-slate-400 border-t border-white/10 pt-16 pb-8 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Company Profile */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-brand-orange p-2 rounded-lg text-white">
                  <Hammer className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-lg text-white tracking-tight leading-none">
                  PT MITRA TUKANG SURABAYA
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Solusi terlengkap jasa pertukangan, renovasi, instalasi baja ringan, plafon, keramik, pengecatan, hingga bongkar bangunan bergaransi tertulis dengan legalitas badan hukum resmi.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Tukang Aktif 24 Jam • 7 Hari</span>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-l-2 border-brand-orange pl-2.5">
                Pintasan Menu
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-xs">
                <li>
                  <a href="#beranda" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" />
                    <span>Beranda</span>
                  </a>
                </li>
                <li>
                  <a href="#keunggulan" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" />
                    <span>Keunggulan</span>
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" />
                    <span>Layanan</span>
                  </a>
                </li>
                <li>
                  <a href="#mengapa-kami" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" />
                    <span>Mengapa Kami</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" />
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#proses-kerja" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" />
                    <span>Proses Kerja</span>
                  </a>
                </li>
                <li>
                  <a href="#testimoni" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" />
                    <span>Testimoni</span>
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" />
                    <span>FAQ</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-l-2 border-brand-orange pl-2.5">
                Kontak & Admin
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400 font-semibold">WhatsApp Resmi:</p>
                    <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} className="text-white hover:text-brand-orange font-bold text-sm transition-colors block">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400">Jam Operasional:</p>
                    <p className="text-white font-semibold">{CONTACT_INFO.operationalHours}</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400">Penanggung Jawab Teknis:</p>
                    <p className="text-white font-bold">{CONTACT_INFO.manager}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Address Details */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-l-2 border-brand-orange pl-2.5">
                Kantor Pusat & Workshop
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-slate-300">
                    {CONTACT_INFO.address}
                  </span>
                </li>
                {/* Embedded Map mockup or design link */}
                <li className="pt-1">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 px-3.5 py-1.5 rounded-lg transition-all"
                  >
                    <span>Buka Google Maps</span>
                    <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="h-px bg-white/10 my-8"></div>

          {/* Copyright, legal disclaimer and SEO credits */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[11px] text-slate-500">
            <div>
              <p>© {currentYear} <strong>PT Mitra Tukang Surabaya</strong>. All Rights Reserved.</p>
              <p className="text-slate-600 mt-1">Jasa Renovasi Rumah Surabaya • Kontraktor Sipil Surabaya & Sidoarjo</p>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span>Keamanan Data Terjamin</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
              <span>100% Bebas Biaya Survey</span>
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================================
          FLOATING WHATSAPP & SCROLL TOP WIDGETS
          ======================================================== */}
      {showFloat && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Scroll to top */}
          <button
            onClick={handleScrollToTop}
            className="bg-brand-navy-light text-slate-300 hover:text-white p-3 rounded-full shadow-lg border border-white/10 hover:border-white/20 transition-all focus:outline-none hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          {/* WhatsApp Direct conversion button */}
          <a
            href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Halo%20PT%20Mitra%20Tukang%20Surabaya,%20saya%20memerlukan%20jasa%20pertukangan%20/%20renovasi%20properti.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 relative group shadow-[#25D366]/30 active:scale-95"
            aria-label="Chat via WhatsApp"
          >
            <MessageSquare className="w-6 h-6 fill-current text-white" />
            <span className="absolute right-full mr-3 bg-brand-navy-dark text-white border border-white/10 text-xs font-semibold px-3.5 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Tanya Estimasi / Survey (24 Jam)
            </span>
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
            </span>
          </a>

        </div>
      )}
    </>
  );
}
