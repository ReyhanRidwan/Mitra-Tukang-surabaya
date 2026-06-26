import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-brand-navy-dark text-white relative">
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Tanya Jawab (FAQ)
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Temukan jawaban cepat mengenai prosedur kerjasama, kebijakan garansi pemeliharaan, serta area layanan operasional kami di bawah ini.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-brand-navy-light/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-orange/10 text-brand-orange p-2 rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <HelpCircle className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="font-display font-bold text-sm sm:text-base text-white group-hover:text-brand-orange transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 group-hover:text-white transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Answer body */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 border-t border-white/5' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="p-5 sm:p-6 bg-brand-navy-light/20">
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for still wondering */}
        <div className="mt-12 bg-white/5 border border-white/5 p-6 rounded-2xl text-center space-y-4">
          <p className="text-sm text-slate-300">Punya pertanyaan spesifik lainnya?</p>
          <a
            href="https://wa.me/6282331949283?text=Halo%20PT%20Mitra%20Tukang%20Surabaya,%20ada%20yang%20ingin%20saya%20tanyakan%20mengenai..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-brand-orange/20 transition-all gap-2 items-center"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tanyakan Langsung via WhatsApp (24 Jam)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
