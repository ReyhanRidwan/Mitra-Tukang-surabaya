import { PROSES_KERJA } from '../data';
import { HelpCircle, ChevronDown, CheckSquare } from 'lucide-react';

export default function ProsesKerja() {
  return (
    <section id="proses-kerja" className="py-20 bg-brand-navy-dark text-white relative">
      {/* Background visual indicators */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-gray-light/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Sistematis & Profesional
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Alur Proses Kerja Konstruksi & Renovasi
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Kami menerapkan SOP yang ketat di setiap tahapan proyek agar seluruh proses pembangunan terpantau rapi, tepat budget, dan serah terima tepat waktu.
          </p>
        </div>

        {/* Timeline Stepper Container */}
        <div className="relative">
          {/* Central Line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-orange via-white/10 to-brand-orange/40 -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-16">
            {PROSES_KERJA.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Empty side on desktop */}
                  <div className="hidden lg:block lg:w-1/2 px-12"></div>

                  {/* Node Dot in the middle */}
                  <div className="relative z-10 flex items-center justify-center my-4 lg:my-0">
                    <div className="w-12 h-12 rounded-full bg-brand-navy border-4 border-brand-orange text-brand-orange font-display font-bold text-base flex items-center justify-center shadow-lg shadow-brand-orange/15">
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12">
                    <div className="bg-brand-navy-light/55 border border-white/5 hover:border-brand-orange/20 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-md group relative">
                      {/* Accent highlight */}
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange rounded-l-2xl"></div>

                      <span className="text-brand-orange text-xs font-bold uppercase tracking-widest block mb-1">
                        Langkah {step.step}
                      </span>
                      
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-brand-orange transition-colors mb-3">
                        {step.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conversion Trust Point below timeline */}
        <div className="mt-20 text-center">
          <p className="text-sm text-slate-400 flex items-center justify-center gap-2 mb-4">
            <CheckSquare className="w-4.5 h-4.5 text-brand-orange animate-pulse" />
            Setiap pengerjaan dilaporkan secara berkala kepada Anda via laporan foto & video WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
