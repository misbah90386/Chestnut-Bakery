import React from 'react';
import { Sparkles, Heart, Award, ShieldCheck } from 'lucide-react';

interface AboutUsProps {
  language: 'en' | 'ar';
}

export default function AboutUs({ language }: AboutUsProps) {
  const isRtl = language === 'ar';

  const values = [
    {
      icon: <Sparkles className="h-5 w-5 text-[#C5A059]" />,
      title: 'Our Craft',
      arabicTitle: 'حرفتنا وأصالتنا',
      desc: 'Sourdough and pastries fermenting naturally for optimal flavor structure.',
      arabicDesc: 'عجينة الساوردو ومخبوزاتنا تتخمر طبيعياً لمنحكم قواماً مثالياً وهضماً مريحاً.'
    },
    {
      icon: <Heart className="h-5 w-5 text-[#C5A059]" />,
      title: 'Handcrafted Passion',
      arabicTitle: 'شغف بكل تفصيلة',
      desc: 'Each loaf is hand-shaped, baked with love, and served fresh from oven to table.',
      arabicDesc: 'كل رغيف يُشكل يدوياً بكل عناية ويُخبز ليوضع ساخناً من الفرن إلى مائدتكم.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-96 bg-[#F9F7F2] rounded-r-sm filter blur-3xl opacity-65"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Image Collage (Asymmetric Design) */}
          <div className="lg:col-span-6 relative">
            
            {/* Main large image - interior */}
            <div className="relative z-10 rounded-sm overflow-hidden shadow-lg border border-[#2C1E14]/10 transform hover:scale-[1.01] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"
                alt="Chestnut Bakery Cozy Interior"
                className="w-full h-[380px] sm:h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E14]/40 to-transparent"></div>
            </div>

            {/* Overlapping Floating badge/box */}
            <div className="absolute -bottom-6 -right-6 md:right-4 z-20 bg-[#2C1E14] text-[#FDFBF7] p-6 rounded-sm shadow-xl max-w-xs border border-[#C5A059]/20 transform hover:-translate-y-1 transition-transform duration-300">
              <span className="block font-serif text-2xl italic text-[#C5A059] mb-1">Riyadh</span>
              <span className="block text-[10px] font-bold tracking-widest text-[#FDFBF7]/80 uppercase">
                {isRtl ? 'المحمدية، بيور سنتر' : 'Al Mohammadiyyah, Pure Center'}
              </span>
              <span className="block text-[11px] text-[#FDFBF7]/70 mt-2 font-light">
                {isRtl ? 'تصميم مستوحى من أعرق المخابز والمقاهي الأوروبية الكلاسيكية' : 'Designed with deep roots in European bakery traditions.'}
              </span>
            </div>

            {/* Decorative gold background card frame */}
            <div className="absolute -top-4 -left-4 w-72 h-72 border border-[#C5A059]/35 rounded-sm z-0 pointer-events-none"></div>

          </div>

          {/* Right Block: Pure Copy & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#C5A059]"></div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
                {isRtl ? 'قصة المخبز الحرفي' : 'About Chestnut Bakery'}
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#2C1E14] mb-6 leading-[1.05]">
              {isRtl ? (
                <>
                  شغف الخبز التقليدي <br />
                  <span className="text-[#C5A059] italic font-light">وروح المذاق الفاخر</span>
                </>
              ) : (
                <>
                  Crafted by Hand, <br />
                  <span className="text-[#C5A059] italic font-light">Served with Golden Warmth</span>
                </>
              )}
            </h2>

            {/* Core Story Text */}
            <p className="text-sm text-[#2C1E14]/80 mb-8 leading-relaxed font-light">
              {isRtl ? (
                'تشسنت بيكري (Chestnut Bakery) هو مخبز ومقهى حرفي عصري يجمع بين عراقة الفنون الفرنسية والأوروبية في الخبز وبين الحداثة والضيافة الراقية في قلب الرياض. نحن مكرسون تماماً لتقديم أشهى المعجنات الطازجة اليومية، خبز الساوردو الطبيعي، السندوتشات الحرفية، والقهوة المختصة المحضرة بعناية فائقة. نستخدم أرقى المكونات والزبدة الفاخرة لنهدي حواسك تجربة غنية مفعمة بالدفء والسعادة في كل زيارة.'
              ) : (
                'Chestnut Bakery is a modern artisan bakery and café dedicated to serving freshly baked pastries, handcrafted sandwiches, premium coffee, and delicious desserts. Every item is prepared using high-quality ingredients to provide an unforgettable dining experience in a warm, welcoming space reminiscent of modern European boutique cafés.'
              )}
            </p>

            {/* Structured Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-sm bg-[#F9F7F2]/60 border border-[#2C1E14]/10 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-3.5 bg-[#FDFBF7] p-2.5 w-10 h-10 rounded-sm flex items-center justify-center border border-[#2C1E14]/5 shadow-inner">
                    {v.icon}
                  </div>
                  <h4 className="font-serif italic font-bold text-base text-[#2C1E14] mb-1">
                    {isRtl ? v.arabicTitle : v.title}
                  </h4>
                  <p className="text-xs text-[#2C1E14]/70 leading-relaxed font-light">
                    {isRtl ? v.arabicDesc : v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Signature Signoff */}
            <div className="border-t border-[#2C1E14]/10 pt-6 flex items-center justify-between">
              <div>
                <span className="block font-serif italic text-lg font-bold text-[#C5A059]">Chestnut Baker Team</span>
                <span className="block text-[10px] tracking-widest text-[#2C1E14]/50 uppercase mt-0.5 font-bold">
                  {isRtl ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2C1E14] border-b border-[#C5A059] pb-1 cursor-pointer hover:text-[#C5A059] transition-all">
                <span>{isRtl ? 'اكتشف حكايتنا' : 'Discover Our Heritage'}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
