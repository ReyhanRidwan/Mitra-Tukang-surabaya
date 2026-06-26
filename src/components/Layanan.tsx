import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Warehouse, 
  Store, 
  Wrench, 
  Fence, 
  Layers, 
  Grid, 
  Columns3, 
  Zap, 
  ShieldAlert, 
  Lightbulb, 
  Paintbrush, 
  PaintBucket, 
  Image as ImageIcon, 
  LayoutGrid, 
  SquareDot, 
  Gem, 
  Maximize2, 
  Triangle, 
  Flame, 
  Droplet, 
  Droplets, 
  Hammer,
  Search,
  Check,
  Phone,
  ArrowRight,
  X
} from 'lucide-react';
import { LAYANAN, CONTACT_INFO } from '../data';
import { Service } from '../types';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Home: Home,
  Building2: Building2,
  Warehouse: Warehouse,
  Store: Store,
  Wrench: Wrench,
  Fence: Fence,
  Layers: Layers,
  Grid: Grid,
  Columns3: Columns3,
  Zap: Zap,
  ShieldAlert: ShieldAlert,
  Lightbulb: Lightbulb,
  Paintbrush: Paintbrush,
  PaintBucket: PaintBucket,
  Image: ImageIcon,
  LayoutGrid: LayoutGrid,
  SquareDot: SquareDot,
  Gem: Gem,
  Maximize2: Maximize2,
  Triangle: Triangle,
  Flame: Flame,
  Droplet: Droplet,
  Droplets: Droplets,
  Hammer: Hammer
};

export default function Layanan() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = ['Semua', 'Renovasi', 'Plafon', 'Kelistrikan', 'Finishing', 'Konstruksi'];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'Plafon': return 'Plafon & Gypsum';
      case 'Semua': return 'Semua Layanan';
      default: return cat;
    }
  };

  const filteredServices = LAYANAN.filter(service => {
    const matchesCategory = activeCategory === 'Semua' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenDetail = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  const handleConsult = (service: Service) => {
    const message = `Halo PT Mitra Tukang Surabaya, saya tertarik dengan layanan *${service.title}* dan ingin melakukan konsultasi / survey lokasi gratis. Mohon infonya.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <section id="layanan" className="py-20 bg-brand-navy-dark text-white relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Layanan Spesialis
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Layanan Konstruksi & Renovasi Terlengkap
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Mulai dari perbaikan keran bocor minor hingga renovasi ruko dan gudang komersial berskala besar. Pilih kategori atau gunakan kotak pencarian di bawah untuk menemukan solusi Anda.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12">
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 border ${
                  activeCategory === cat 
                    ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/20 scale-105' 
                    : 'bg-brand-navy-light/50 border-white/10 text-slate-300 hover:bg-brand-navy-light hover:text-white'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px] lg:min-w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari layanan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-navy-light/60 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm font-sans placeholder-slate-400 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-white/10 rounded-full p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Home;
              return (
                <div
                  key={service.id}
                  onClick={() => handleOpenDetail(service)}
                  className="bg-brand-navy-light/40 hover:bg-brand-navy-light/80 border border-white/5 hover:border-brand-orange/30 rounded-2xl p-5 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-md relative overflow-hidden"
                >
                  <div>
                    {/* Hover glow background */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-all"></div>
                    
                    {/* Icon */}
                    <div className="w-11 h-11 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>

                    <h3 className="font-display font-bold text-base text-white group-hover:text-brand-orange transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="font-sans text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-brand-orange mt-5 group-hover:gap-2 transition-all">
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-brand-navy-light/30 rounded-2xl border border-white/5">
            <p className="text-slate-400 text-base mb-4">Layanan yang Anda cari tidak ditemukan.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); }}
              className="text-brand-orange font-semibold text-sm hover:underline"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}

        {/* Proactive CTA Ribbon */}
        <div className="mt-16 bg-gradient-to-r from-brand-orange/15 to-transparent border border-brand-orange/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-brand-orange text-white p-3 rounded-xl hidden sm:block">
              <Phone className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Butuh layanan kustom di luar daftar di atas?</h3>
              <p className="text-sm text-slate-400 font-sans">Sampaikan langsung ke tim teknis kami untuk solusi struktural properti Anda.</p>
            </div>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Halo%20PT%20Mitra%20Tukang%20Surabaya,%20saya%20memiliki%20kebutuhan%20kustom%20mengenai%20proyek%20saya.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all flex items-center gap-2 shrink-0 whitespace-nowrap"
          >
            <span>Hubungi Tim Kustom (WA)</span>
          </a>
        </div>

      </div>

      {/* Modern service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-brand-navy-light border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            {/* Image header */}
            <div className="h-48 relative overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-light to-transparent"></div>
              
              {/* Close Button */}
              <button 
                onClick={handleCloseDetail}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Badge */}
              <span className="absolute bottom-4 left-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                {getCategoryLabel(selectedService.category)}
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">
                {selectedService.title}
              </h3>
              
              <p className="font-sans text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              {/* What client gets list */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase text-brand-orange tracking-widest">Satu Paket Termasuk:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Survey Lapangan Gratis</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-orange" />
                    <span>RAB Transparan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Garansi Pemeliharaan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Tukang Berpengalaman</span>
                  </div>
                </div>
              </div>

              {/* Consultation Conversion Button */}
              <div className="pt-4 border-t border-white/15 flex gap-3">
                <button
                  onClick={handleCloseDetail}
                  className="w-1/3 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  Kembali
                </button>
                <button
                  onClick={() => handleConsult(selectedService)}
                  className="w-2/3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Pesan / Tanya Survey</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
