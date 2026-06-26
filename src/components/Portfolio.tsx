import React, { useState } from 'react';
import { PORTFOLIO, CONTACT_INFO } from '../data';
import { PortfolioItem } from '../types';
import { MapPin, ZoomIn, X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'Semua',
    'Renovasi Rumah',
    'Renovasi Kantor',
    'Plafon',
    'Keramik',
    'Kanopi',
    'Instalasi Listrik',
    'Pengecatan',
    'Baja Ringan',
    'Bongkar Bangunan'
  ];

  const filteredItems = PORTFOLIO.filter(item => {
    return activeCategory === 'Semua' || item.category === activeCategory;
  });

  const openLightbox = (item: PortfolioItem) => {
    // Find index in the filtered items array
    const idx = filteredItems.findIndex(f => f.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  const handleConsult = (item: PortfolioItem) => {
    const msg = `Halo PT Mitra Tukang Surabaya, saya melihat portofolio proyek Anda "${item.title}" di ${item.location}. Saya ingin berkonsultasi mengenai pekerjaan serupa untuk properti saya.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="portfolio" className="py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Portofolio Proyek
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
            Galeri Proyek Selesai PT Mitra Tukang
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Berikut adalah dokumentasi pengerjaan proyek nyata tukang kami di lapangan dengan hasil akhir premium, rapi, dan sesuai standar arsitektur modern.
          </p>
        </div>

        {/* Category Tabs list */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap shrink-0 border ${
                activeCategory === cat
                  ? 'bg-brand-navy border-brand-navy text-white shadow-md scale-105'
                  : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-brand-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image Container with Zoom hover */}
                <div className="h-64 relative overflow-hidden bg-brand-navy">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 text-brand-navy p-3 rounded-full shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-brand-orange" />
                    </div>
                  </div>
                  
                  {/* Category Badge on card */}
                  <span className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-base mb-2">Belum ada portofolio di kategori ini.</p>
            <button 
              onClick={() => setActiveCategory('Semua')}
              className="text-brand-orange font-semibold text-sm hover:underline"
            >
              Lihat Semua Portofolio
            </button>
          </div>
        )}

      </div>

      {/* Full-screen Lightbox */}
      {lightboxIndex !== null && currentItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col md:flex-row items-stretch justify-between"
          onClick={closeLightbox}
        >
          {/* Close button top right */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black text-white p-3 rounded-full transition-colors border border-white/10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Side: Dynamic Image container */}
          <div className="flex-1 flex items-center justify-center p-4 relative min-h-0">
            <img 
              src={currentItem.image} 
              alt={currentItem.title} 
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 bg-black/40 hover:bg-black text-white p-3 rounded-full transition-all border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 bg-black/40 hover:bg-black text-white p-3 rounded-full transition-all border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Right Side: details panel */}
          <div 
            className="w-full md:w-[380px] lg:w-[420px] bg-brand-navy-dark text-white border-t md:border-t-0 md:border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {currentItem.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-white pt-2 leading-tight">
                  {currentItem.title}
                </h3>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm font-medium pt-1">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span>{currentItem.location}</span>
                </div>
              </div>

              <div className="h-px bg-white/10"></div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">Deskripsi Proyek:</h4>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-4 space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Kontraktor:</span>
                  <span className="text-white font-medium">PT Mitra Tukang Surabaya</span>
                </div>
                <div className="flex justify-between">
                  <span>Standar Kerja:</span>
                  <span className="text-white font-medium">Kerapian & K3 Konstruksi</span>
                </div>
                <div className="flex justify-between">
                  <span>Masa Garansi:</span>
                  <span className="text-brand-orange font-semibold">Tersedia Tertulis</span>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-3">
              <button
                onClick={() => handleConsult(currentItem)}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Konsultasikan Proyek Serupa</span>
              </button>
              <button
                onClick={closeLightbox}
                className="w-full bg-white/5 hover:bg-white/10 text-slate-300 py-3 rounded-xl text-xs font-semibold transition-colors"
              >
                Tutup Galeri
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
