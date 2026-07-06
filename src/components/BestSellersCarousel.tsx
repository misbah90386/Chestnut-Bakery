import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Plus } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface BestSellersCarouselProps {
  language: 'en' | 'ar';
  onAddToCart: (item: MenuItem) => void;
}

export default function BestSellersCarousel({ language, onAddToCart }: BestSellersCarouselProps) {
  const isRtl = language === 'ar';
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter only items marked as best sellers
  const bestSellers = MENU_ITEMS.filter((item) => item.isBestSeller);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // approximate width of card + gap
      // In RTL, "left" moves right and "right" moves left relative to normal scroll
      const multiplier = isRtl ? (direction === 'left' ? 1 : -1) : (direction === 'left' ? -1 : 1);
      carouselRef.current.scrollBy({
        left: scrollAmount * multiplier,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="bestsellers" className="py-20 bg-[#F9F7F2] relative overflow-hidden">
      {/* Decorative Golden Accent */}
      <div className="absolute top-1/2 right-0 translate-x-1/3 w-80 h-80 bg-[#C5A059]/5 rounded-sm blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header containing text and navigation arrows */}
        <div className={`flex items-end justify-between mb-10 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="text-left" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1px] w-6 bg-[#C5A059]"></div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
                {isRtl ? 'المفضل لدى عملائنا' : 'Curated Favorites'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C1E14]">
              {isRtl ? 'المنتجات الأكثر مبيعاً' : 'Featured Best Sellers'}
            </h2>
            <p className="text-xs sm:text-sm text-[#2C1E14]/70 mt-1 max-w-md font-light">
              {isRtl 
                ? 'أصناف مختارة بعناية حازت على حب ورضا زوارنا المتميزين.' 
                : 'Our most loved plates, desserts, and handcrafted brews.'}
            </p>
          </div>

          {/* Nav Buttons */}
          <div className={`hidden sm:flex gap-2.5 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-white text-[#2C1E14] rounded-sm hover:bg-[#2C1E14] hover:text-white transition-all duration-300 border border-[#2C1E14]/10 cursor-pointer shadow-sm hover:shadow"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-white text-[#2C1E14] rounded-sm hover:bg-[#2C1E14] hover:text-white transition-all duration-300 border border-[#2C1E14]/10 cursor-pointer shadow-sm hover:shadow"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            direction: isRtl ? 'rtl' : 'ltr'
          }}
        >
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="snap-start flex-shrink-0 w-[285px] sm:w-[310px] bg-white rounded-sm border border-[#2C1E14]/10 shadow-sm hover:shadow-md hover:border-[#C5A059]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Product Image Panel */}
              <div className="relative overflow-hidden rounded-t-sm h-48 sm:h-52">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Custom absolute overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Best seller golden badge */}
                <span className="absolute top-3.5 left-3.5 bg-[#C5A059] text-white text-[9px] font-bold py-1 px-2.5 rounded-sm uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current text-white" />
                  <span>{isRtl ? 'الأكثر طلباً' : 'Best Seller'}</span>
                </span>
                
                {/* Price tag */}
                <span className="absolute bottom-3 right-3 bg-white/95 text-[#2C1E14] text-xs font-bold py-1 px-2.5 rounded-sm shadow-sm">
                  {item.price} <span className="text-[10px] text-[#C5A059]">{isRtl ? 'ر.س' : 'SAR'}</span>
                </span>
              </div>

              {/* Product details */}
              <div className="p-5 flex-grow flex flex-col justify-between" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                <div>
                  <h3 className="font-serif text-lg font-normal text-[#2C1E14] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {isRtl ? item.arabicName : item.name}
                  </h3>
                  <p className="text-xs text-[#2C1E14]/70 mt-1.5 leading-relaxed line-clamp-2 h-8 font-light">
                    {isRtl ? item.arabicDescription : item.description}
                  </p>
                </div>

                {/* Add to Cart quick CTA */}
                <div className="mt-5 pt-3.5 border-t border-[#2C1E14]/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    {isRtl ? 'حب وحرفية' : 'Baked Fresh'}
                  </span>
                  
                  <button
                    onClick={() => onAddToCart(item)}
                    className="flex items-center gap-1.5 py-1.5 px-3.5 bg-[#2C1E14] text-white text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#C5A059] active:scale-95 cursor-pointer transition-all shadow-sm"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>{isRtl ? 'أضف للسلة' : 'Add to Cart'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Drag Tip for mobile view */}
        <div className="sm:hidden text-center mt-3 text-[11px] text-[#2C1E14]/55" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
          {isRtl ? '← اسحب لليسار لمشاهدة المزيد →' : '← Swipe horizontally to see more →'}
        </div>

      </div>
    </section>
  );
}
