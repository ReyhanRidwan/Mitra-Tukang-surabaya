import React from 'react';
import { 
  Briefcase, 
  Users, 
  DollarSign, 
  Eye, 
  Clock, 
  ShieldCheck, 
  Award, 
  Activity 
} from 'lucide-react';
import { KEUNGGULAN } from '../data';

// Map icon name to Lucide components
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Briefcase: Briefcase,
  Users: Users,
  DollarSign: DollarSign,
  Eye: Eye,
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Activity: Activity
};

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Komitmen Layanan
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
            Keunggulan Layanan PT Mitra Tukang Surabaya
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Kami menghadirkan standar kualitas konstruksi premium demi menjamin kepuasan, keamanan, dan ketahanan jangka panjang investasi properti Anda.
          </p>
        </div>

        {/* Grid of Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {KEUNGGULAN.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div 
                key={index}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-orange/30 hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-orange transition-all duration-300 group-hover:w-full"></div>
                
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-brand-orange/5 text-brand-orange flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-lg text-brand-navy mb-2.5 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Statistics Banner */}
        <div className="mt-16 bg-brand-navy rounded-3xl p-8 sm:p-10 border border-white/10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-brand-orange/10 to-transparent pointer-events-none"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-brand-orange mb-1">10+</div>
              <div className="font-sans text-xs sm:text-sm text-slate-300">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-brand-orange mb-1">1,200+</div>
              <div className="font-sans text-xs sm:text-sm text-slate-300">Proyek Selesai</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-brand-orange mb-1">45+</div>
              <div className="font-sans text-xs sm:text-sm text-slate-300">Tukang Tersertifikasi</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-brand-orange mb-1">99%</div>
              <div className="font-sans text-xs sm:text-sm text-slate-300">Kepuasan Klien</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
