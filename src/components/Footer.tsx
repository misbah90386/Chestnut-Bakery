import React, { useState } from 'react';
import { Coffee, Mail, ArrowUp, Instagram, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

export default function Footer({ language }: FooterProps) {
  const isRtl = language === 'ar';
  
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;

    // Simulate standard subscription pipeline
    setTimeout(() => {
      setSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }, 1000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#2C1E14] text-[#FDFBF7]/85 font-sans relative overflow-hidden pt-16 pb-8 border-t border-[#C5A059]/15">
      
      {/* Decorative Golden Accent Shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Grid: Branding, Links, and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Pitch (4 cols) */}
          <div className="md:col-span-4 space-y-4" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <div className="flex items-center gap-2.5 text-left cursor-pointer" onClick={handleScrollToTop}>
              <div className="bg-[#FDFBF7] text-[#2C1E14] p-2 rounded-sm">
                <Coffee className="h-5 w-5 text-[#C5A059]" />
              </div>
              <div>
                <span className="block font-serif font-bold text-lg text-white">
                  Chestnut <span className="text-[#C5A059]">Bakery</span>
                </span>
                <span className="block text-[10px] font-bold text-[#C5A059] tracking-widest text-right">
                  تشسنت بيكري
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-sm pt-2">
              {isRtl
                ? 'مخبز ومقهى حرفي يدمج الأصالة الأوروبية بالضيافة السعودية الدافئة في قلب مدينة الرياض، لنقدم لكم معجنات طازجة وقهوة مثالية يومياً.'
                : 'A premium artisan bakery and boutique café merging traditional European baking with warm Saudi hospitality in the heart of Riyadh.'}
            </p>

            {/* Social media circle buttons */}
            <div className="flex gap-3 pt-3">
              <a
                href="https://instagram.com/chestnutbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 bg-white/5 hover:bg-[#C5A059] hover:text-[#2C1E14] text-[#C5A059] rounded-sm flex items-center justify-center transition-all duration-300 border border-white/10 shadow-sm"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 bg-white/5 hover:bg-[#C5A059] hover:text-[#2C1E14] text-[#C5A059] rounded-sm flex items-center justify-center transition-all duration-300 border border-white/10 shadow-sm"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4 md:ps-8" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <h4 className="font-serif italic font-bold text-[#C5A059] text-base">
              {isRtl ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: 'hero', name: 'Home', arabic: 'الصفحة الرئيسية' },
                { id: 'about', name: 'About Us', arabic: 'قصتنا ومن نحن' },
                { id: 'menu', name: 'Our Menu', arabic: 'قائمة الأصناف' },
                { id: 'pillars', name: 'Why Choose Us', arabic: 'ميزات المخبز' },
                { id: 'gallery', name: 'Photo Gallery', arabic: 'معرض الصور' },
                { id: 'contact', name: 'Contact & Location', arabic: 'الموقع والاتصال' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#C5A059] hover:underline cursor-pointer transition-colors"
                  >
                    {isRtl ? link.arabic : link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter Box (5 cols) */}
          <div className="md:col-span-5 space-y-4" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <h4 className="font-serif italic font-bold text-[#C5A059] text-base">
              {isRtl ? 'النشرة البريدية الحصرية' : 'The Chestnut Journal'}
            </h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              {isRtl
                ? 'اشترك لتصلك عروضنا الصباحية الخاصة، منتجاتنا الجديدة، وأخبار المخبز الحصرية أولاً بأول.'
                : 'Subscribe to receive freshly brewed updates, seasonal pastry drops, and secret invitations directly in your inbox.'}
            </p>

            {subscribed ? (
              /* Success prompt */
              <div className="bg-white/5 border border-[#25D366]/30 p-4 rounded-sm flex items-center gap-3 animate-fade-in-up">
                <CheckCircle2 className="h-5 w-5 text-[#25D366] flex-shrink-0" />
                <span className="text-xs text-white font-semibold">
                  {isRtl ? 'تم اشتراكك بنجاح! شكراً لك.' : 'Subscribed successfully! Thank you.'}
                </span>
              </div>
            ) : (
              /* Input form */
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder={isRtl ? 'أدخل بريدك الإلكتروني...' : 'Enter your email...'}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 pl-10 text-xs focus:outline-none focus:border-[#C5A059] text-white"
                  />
                  <Mail className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-[#C5A059]/60`} />
                </div>
                <button
                  type="submit"
                  className="bg-[#C5A059] hover:bg-[#B48E47] text-[#2C1E14] font-bold px-4 py-3 rounded-sm text-xs cursor-pointer shadow-md transition-all active:scale-95"
                >
                  {isRtl ? 'اشترك' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower Row: Privacy links and copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          
          {/* Left copyright notice */}
          <p className="text-center sm:text-left">
            &copy; 2026 Chestnut Bakery (تشسنت بيكري). {isRtl ? 'جميع الحقوق محفوظة.' : 'All Rights Reserved.'}
          </p>

          {/* Crafted with love */}
          <div className="flex items-center gap-1">
            <span>{isRtl ? 'صُنع بحب في الرياض' : 'Crafted with heart in Riyadh'}</span>
            <Heart className="h-3 w-3 fill-current text-red-500 animate-pulse" />
          </div>

          {/* Privacy and terms links */}
          <div className="flex gap-4">
            <button className="hover:text-[#C5A059] hover:underline cursor-pointer">
              {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>
            <span>&bull;</span>
            <button className="hover:text-[#C5A059] hover:underline cursor-pointer">
              {isRtl ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </button>
          </div>

        </div>

      </div>

      {/* Persistent floating Scroll to Top Circle */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 bg-[#FDFBF7] text-[#2C1E14] p-3 rounded-sm hover:bg-[#C5A059] hover:text-[#2C1E14] cursor-pointer transition-all duration-300 z-30 shadow-lg border border-[#2C1E14]/15 active:scale-90"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4.5 w-4.5" />
      </button>

    </footer>
  );
}
