import { SEO_KEYWORDS } from '../data';
import { Search, MapPin, Sparkles } from 'lucide-react';

export default function SEOSection() {
  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-brand-gray-light p-6 sm:p-8 rounded-3xl border border-slate-200/50">
          {/* Left panel */}
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-brand-orange animate-spin" />
              <span>Pencarian Terkait Jawa Timur</span>
            </div>
            <h3 className="font-display font-bold text-lg text-brand-navy">
              Kategori Layanan Pertukangan Populer
            </h3>
            <p className="font-sans text-xs text-slate-500 max-w-md leading-relaxed">
              Temukan kami di pencarian Google untuk seluruh layanan renovasi, perbaikan kebocoran, instalasi baja ringan, kelistrikan, dan konstruksi di Surabaya Raya.
            </p>
          </div>

          {/* Right panel: Keyword cloud */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end max-w-xl">
            {SEO_KEYWORDS.map((keyword, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-brand-navy hover:text-white border border-slate-200 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 cursor-default transition-all duration-300"
              >
                <Search className="w-3.5 h-3.5 text-brand-orange" />
                <span>{keyword}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
