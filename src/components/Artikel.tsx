import React, { useState } from 'react';
import { ARTIKELS } from '../data';
import { BlogArticle } from '../types';
import { Calendar, Clock, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';

export default function Artikel() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const handleOpen = (article: BlogArticle) => {
    setSelectedArticle(article);
  };

  const handleClose = () => {
    setSelectedArticle(null);
  };

  return (
    <section id="artikel" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Edukasi & Inspirasi
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
            Artikel Terbaru & Tips Konstruksi
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Simak panduan praktis dari para insinyur dan mandor kami mengenai pemeliharaan rumah, pemilihan material kokoh, serta penghematan anggaran renovasi.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ARTIKELS.map((article) => (
            <article 
              key={article.id}
              onClick={() => handleOpen(article)}
              className="bg-brand-gray-light rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image panel */}
                <div className="h-48 relative overflow-hidden bg-brand-navy">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="h-2.5 w-px bg-slate-300"></span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom trigger line */}
              <div className="p-5 pt-0 border-t border-slate-200/50 mt-4 flex items-center justify-between text-xs font-bold text-brand-orange group-hover:text-brand-orange-hover">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-250">
            
            {/* Sticky Header inside modal */}
            <div className="sticky top-0 bg-white/90 backdrop-blur z-20 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-orange">
                <BookOpen className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest font-display">Ruang Edukasi</span>
              </div>
              <button 
                onClick={handleClose}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Banner image inside reader */}
            <div className="h-64 sm:h-72 relative bg-brand-navy">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Category tag overlay */}
              <span className="absolute bottom-4 left-6 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                {selectedArticle.category}
              </span>
            </div>

            {/* Reader Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Metadata row */}
              <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-orange" />
                  {selectedArticle.date}
                </span>
                <span className="h-3 w-px bg-slate-200"></span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  {selectedArticle.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy leading-tight">
                {selectedArticle.title}
              </h3>

              <div className="h-px bg-slate-100"></div>

              {/* Content text */}
              <div className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed space-y-4 whitespace-pre-line">
                {selectedArticle.content}
              </div>

              {/* Article Footer conversion */}
              <div className="mt-8 bg-brand-gray-light border border-slate-200 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left space-y-1">
                  <h4 className="font-display font-bold text-base text-brand-navy">Ingin Konsultasikan Proyek Terkait?</h4>
                  <p className="text-xs text-slate-500 font-sans">Dapatkan RAB rancangan khusus dan estimasi waktu gratis dari PT Mitra Tukang.</p>
                </div>
                <a
                  href={`https://wa.me/6282331949283?text=Halo%20PT%20Mitra%20Tukang%20Surabaya,%20saya%20membaca%20artikel%20"${encodeURIComponent(selectedArticle.title)}"%20dan%20tertarik%20untuk%20berkonsultasi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap"
                >
                  Konsultasi Sekarang
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
