import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface ReviewsSliderProps {
  language: 'en' | 'ar';
}

export default function ReviewsSlider({ language }: ReviewsSliderProps) {
  const isRtl = language === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="reviews" className="py-24 bg-[#FDFBF7] relative overflow-hidden border-t border-[#2C1E14]/5">
      
      {/* Decorative quotes background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F9F7F2] opacity-60 select-none pointer-events-none z-0">
        <Quote className="h-72 w-72 stroke-[0.35]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block mb-3">
            {isRtl ? 'آراء زوارنا' : 'Loved by Locals'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C1E14]">
            {isRtl ? 'شهادات نعتز بها' : 'Customer Reviews'}
          </h2>
          <div className="h-[1px] w-16 bg-[#C5A059] mx-auto mt-4"></div>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="bg-white rounded-sm border border-[#2C1E14]/10 shadow-lg p-8 sm:p-12 text-center relative overflow-hidden">
          
          {/* Subtle top gold accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059]"></div>

          {/* Golden stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#C5A059] text-[#C5A059]" />
            ))}
          </div>

          {/* Testimonial quote content */}
          <blockquote 
            className="text-base sm:text-lg md:text-xl font-serif text-[#2C1E14] font-normal leading-relaxed mb-8 px-2 sm:px-6 min-h-[90px]"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            "{isRtl ? current.arabicComment : current.comment}"
          </blockquote>

          {/* Reviewer Details */}
          <div className="flex flex-col items-center justify-center">
            
            {/* Avatar */}
            <img
              src={current.avatar}
              alt={current.name}
              className="w-14 h-14 rounded-full object-cover border border-[#C5A059] shadow-sm mb-3"
              referrerPolicy="no-referrer"
            />
            
            {/* Name */}
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#2C1E14]">
              {current.name}
            </h4>
            
            {/* Metadata (Riyadh verified reviewer) */}
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mt-0.5">
              {isRtl ? `مقيم في الرياض • ${current.date}` : `Riyadh Resident • ${current.date}`}
            </span>

          </div>

          {/* Slider Controllers Inside Card */}
          <div className={`flex justify-between items-center absolute bottom-1/2 translate-y-1/2 left-3 right-3 sm:left-6 sm:right-6 pointer-events-none z-20 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <button
              onClick={handlePrev}
              className="p-2.5 sm:p-3 bg-[#FDFBF7] text-[#2C1E14] rounded-sm hover:bg-[#2C1E14] hover:text-white transition-all duration-300 shadow border border-[#2C1E14]/10 cursor-pointer pointer-events-auto active:scale-90"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 sm:h-5 w-4 sm:w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3 bg-[#FDFBF7] text-[#2C1E14] rounded-sm hover:bg-[#2C1E14] hover:text-white transition-all duration-300 shadow border border-[#2C1E14]/10 cursor-pointer pointer-events-auto active:scale-90"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5" />
            </button>
          </div>

        </div>

        {/* Bullets Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-sm cursor-pointer transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-[#2C1E14]/15'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
