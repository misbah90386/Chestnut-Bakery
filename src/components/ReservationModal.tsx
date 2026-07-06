import React, { useState } from 'react';
import { X, Calendar, User, Clock, Users, Coffee, Check, ShieldAlert } from 'lucide-react';
import { ReservationInfo } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'ar';
}

export default function ReservationModal({ isOpen, onClose, language }: ReservationModalProps) {
  const isRtl = language === 'ar';
  
  const [formData, setFormData] = useState<ReservationInfo>({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    time: '09:00',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reservation confirmation dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      // Generate a random luxury reservation code
      const randomCode = 'CHST-' + Math.floor(1000 + Math.random() * 9000);
      setBookingRef(randomCode);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: 2,
      date: '',
      time: '09:00',
      notes: ''
    });
    setBookingRef(null);
    onClose();
  };

  // Pre-configured typical times for a breakfast café
  const timeSlots = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '17:00', '19:00', '21:00', '22:00'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div
        onClick={handleReset}
        className="absolute inset-0 bg-[#2C1E14]/75 backdrop-blur-xs transition-opacity"
      ></div>

      {/* Main Modal Box */}
      <div className="relative bg-white rounded-sm border border-[#2C1E14]/10 shadow-2xl max-w-lg w-full overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Subtle top gold accent bar */}
        <div className="h-[3px] bg-[#C5A059] flex-shrink-0"></div>

        {/* Header */}
        <div className="p-6 border-b border-[#2C1E14]/10 flex items-center justify-between flex-shrink-0" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
          <div className="flex items-center gap-2.5">
            <Calendar className="h-5 w-5 text-[#C5A059]" />
            <h2 className="font-serif text-lg sm:text-xl font-normal text-[#2C1E14]">
              {isRtl ? 'حجز طاولة جديدة' : 'Table Reservation'}
            </h2>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-sm hover:bg-[#F9F7F2] text-[#2C1E14]/70 hover:text-[#2C1E14] transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-grow" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
          
          {bookingRef ? (
            
            /* Success Receipt Display */
            <div className="text-center py-6 animate-fade-in-up">
              <div className="h-16 w-16 bg-[#25D366]/5 rounded-sm flex items-center justify-center mx-auto mb-4 border border-[#25D366]/20">
                <Check className="h-8 w-8 text-[#25D366]" />
              </div>
              
              <h3 className="font-serif text-2xl font-normal text-[#2C1E14]">
                {isRtl ? 'تم تأكيد حجزك بنجاح!' : 'Reservation Confirmed!'}
              </h3>
              <p className="text-xs text-[#2C1E14]/75 mt-2 font-light">
                {isRtl
                  ? 'يسعدنا جداً استقبالكم في تشسنت بيكري. تم حجز طاولتكم وتأمين التفاصيل أدناه:'
                  : "We are thrilled to host you at Chestnut Bakery. Your table details are locked in below:"}
              </p>

              {/* Receipt Summary Box */}
              <div className="my-8 bg-[#F9F7F2] border border-[#2C1E14]/10 rounded-sm p-6 text-left space-y-3.5 shadow-inner">
                
                {/* Booking Code */}
                <div className="flex justify-between border-b border-[#2C1E14]/10 pb-3">
                  <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                    {isRtl ? 'رمز الحجز المرجعي' : 'Booking Reference'}
                  </span>
                  <span className="text-sm font-mono font-bold text-[#2C1E14] tracking-wider">
                    {bookingRef}
                  </span>
                </div>

                {/* Name */}
                <div className="flex justify-between text-xs">
                  <span className="text-[#2C1E14]/65">{isRtl ? 'الاسم الكريم:' : 'Guest Name:'}</span>
                  <span className="font-semibold text-[#2C1E14]">{formData.name}</span>
                </div>

                {/* Party size */}
                <div className="flex justify-between text-xs">
                  <span className="text-[#2C1E14]/65">{isRtl ? 'عدد الضيوف:' : 'Guests:'}</span>
                  <span className="font-semibold text-[#2C1E14]">
                    {formData.guests} {isRtl ? 'أشخاص' : 'People'}
                  </span>
                </div>

                {/* Date & Time */}
                <div className="flex justify-between text-xs">
                  <span className="text-[#2C1E14]/65">{isRtl ? 'التاريخ والوقت:' : 'Date & Time:'}</span>
                  <span className="font-semibold text-[#2C1E14]">
                    {formData.date} @ {formData.time}
                  </span>
                </div>

                {/* Note */}
                {formData.notes && (
                  <div className="border-t border-[#2C1E14]/10 pt-3 text-xs">
                    <span className="block text-[#2C1E14]/65 mb-1">{isRtl ? 'ملاحظات إضافية:' : 'Special requests:'}</span>
                    <p className="italic text-[#2C1E14] text-[11px] font-light leading-relaxed">
                      "{formData.notes}"
                    </p>
                  </div>
                )}

              </div>

              {/* Reset button to close */}
              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#2C1E14] hover:bg-[#C5A059] text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-md transition-colors cursor-pointer"
              >
                {isRtl ? 'حفظ وإغلاق النافذة' : 'Done & Close'}
              </button>

            </div>

          ) : (

            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Notice advice */}
              <div className="flex items-start gap-2.5 p-3.5 bg-[#C5A059]/5 border border-[#C5A059]/15 rounded-sm">
                <Coffee className="h-4.5 w-4.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <p className="text-[10px] sm:text-xs text-[#2C1E14]/90 leading-normal font-light">
                  {isRtl
                    ? 'يرجى العلم أننا نحتفظ بالطاولة المحجوزة لمدة ١٥ دقيقة كحد أقصى من وقت الحجز المحدد قبل إتاحتها للآخرين.'
                    : 'Please note that we hold your reserved table for a maximum of 15 minutes past your booking time.'}
                </p>
              </div>

              {/* Guest Name */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                  {isRtl ? 'الاسم الكريم للحجز' : 'Guest Name'} *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isRtl ? 'مثال: سارة محمد' : 'e.g. Sarah M.'}
                    className="w-full pl-10 pr-4 py-2.5 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] text-[#2C1E14]"
                  />
                  <User className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-[#C5A059]`} />
                </div>
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
                    className="w-full px-4 py-2.5 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] text-[#2C1E14]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                    {isRtl ? 'رقم الهاتف (لتأكيد الحجز)' : 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 50 000 0000"
                    className="w-full px-4 py-2.5 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] text-[#2C1E14]"
                  />
                </div>
              </div>

              {/* Date, Time, and Guest selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Guests */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                    {isRtl ? 'عدد الأشخاص' : 'Party Size'}
                  </label>
                  <div className="relative">
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] text-[#2C1E14] appearance-none bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {isRtl ? 'أشخاص' : 'People'}
                        </option>
                      ))}
                    </select>
                    <Users className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-[#C5A059] pointer-events-none`} />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                    {isRtl ? 'التاريخ' : 'Date'} *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]} // prevent backward date booking
                    className="w-full px-3 py-2.5 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] text-[#2C1E14]"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                    {isRtl ? 'الوقت المفضل' : 'Preferred Time'}
                  </label>
                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] text-[#2C1E14] appearance-none bg-white"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <Clock className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-[#C5A059] pointer-events-none`} />
                  </div>
                </div>

              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1.5">
                  {isRtl ? 'طلبات أو ملاحظات خاصة (اختياري)' : 'Special Requests (Optional)'}
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes || ''}
                  onChange={handleChange}
                  placeholder={isRtl ? 'مثال: طاولة خارجية، كرسي أطفال...' : 'e.g. Patio seating, toddler chair, allergy...'}
                  className="w-full px-4 py-2.5 border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] text-[#2C1E14] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#2C1E14] hover:bg-[#C5A059] text-white text-xs font-bold uppercase tracking-widest rounded-sm cursor-pointer shadow-md hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (isRtl ? 'جاري تأكيد حجزك...' : 'Confirming...') : (isRtl ? 'تأكيد الحجز الآن' : 'Reserve Table Now')}
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
