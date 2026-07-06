import React from 'react';
import { Star, Flame, Award, Coffee, Utensils, ShoppingBag } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ar';
  onOrderOnline: () => void;
  onViewMenu: () => void;
}

export default function Hero({ language, onOrderOnline, onViewMenu }: HeroProps) {
  const isRtl = language === 'ar';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#2A1D15]"
    >
      {/* Premium Hero Background Image with deep luxurious overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1920"
          alt="Artisan bakery table"
          className="w-full h-full object-cover scale-105 filter brightness-[0.38] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Warm radial gradient for a high-end golden glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D15] via-[#2A1D15]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A1D15]/90 via-transparent to-[#2A1D15]/90"></div>
      </div>

      {/* Decorative Golden Ambient Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C5A880]/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FAF8F5]">
        
        {/* Tiny Premium Label (Editorial Line Accented) */}
        <div className="mb-8 inline-flex items-center justify-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#C5A059] animate-fade-in-up">
          <span className="w-8 h-[1px] bg-[#C5A059]/60"></span>
          <span>{isRtl ? 'مخبز ومقهى حرفي • الرياض' : 'Artisan Bakery & Café • Est. 2016'}</span>
          <span className="w-8 h-[1px] bg-[#C5A059]/60"></span>
        </div>

        {/* Dynamic Main Headings in Both Languages */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-8 max-w-5xl mx-auto leading-[0.95] text-white">
          {isRtl ? (
            <>
              خبز طازج. <br />
              <span className="italic font-light text-[#C5A059]">مثالي</span> ومُعد بحب.
            </>
          ) : (
            <>
              Freshly Baked.<br />
              <span className="italic font-light text-[#C5A059]">Perfectly</span> Brewed.
            </>
          )}
        </h1>

        {/* Dynamic Subheading */}
        <p className="text-[#FAF8F5]/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {isRtl
            ? 'استمتع بألذ المخبوزات الحرفية، السندوتشات الطازجة، القهوة المختصة الفاخرة، أطباق الفطور المبتكرة والحلويات الاستثنائية في أجواء أوروبية دافئة وراقية تلهم حواسك.'
            : 'Experience artisan bakery products, handcrafted sandwiches, specialty coffee, and premium desserts in an atmosphere of refined warmth.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            onClick={onViewMenu}
            className="w-full sm:flex-1 border border-white py-4 px-6 font-bold tracking-widest uppercase text-[11px] hover:bg-white hover:text-[#2C1E14] transition-all rounded-sm cursor-pointer"
          >
            {isRtl ? 'عرض القائمة الكاملة' : 'View Full Menu'}
          </button>

          <button
            onClick={onOrderOnline}
            className="w-full sm:flex-1 bg-[#C5A059] text-white py-4 px-6 font-bold tracking-widest uppercase text-[11px] hover:bg-[#B48E47] transition-all rounded-sm cursor-pointer"
          >
            {isRtl ? 'اطلب أونلاين' : 'Order Online'}
          </button>
        </div>

        {/* Trust Badges - Luxurious Minimalist Design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10">
          
          {/* Badge 1: Stars */}
          <div className="flex flex-col items-center p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-[#C5A059]/30 hover:bg-white/[0.04] transition-all duration-300">
            <span className="font-serif italic text-2xl text-[#C5A059] mb-1">4.4/5</span>
            <span className="text-[10px] uppercase tracking-widest text-[#FAF8F5]/50">
              {isRtl ? 'تقييم غوغل المميز' : 'Google Rating'}
            </span>
          </div>

          {/* Badge 2: Reviews */}
          <div className="flex flex-col items-center p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-[#C5A059]/30 hover:bg-white/[0.04] transition-all duration-300">
            <span className="font-serif italic text-2xl text-[#C5A059] mb-1">5,800+</span>
            <span className="text-[10px] uppercase tracking-widest text-[#FAF8F5]/50">
              {isRtl ? 'تقييم عميل' : 'Customer Reviews'}
            </span>
          </div>

          {/* Badge 3: Dine-In */}
          <div className="flex flex-col items-center p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-[#C5A059]/30 hover:bg-white/[0.04] transition-all duration-300 justify-center">
            <Utensils className="h-4.5 w-4.5 text-[#C5A059] mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#FAF8F5]/70">
              {isRtl ? 'جلسات داخلية' : 'Dine-In'}
            </span>
          </div>

          {/* Badge 4: Takeaway */}
          <div className="flex flex-col items-center p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-[#C5A059]/30 hover:bg-white/[0.04] transition-all duration-300 justify-center">
            <Coffee className="h-4.5 w-4.5 text-[#C5A059] mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#FAF8F5]/70">
              {isRtl ? 'استلام سفري' : 'Takeaway'}
            </span>
          </div>

          {/* Badge 5: Delivery */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-[#C5A059]/30 hover:bg-white/[0.04] transition-all duration-300 justify-center">
            <ShoppingBag className="h-4.5 w-4.5 text-[#C5A059] mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#FAF8F5]/70">
              {isRtl ? 'توصيل للمنزل' : 'Delivery'}
            </span>
          </div>

        </div>

      </div>

      {/* Decorative Bottom Scroll Down Hint */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[10px] font-semibold tracking-widest text-[#FAF8F5]/30 uppercase mb-1">
          {isRtl ? 'اسحب للأسفل' : 'Scroll Down'}
        </span>
        <div className="w-5 h-8 border border-[#FAF8F5]/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#C5A880] rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}
