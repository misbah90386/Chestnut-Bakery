import React, { useState, useMemo } from 'react';
import { Search, Sparkles, AlertCircle, ShoppingBag, Check } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data';

interface MenuSectionProps {
  language: 'en' | 'ar';
  onAddToCart: (item: MenuItem) => void;
  cartItems: { [id: string]: number }; // to show active quantity added in the card!
}

export default function MenuSection({ language, onAddToCart, cartItems }: MenuSectionProps) {
  const isRtl = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on active category and search input (case-insensitive across name and description)
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesEn = item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
      const matchesAr = item.arabicName.includes(query) || item.arabicDescription.includes(query);
      
      return matchesCategory && (matchesEn || matchesAr);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#FDFBF7] relative scroll-mt-20 border-t border-[#2C1E14]/5">
      
      {/* Absolute Decorative shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9F7F2]/50 rounded-bl-sm blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#C5A059] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{isRtl ? 'قائمتنا الفاخرة' : 'Artisanal Selection'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C1E14]">
            {isRtl ? 'استكشف قائمة المأكولات' : 'Discover Our Menu'}
          </h2>
          <div className="h-[1px] w-20 bg-[#C5A059] mx-auto mt-4"></div>
        </div>

        {/* Search & Category Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-[#2C1E14]/10 pb-8">
          
          {/* Categories Pill Container */}
          <div 
            className="w-full md:w-auto flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 snap-start px-4.5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#2C1E14] text-white border border-[#2C1E14]'
                      : 'bg-white text-[#2C1E14] hover:bg-[#F9F7F2] border border-[#2C1E14]/10 hover:border-[#C5A059]/40'
                  }`}
                  style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                >
                  {isRtl ? cat.arabicName : cat.name}
                </button>
              );
            })}
          </div>

          {/* Elegant Search Input */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? 'ابحث عن صنفك المفضل...' : 'Search deliciousness...'}
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#2C1E14]/10 rounded-sm text-xs tracking-wider uppercase focus:outline-none focus:border-[#C5A059] transition-all text-[#2C1E14]"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            />
            <Search className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-[#C5A059] pointer-events-none`} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute ${isRtl ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-wider text-[#2C1E14]/50 hover:text-[#2C1E14] cursor-pointer`}
              >
                {isRtl ? 'مسح' : 'Clear'}
              </button>
            )}
          </div>

        </div>

        {/* Products Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const activeCount = cartItems[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-sm border border-[#2C1E14]/10 shadow-sm hover:shadow-md hover:border-[#C5A059]/30 transition-all duration-300 group flex flex-col h-full overflow-hidden"
                >
                  {/* Image Holder */}
                  <div className="relative overflow-hidden h-48 sm:h-52 bg-[#F9F7F2]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Best Seller Badge overlay */}
                    {item.isBestSeller && (
                      <span className="absolute top-3 left-3 bg-[#2C1E14] text-white text-[9px] font-bold py-1 px-2.5 rounded-sm shadow-sm tracking-widest uppercase">
                        {isRtl ? 'مميز' : 'Best Seller'}
                      </span>
                    )}

                    {/* Quantity Badge in cart */}
                    {activeCount > 0 && (
                      <span className="absolute top-3 right-3 bg-[#C5A059] text-white text-[10px] font-bold h-5.5 w-5.5 rounded-full flex items-center justify-center shadow-md border border-white">
                        {activeCount}
                      </span>
                    )}

                    {/* Price stamp */}
                    <div className="absolute bottom-3 right-3 bg-white/95 text-[#2C1E14] text-xs font-bold py-1 px-2.5 rounded-sm shadow-sm border border-[#2C1E14]/5">
                      <span>{item.price}</span> <span className="text-[9px] text-[#C5A059] font-medium">{isRtl ? 'ر.س' : 'SAR'}</span>
                    </div>
                  </div>

                  {/* Core Card Body */}
                  <div className="p-5 flex-grow flex flex-col justify-between" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                    
                    <div>
                      {/* Name */}
                      <h3 className="font-serif text-base sm:text-lg font-normal text-[#2C1E14] group-hover:text-[#C5A059] transition-colors leading-snug">
                        {isRtl ? item.arabicName : item.name}
                      </h3>
                      
                      {/* Decription */}
                      <p className="text-xs text-[#2C1E14]/70 mt-1.5 leading-relaxed line-clamp-3 font-light">
                        {isRtl ? item.arabicDescription : item.description}
                      </p>
                    </div>

                    {/* Lower Area & Add CTA */}
                    <div className="mt-5 pt-4 border-t border-[#2C1E14]/10 flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">
                        {isRtl ? 'مكونات فاخرة' : 'Premium Grade'}
                      </span>
                      
                      <button
                        onClick={() => onAddToCart(item)}
                        className={`flex items-center gap-1.5 py-1.5 px-3.5 rounded-sm text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all duration-300 ${
                          activeCount > 0
                            ? 'bg-[#C5A059] text-white hover:bg-[#B48E47]'
                            : 'bg-[#2C1E14] text-white hover:bg-[#C5A059]'
                        } active:scale-95 shadow-sm`}
                      >
                        {activeCount > 0 ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            <span>{isRtl ? 'أضف المزيد' : 'Add More'}</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="h-3.5 w-3.5" />
                            <span>{isRtl ? 'أضف للسلة' : 'Add to Cart'}</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="text-center py-16 px-4 bg-white rounded-sm border border-[#2C1E14]/10 max-w-md mx-auto shadow-sm">
            <AlertCircle className="h-10 w-10 text-[#C5A059] mx-auto mb-3" />
            <h3 className="text-lg font-serif text-[#2C1E14]">
              {isRtl ? 'لا توجد نتائج مطابقة' : 'No Items Found'}
            </h3>
            <p className="text-xs sm:text-sm text-[#2C1E14]/70 mt-1">
              {isRtl
                ? 'لم نجد أي صنف يطابق بحثك. يرجى تجربة كلمات بحث أخرى.'
                : "We couldn't find anything matching your keywords. Please try another search term."}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-5 px-5 py-2.5 bg-[#2C1E14] hover:bg-[#C5A059] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
            >
              {isRtl ? 'إعادة تعيين الفلتر' : 'Reset Search'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
