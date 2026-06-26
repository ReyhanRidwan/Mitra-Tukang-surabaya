import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kalkulator RAB', href: '#kalkulator-rab' },
    { label: 'Mengapa Kami', href: '#mengapa-kami' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Proses Kerja', href: '#proses-kerja' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Artikel', href: '#artikel' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-navy-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top Banner */}
      {!scrolled && (
        <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 pb-3 border-b border-white/10 text-xs text-slate-300 font-sans">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              Jam Operasional: {CONTACT_INFO.operationalHours}
            </span>
            <span className="h-3 w-px bg-white/20"></span>
            <span>Area: Surabaya • Sidoarjo • Gresik • Seluruh Jatim</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Penanggung Jawab: <strong className="text-white">{CONTACT_INFO.manager}</strong></span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#beranda" 
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-brand-orange p-2 rounded-lg text-white group-hover:bg-brand-orange-hover transition-colors duration-300">
              <Hammer className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-white tracking-tight leading-none">
                PT MITRA TUKANG
              </span>
              <span className="font-sans text-xs text-brand-orange tracking-widest font-semibold">
                SURABAYA
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-sans font-medium text-sm text-slate-300 hover:text-brand-orange transition-colors duration-200 py-2 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#form-survey"
              onClick={(e) => handleNavClick(e, '#form-survey')}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Survey Gratis</span>
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white p-2.5 rounded-lg hover:bg-brand-orange-hover transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-orange p-2 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] md:top-[80px] bottom-0 z-40 bg-brand-navy-dark/98 backdrop-blur-lg border-t border-white/10 transition-transform duration-300 ease-in-out px-4 py-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block font-sans font-semibold text-lg text-slate-200 hover:text-brand-orange py-2 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4">
            <div className="bg-brand-navy-light/60 p-4 rounded-xl border border-white/10">
              <p className="text-xs text-slate-400 mb-1">Hubungi Langsung (24 Jam)</p>
              <p className="text-base text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {CONTACT_INFO.phone}
              </p>
              <p className="text-xs text-slate-400 mt-2">Penanggung Jawab: {CONTACT_INFO.manager}</p>
            </div>

            <a
              href="#form-survey"
              onClick={(e) => handleNavClick(e, '#form-survey')}
              className="block text-center bg-brand-orange hover:bg-brand-orange-hover text-white py-3.5 rounded-xl font-bold shadow-lg shadow-brand-orange/25 transition-all"
            >
              Mulai Konsultasi & Survey Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
