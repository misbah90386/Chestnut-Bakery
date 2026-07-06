import React, { useState, useMemo } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  language: 'en' | 'ar';
}

export default function GallerySection({ language }: GallerySectionProps) {
  const isRtl = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'interior' | 'bakery' | 'breakfast' | 'coffee' | 'sandwiches' | 'desserts'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', name: 'All Photos', arabicName: 'كل الصور' },
    { id: 'interior', name: 'Our Cafe', arabicName: 'المقهى من الداخل' },
    { id: 'bakery', name: 'Bakes & Loaves', arabicName: 'المخبوزات' },
    { id: 'coffee', name: 'Specialty Coffee', arabicName: 'القهوة المختصة' },
    { id: 'breakfast', name: 'Artisan Food', arabicName: 'الأطباق والسندوتشات' }
  ];

  // Filter gallery items
  const filteredGallery = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'breakfast') {
        // combine food items
        return item.category === 'breakfast' || item.category === 'sandwiches' || item.category === 'desserts';
      }
      return item.category === selectedCategory;
    });
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    
    let nextIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;
    if (nextIndex >= filteredGallery.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = filteredGallery.length - 1;
    }
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-[#FDFBF7] relative overflow-hidden border-t border-[#2C1E14]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#C5A059] mb-3">
            <ImageIcon className="h-3.5 w-3.5" />
            <span>{isRtl ? 'لحظات مخبوزة بالحب' : 'Visual Story'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C1E14]">
            {isRtl ? 'معرض الصور الحصري' : 'Chestnut Gallery'}
          </h2>
          <div className="h-[1px] w-20 bg-[#C5A059] mx-auto mt-4"></div>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => {
            const isActive = selectedCategory === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => {
                  setSelectedCategory(filter.id as any);
                  closeLightbox();
                }}
                className={`px-4.5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#2C1E14] text-white border border-[#2C1E14]'
                    : 'bg-white text-[#2C1E14] border border-[#2C1E14]/10 hover:bg-[#F9F7F2]'
                }`}
              >
                {isRtl ? filter.arabicName : filter.name}
              </button>
            );
          })}
        </div>

        {/* Masonry-style Grid with premium scaling and hover overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-sm overflow-hidden aspect-[4/3] bg-[#F9F7F2] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer border border-[#2C1E14]/10"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Golden Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E14]/90 via-[#2C1E14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                
                {/* Search glass decorative icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-sm text-white transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <Eye className="h-4 w-4" />
                </div>

                {/* Caption Title */}
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-normal text-white">
                    {isRtl ? item.arabicTitle : item.title}
                  </h4>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-[#2C1E14]/98 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-fade-in-up"
          onClick={closeLightbox}
        >
          {/* Close trigger */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-sm cursor-pointer transition-colors z-50 animate-pulse"
            aria-label="Close Lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => navigateLightbox('prev', e)}
            className="absolute left-4 sm:left-8 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-sm cursor-pointer transition-colors z-45 active:scale-95"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Core Image Display & Caption */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-sm shadow-2xl border border-white/10 animate-fade-in-up"
              referrerPolicy="no-referrer"
            />
            
            {/* Description Card below image */}
            <div 
              className="text-center mt-5 text-white max-w-xl"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059]">
                {filteredGallery[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal mt-1 text-[#FDFBF7]">
                {isRtl ? filteredGallery[lightboxIndex].arabicTitle : filteredGallery[lightboxIndex].title}
              </h3>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => navigateLightbox('next', e)}
            className="absolute right-4 sm:right-8 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-sm cursor-pointer transition-colors z-45 active:scale-95"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

    </section>
  );
}
