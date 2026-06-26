import React, { useState, useEffect } from 'react';
import { TESTIMONI } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

export default function Testimoni() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev < TESTIMONI.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONI.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TESTIMONI.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimoni" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-slate-100 opacity-20 pointer-events-none select-none">
        <MessageSquare className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Testimoni Klien
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
            Apa Kata Mereka Tentang Kami?
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Berikut adalah review jujur dan testimoni asli dari pemilik properti pribadi, pengusaha, serta arsitek mitra kerja kami di wilayah Jawa Timur.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          {/* Main Card View */}
          <div className="overflow-hidden min-h-[320px] flex items-center">
            <div 
              className="w-full transition-all duration-500 ease-in-out transform"
              key={activeIndex}
            >
              <div className="bg-brand-gray-light rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md relative">
                {/* Quote Icon decorative */}
                <div className="absolute top-6 right-8 text-brand-orange/15 select-none pointer-events-none">
                  <Quote className="w-16 h-16 rotate-180" />
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  {/* Avatar */}
                  <img 
                    src={TESTIMONI[activeIndex].avatar} 
                    alt={TESTIMONI[activeIndex].name} 
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-orange shrink-0 shadow-sm"
                  />
                  
                  {/* Testimonial Core */}
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(TESTIMONI[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                      "{TESTIMONI[activeIndex].text}"
                    </p>

                    <div>
                      <h4 className="font-display font-bold text-base text-brand-navy">
                        {TESTIMONI[activeIndex].name}
                      </h4>
                      <p className="font-sans text-xs text-slate-500">
                        {TESTIMONI[activeIndex].role} • <span className="text-brand-orange font-semibold">{TESTIMONI[activeIndex].location}</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONI.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-brand-orange' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            {/* Prev/Next buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="bg-brand-navy hover:bg-brand-navy-light text-white p-3 rounded-full transition-colors shadow-md hover:scale-105"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="bg-brand-navy hover:bg-brand-navy-light text-white p-3 rounded-full transition-colors shadow-md hover:scale-105"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
