import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  language: 'en' | 'ar';
}

export default function ContactSection({ language }: ContactSectionProps) {
  const isRtl = language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Auto dismiss success card
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const businessHours = [
    { days: 'Saturday - Thursday', arabicDays: 'السبت - الخميس', time: '6:00 AM - 12:00 AM', arabicTime: '6:00 ص - 12:00 منتصف الليل' },
    { days: 'Friday', arabicDays: 'الجمعة', time: '12:30 PM - 12:30 AM', arabicTime: '12:30 م - 12:30 بعد منتصف الليل' }
  ];

  return (
    <section id="contact" className="py-24 bg-[#FDFBF7] relative scroll-mt-20 border-t border-[#2C1E14]/5">
      
      {/* Golden glow backplate */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A059]/5 rounded-tr-sm blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block mb-3">
            {isRtl ? 'تفضل بزيارتنا أو تواصل معنا' : 'Visit & Inquire'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C1E14]">
            {isRtl ? 'اتصل بنا وموقعنا' : 'Contact Us'}
          </h2>
          <div className="h-[1px] w-20 bg-[#C5A059] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left / Center Panel (Business details + Embedded Map) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            
            {/* Quick stats / contacts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address card */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#2C1E14]/10 rounded-sm shadow-sm">
                <div className="bg-[#F9F7F2] p-3 rounded-sm border border-[#2C1E14]/5 text-[#C5A059]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif italic font-bold text-[#2C1E14] mb-1 text-base">
                    {isRtl ? 'موقعنا في الرياض' : 'Our Location'}
                  </h4>
                  <p className="text-xs text-[#2C1E14]/80 leading-relaxed font-light">
                    3213 As Safarjal, Pure Center,<br />
                    Al Mohammadiyyah, Riyadh 12364
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#2C1E14]/10 rounded-sm shadow-sm">
                <div className="bg-[#F9F7F2] p-3 rounded-sm border border-[#2C1E14]/5 text-[#C5A059]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif italic font-bold text-[#2C1E14] mb-1 text-base">
                    {isRtl ? 'أوقات العمل' : 'Business Hours'}
                  </h4>
                  {businessHours.map((bh, idx) => (
                    <div key={idx} className="mb-1 last:mb-0">
                      <span className="block text-[9px] font-bold text-[#C5A059] uppercase tracking-widest">
                        {isRtl ? bh.arabicDays : bh.days}
                      </span>
                      <span className="block text-xs text-[#2C1E14]/80 font-light">
                        {isRtl ? bh.arabicTime : bh.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phones and WhatsApp */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#2C1E14]/10 rounded-sm shadow-sm">
                <div className="bg-[#F9F7F2] p-3 rounded-sm border border-[#2C1E14]/5 text-[#C5A059]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif italic font-bold text-[#2C1E14] mb-1 text-base">
                    {isRtl ? 'الهاتف والتواصل' : 'Phone & Chat'}
                  </h4>
                  <p className="text-xs text-[#2C1E14]/80 font-light mb-2">
                    {isRtl ? 'رقم الهاتف المباشر:' : 'Direct Line:'} <br />
                    <a href="tel:+966114881234" className="font-semibold text-[#C5A059] hover:underline">+966 11 488 1234</a>
                  </p>
                  <a
                    href="https://wa.me/966500000000?text=Hello%20Chestnut%20Bakery,%20I'd%20like%20to%20inquire%20about..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm transition-colors cursor-pointer"
                  >
                    <MessageCircle className="h-3.5 w-3.5 fill-current text-white" />
                    <span>{isRtl ? 'دردشة واتساب مباشر' : 'Chat on WhatsApp'}</span>
                  </a>
                </div>
              </div>

              {/* Email and Socials */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#2C1E14]/10 rounded-sm shadow-sm">
                <div className="bg-[#F9F7F2] p-3 rounded-sm border border-[#2C1E14]/5 text-[#C5A059]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif italic font-bold text-[#2C1E14] mb-1 text-base">
                    {isRtl ? 'البريد ومواقع التواصل' : 'Email & Social'}
                  </h4>
                  <p className="text-xs text-[#2C1E14]/80 font-light mb-2">
                    {isRtl ? 'للطلب والاستفسار:' : 'General inquiries:'} <br />
                    <a href="mailto:hello@chestnutbakery.com" className="font-semibold text-[#C5A059] hover:underline">hello@chestnutbakery.com</a>
                  </p>
                  <a
                    href="https://instagram.com/chestnutbakery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm transition-opacity cursor-pointer"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    <span>{isRtl ? 'انستغرام المخبز' : '@chestnutbakery'}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Google Map iframe integration */}
            <div className="rounded-sm overflow-hidden border border-[#2C1E14]/10 shadow h-[260px] sm:h-[320px] bg-[#F9F7F2] relative">
              <iframe
                title="Chestnut Bakery Riyadh Pure Center location map"
                src="https://maps.google.com/maps?q=3213%20As%20Safarjal,%20Pure%20Center,%20Al%20Mohammadiyyah,%20Riyadh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Panel: Send a message Form */}
          <div className="lg:col-span-5 bg-white rounded-sm border border-[#2C1E14]/10 shadow-lg p-6 sm:p-8 flex flex-col justify-between" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            
            <div>
              <h3 className="font-serif text-2xl font-normal text-[#2C1E14] mb-2">
                {isRtl ? 'أرسل لنا رسالة مباشرة' : 'Send us a Message'}
              </h3>
              <p className="text-xs text-[#2C1E14]/70 mb-6 leading-relaxed font-light">
                {isRtl 
                  ? 'لديك أي سؤال، استفسار أو طلب خاص؟ املأ هذا النموذج وسيتواصل معك مدير مقهانا فوراً.'
                  : "Have any questions, events, or specific requests? Message our general manager and we'll reply shortly."}
              </p>

              {submitSuccess ? (
                /* Success Prompt */
                <div className="bg-[#25D366]/5 border border-[#25D366]/20 p-6 rounded-sm text-center py-10 animate-fade-in-up">
                  <CheckCircle2 className="h-12 w-12 text-[#25D366] mx-auto mb-3" />
                  <h4 className="font-serif text-lg font-bold text-[#2C1E14] mb-2">
                    {isRtl ? 'تم إرسال رسالتك بنجاح' : 'Message Sent Successfully'}
                  </h4>
                  <p className="text-xs text-[#2C1E14]/80 leading-relaxed font-light">
                    {isRtl
                      ? 'شكراً لتواصلك مع تشسنت بيكري. تم استلام تفاصيل رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.'
                      : "Thank you for reaching out to Chestnut Bakery. Your message has been received, we will contact you shortly."}
                  </p>
                </div>
              ) : (
                /* Regular Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                      {isRtl ? 'الاسم الكريم' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={isRtl ? 'مثال: محمد السديري' : 'e.g. John Doe'}
                      className="w-full px-4 py-3 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] transition-all text-[#2C1E14]"
                    />
                  </div>

                  {/* Email & Phone layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                        {isRtl ? 'البريد الإلكتروني' : 'Email Address'} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="w-full px-4 py-3 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] transition-all text-[#2C1E14]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                        {isRtl ? 'رقم الهاتف (اختياري)' : 'Phone (Optional)'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 50 000 0000"
                        className="w-full px-4 py-3 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] transition-all text-[#2C1E14]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                      {isRtl ? 'تفاصيل رسالتك' : 'Your Message'} *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={isRtl ? 'اكتب ما يدور ببالك هنا...' : 'How can we delight you?'}
                      className="w-full px-4 py-3 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] transition-all text-[#2C1E14] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#2C1E14] hover:bg-[#C5A059] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm cursor-pointer shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{isSubmitting ? (isRtl ? 'جاري الإرسال...' : 'Sending...') : (isRtl ? 'أرسل الرسالة الآن' : 'Send Message')}</span>
                  </button>

                </form>
              )}
            </div>

            {/* Quick trust footprint on bottom of form */}
            <div className="mt-8 border-t border-[#2C1E14]/10 pt-4 text-center">
              <span className="text-[10px] text-[#2C1E14]/50 leading-none">
                {isRtl ? '© ٢٠٢٦ مخبز تشسنت. جميع البيانات مؤمنة ومشفرة.' : '© 2026 Chestnut Bakery. Your privacy is safe with us.'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
