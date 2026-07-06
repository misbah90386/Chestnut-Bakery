import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import BestSellersCarousel from './components/BestSellersCarousel';
import MenuSection from './components/MenuSection';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSlider from './components/ReviewsSlider';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ReservationModal from './components/ReservationModal';
import { MenuItem, CartItem } from './types';
import { MENU_ITEMS } from './data';

export default function App() {
  // Global States
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Load initial language preference if any or set default RTL for Arabic support
  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Scroll spy mechanism to dynamically track the currently active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'menu', 'pillars', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset for sticky header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Cart Helpers ---
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
    // Auto open drawer to provide clear instant visual feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prev) => ({
      ...prev,
      [itemId]: qty
    }));
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  };

  // Compile cart state into structural list values
  const compiledCartItems: CartItem[] = useMemo(() => {
    return Object.keys(cart)
      .map((id) => {
        const menuItem = MENU_ITEMS.find((item) => item.id === id);
        return {
          menuItem: menuItem!,
          quantity: cart[id]
        };
      })
      .filter((item) => item.menuItem !== undefined);
  }, [cart]);

  // Aggregate quantity values
  const cartCount = useMemo(() => {
    return Object.keys(cart).reduce((acc, id) => acc + (cart[id] || 0), 0);
  }, [cart]);

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

  const isRtl = language === 'ar';

  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-[#2C2520] transition-colors duration-300 font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Sticky Top Header Navigation */}
      <Header
        cartCount={cartCount}
        onCartOpen={() => setIsCartOpen(true)}
        onReserveOpen={() => setIsReserveOpen(true)}
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        
        {/* Full-width Hero Landing Banner */}
        <Hero
          language={language}
          onOrderOnline={() => {
            setIsCartOpen(true);
            scrollToSection('menu');
          }}
          onViewMenu={() => scrollToSection('menu')}
        />

        {/* Story Section of Bakery */}
        <AboutUs language={language} />

        {/* Best Sellers Scrollable Carousel */}
        <BestSellersCarousel
          language={language}
          onAddToCart={handleAddToCart}
        />

        {/* Multi-category Filtering Menu Section */}
        <MenuSection
          language={language}
          onAddToCart={handleAddToCart}
          cartItems={cart}
        />

        {/* Brand Core Pillars */}
        <WhyChooseUs language={language} />

        {/* Customer Testimonials Slider */}
        <ReviewsSlider language={language} />

        {/* Masonry image gallery & Lightbox modal */}
        <GallerySection language={language} />

        {/* Location Contact Form, WhatsApp CTA, Google Maps integration */}
        <ContactSection language={language} />

      </main>

      {/* Beautiful Footer containing Quick Links, newsletter, legal info */}
      <Footer language={language} />

      {/* E-commerce Checkout Cart Drawer Overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={compiledCartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        language={language}
      />

      {/* Table Booking Modal Overlay */}
      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
        language={language}
      />

    </div>
  );
}
