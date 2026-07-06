import React from 'react';
import { Flame, Sparkles, Coffee, UtensilsCrossed, Smile, Sofa, Zap, Truck } from 'lucide-react';
import { CORE_PILLARS } from '../data';

interface WhyChooseUsProps {
  language: 'en' | 'ar';
}

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const isRtl = language === 'ar';

  // Map individual pillar IDs from data.ts to custom elegant Lucide icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'pil-1':
        return <Flame className="h-6 w-6 text-[#C5A059]" />;
      case 'pil-2':
        return <Sparkles className="h-6 w-6 text-[#C5A059]" />;
      case 'pil-3':
        return <Coffee className="h-6 w-6 text-[#C5A059]" />;
      case 'pil-4':
        return <UtensilsCrossed className="h-6 w-6 text-[#C5A059]" />;
      case 'pil-5':
        return <Smile className="h-6 w-6 text-[#C5A059]" />;
      case 'pil-6':
        return <Sofa className="h-6 w-6 text-[#C5A059]" />;
      case 'pil-7':
        return <Zap className="h-6 w-6 text-[#C5A059]" />;
      case 'pil-8':
        return <Truck className="h-6 w-6 text-[#C5A059]" />;
      default:
        return <Sparkles className="h-6 w-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="pillars" className="py-24 bg-[#F9F7F2] relative overflow-hidden border-t border-[#2C1E14]/5">
      
      {/* Decorative Accent */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-[#C5A059]/5 rounded-sm blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block mb-3">
            {isRtl ? 'لماذا تختار تشسنت بيكري؟' : 'The Chestnut Distinction'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C1E14]">
            {isRtl ? 'تجربة خبز ومذاق لا تُنسى' : 'Why Choose Chestnut Bakery'}
          </h2>
          <div className="h-[1px] w-20 bg-[#C5A059] mx-auto mt-4"></div>
        </div>

        {/* Features Bento-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-sm p-6 sm:p-7 border border-[#2C1E14]/10 shadow-sm hover:shadow-md hover:border-[#C5A059]/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col group"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {/* Icon Container with gold accent background */}
              <div className="mb-5 bg-[#F9F7F2] group-hover:bg-[#C5A059]/10 p-3.5 w-12 h-12 rounded-sm flex items-center justify-center border border-[#2C1E14]/5 transition-colors duration-300">
                {getIcon(p.id)}
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-normal text-[#2C1E14] mb-2 group-hover:text-[#C5A059] transition-colors leading-snug">
                {isRtl ? p.arabicTitle : p.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2C1E14]/75 leading-relaxed font-light flex-grow">
                {isRtl ? p.arabicDescription : p.description}
              </p>

              {/* Tiny subtle gold line on card hover */}
              <div className="h-[1px] w-0 group-hover:w-full bg-[#C5A059] transition-all duration-300 mt-5"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
