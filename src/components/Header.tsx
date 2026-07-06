import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Calendar, Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  onReserveOpen: () => void;
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  activeSection: string;
}

export default function Header({
  cartCount,
  onCartOpen,
  onReserveOpen,
  language,
  setLanguage,
  activeSection
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger a bounce animation on the shopping cart icon whenever the item count increases
  useEffect(() => {
    if (cartCount > 0) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const navLinks = [
    { id: 'hero', label: 'Home', arabicLabel: 'الرئيسية' },
    { id: 'about', label: 'About Us', arabicLabel: 'من نحن' },
    { id: 'menu', label: 'Our Menu', arabicLabel: 'قائمتنا' },
    { id: 'pillars', label: 'Why Choose Us', arabicLabel: 'ميزاتنا' },
    { id: 'gallery', label: 'Gallery', arabicLabel: 'المعرض' },
    { id: 'contact', label: 'Contact', arabicLabel: 'اتصل بنا' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
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

  const isRtl = language === 'ar';

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-header shadow-sm border-b border-[#2C1E14]/10 py-3'
          : 'bg-transparent py-5 border-b border-[#2C1E14]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="bg-[#2C1E14] text-[#FDFBF7] p-2 rounded-sm group-hover:bg-[#C5A059] transition-colors shadow-sm">
              <Coffee className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-serif font-bold text-xl text-[#2C1E14] tracking-tight leading-none italic">
                Chestnut <span className="text-[#C5A059] not-italic">Bakery</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] font-semibold text-[#C5A059] mt-0.5 text-right">
                تشسنت بيكري
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#2C1E14]'
                      : 'text-[#2C1E14] hover:text-[#C5A059] hover:bg-[#F9F7F2]'
                  }`}
                >
                  {isRtl ? link.arabicLabel : link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#2C1E14] hover:text-[#C5A059] hover:bg-[#F9F7F2] rounded-sm cursor-pointer transition-colors border border-[#2C1E14]/10"
              title={language === 'en' ? 'Arabic' : 'English'}
            >
              <Globe className="h-3.5 w-3.5 text-[#C5A059]" />
              <span className="tracking-wider">{language === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Reservation CTA Button (desktop) */}
            <button
              onClick={onReserveOpen}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 bg-[#2C1E14] hover:bg-[#C5A059] text-white text-xs font-bold tracking-widest uppercase rounded-sm cursor-pointer shadow-sm transition-all duration-300 hover:shadow active:scale-95"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>{isRtl ? 'حجز طاولة' : 'Reserve Table'}</span>
            </button>

            {/* Shopping Cart Trigger */}
            <button
              onClick={onCartOpen}
              className={`relative p-2 text-[#2C1E14] hover:bg-[#F9F7F2] rounded-sm cursor-pointer transition-all ${
                animateCart ? 'scale-110' : 'scale-100'
              }`}
            >
              <ShoppingBag className="h-5.5 w-5.5 text-[#2C1E14]" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#C5A059] text-[9px] font-bold text-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C1E14] hover:bg-[#F9F7F2] rounded-sm cursor-pointer lg:hidden transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FDFBF7] border-b border-[#2C1E14]/10 shadow-lg py-4 px-6 animate-fade-in-up">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left py-3 px-4 rounded-sm font-semibold tracking-wider uppercase text-xs transition-all ${
                    isActive
                      ? 'bg-[#2C1E14] text-white shadow-sm'
                      : 'text-[#2C1E14] hover:bg-[#F9F7F2]'
                  }`}
                  style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                >
                  {isRtl ? link.arabicLabel : link.label}
                </button>
              );
            })}
            <hr className="my-2 border-[#2C1E14]/10" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveOpen();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#C5A059] hover:bg-[#B48E47] text-white rounded-sm text-xs font-bold uppercase tracking-widest shadow-md active:scale-95 transition-all"
            >
              <Calendar className="h-4 w-4" />
              <span>{isRtl ? 'حجز طاولة الآن' : 'Reserve Table Now'}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
