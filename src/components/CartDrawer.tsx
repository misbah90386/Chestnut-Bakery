import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageCircle, AlertCircle } from 'lucide-react';
import { MenuItem, CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, qty: number) => void;
  onRemoveItem: (itemId: string) => void;
  language: 'en' | 'ar';
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  language
}: CartDrawerProps) {
  const isRtl = language === 'ar';
  
  // Checkout details state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [servicePref, setServicePref] = useState<'takeaway' | 'dine-in' | 'delivery'>('takeaway');

  if (!isOpen) return null;

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  // Compile WhatsApp checkout message and redirect
  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    // Prefilled template text compiling items and quantities
    let text = `*Chestnut Bakery (تشسنت بيكري) - New Order*\n`;
    text += `====================================\n\n`;
    
    if (customerName) {
      text += `*Customer Name:* ${customerName}\n`;
    }
    if (customerPhone) {
      text += `*Phone:* ${customerPhone}\n`;
    }
    
    const prefLabel = servicePref === 'takeaway' 
      ? 'Takeaway (استلام)' 
      : servicePref === 'dine-in' 
      ? 'Dine-In (جلسات داخلية)' 
      : 'Delivery (توصيل للمنزل)';
      
    text += `*Service Preference:* ${prefLabel}\n`;
    text += `====================================\n\n`;
    text += `*Order Items:* \n`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.menuItem.name}* (${item.menuItem.arabicName}) \n`;
      text += `    [Quantity: ${item.quantity}x] @ ${item.menuItem.price} SAR = *${item.menuItem.price * item.quantity} SAR*\n`;
    });

    text += `\n------------------------------------\n`;
    text += `*Subtotal:* *${subtotal} SAR*\n`;
    text += `====================================\n`;
    text += `Thank you for ordering with Chestnut Bakery! \n`;
    text += `شكراً لاختياركم تشسنت بيكري!`;

    // URL Encode
    const encodedText = encodeURIComponent(text);
    // Open WhatsApp API with the specific compiled text parameter
    const whatsappUrl = `https://wa.me/966500000000?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#2C1E14]/65 backdrop-blur-xs transition-opacity"
      ></div>

      {/* Floating Panel Container */}
      <div className={`absolute inset-y-0 ${isRtl ? 'left-0' : 'right-0'} max-w-full flex`}>
        
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full relative border-l border-[#2C1E14]/10">
          
          {/* Header */}
          <div className="p-6 border-b border-[#2C1E14]/10 flex items-center justify-between" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-[#C5A059]" />
              <h2 className="font-serif text-lg font-normal text-[#2C1E14]">
                {isRtl ? 'حقيبة الطلبات' : 'Shopping Cart'}
              </h2>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-[#F9F7F2] border border-[#2C1E14]/10 px-2.5 py-0.5 rounded-sm text-[#2C1E14]">
                {cartItems.length} {isRtl ? 'أصناف' : 'items'}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-sm hover:bg-[#F9F7F2] text-[#2C1E14]/70 hover:text-[#2C1E14] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart items list / Empty state */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            {cartItems.length === 0 ? (
              
              /* Empty state */
              <div className="text-center py-16 flex flex-col items-center justify-center h-full">
                <ShoppingBag className="h-12 w-12 text-[#C5A059] mb-4 animate-bounce" />
                <h3 className="font-serif text-base sm:text-lg font-normal text-[#2C1E14]">
                  {isRtl ? 'سلة تسوقك فارغة' : 'Your cart is empty'}
                </h3>
                <p className="text-xs text-[#2C1E14]/75 mt-1.5 max-w-xs leading-relaxed font-light">
                  {isRtl
                    ? 'لم تقم بإضافة أي منتج حتى الآن. تصفح قائمتنا الحرفية واختر ما تشتهيه.'
                    : "You haven't added any products yet. Browse our bakery selection and choose your favorites."}
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-[#2C1E14] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#C5A059] transition-colors cursor-pointer"
                >
                  {isRtl ? 'تصفح القائمة الآن' : 'Browse Menu'}
                </button>
              </div>

            ) : (

              /* Cart items grid */
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="flex items-center gap-4 p-3 bg-[#F9F7F2] border border-[#2C1E14]/5 rounded-sm"
                  >
                    {/* Item Image */}
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-16 h-16 rounded-sm object-cover flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    {/* Meta details */}
                    <div className="flex-grow min-w-0">
                      <h4 className="font-serif text-sm font-bold text-[#2C1E14] truncate">
                        {isRtl ? item.menuItem.arabicName : item.menuItem.name}
                      </h4>
                      <span className="text-xs text-[#C5A059] font-medium block mt-0.5">
                        {item.menuItem.price} {isRtl ? 'ر.س' : 'SAR'}
                      </span>
                      
                      {/* Quantity Modifier */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                          className="p-1 rounded-sm bg-white border border-[#2C1E14]/10 text-[#2C1E14] hover:bg-[#F9F7F2] transition-colors cursor-pointer"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-bold text-[#2C1E14] w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                          className="p-1 rounded-sm bg-white border border-[#2C1E14]/10 text-[#2C1E14] hover:bg-[#F9F7F2] transition-colors cursor-pointer"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Trash remove trigger */}
                    <button
                      onClick={() => onRemoveItem(item.menuItem.id)}
                      className="p-2 text-[#2C1E14]/40 hover:text-red-500 hover:bg-red-50 rounded-sm cursor-pointer transition-colors"
                      title="Remove product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}

                {/* Checkout personal form */}
                <div className="border border-[#2C1E14]/10 pt-5 mt-6 space-y-4 bg-[#F9F7F2] p-4 rounded-sm">
                  
                  <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-wider">
                    {isRtl ? 'تفاصيل استلام الطلب' : 'Checkout details'}
                  </span>

                  {/* Customer Name */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1">
                      {isRtl ? 'اسم المستلم' : 'Receiver Name'}
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={isRtl ? 'مثال: سارة العتيبي' : 'e.g. Sarah J.'}
                      className="w-full px-3 py-2 bg-white border border-[#2C1E14]/10 rounded-sm text-xs focus:outline-none focus:border-[#C5A059] text-[#2C1E14]"
                    />
                  </div>

                  {/* Delivery Preference */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2C1E14] mb-1">
                      {isRtl ? 'طريقة الاستلام المفضلة' : 'Delivery Preference'}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['takeaway', 'dine-in', 'delivery'].map((pref) => {
                        const isActive = servicePref === pref;
                        const label = pref === 'takeaway' ? (isRtl ? 'استلام' : 'Takeaway') : pref === 'dine-in' ? (isRtl ? 'طاولة' : 'Dine-In') : (isRtl ? 'توصيل' : 'Delivery');
                        return (
                          <button
                            key={pref}
                            onClick={() => setServicePref(pref as any)}
                            className={`py-1.5 px-1 rounded-sm text-[10px] font-bold text-center cursor-pointer transition-all ${
                              isActive
                                ? 'bg-[#2C1E14] text-white'
                                : 'bg-white border border-[#2C1E14]/10 text-[#2C1E14]'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

            )}
          </div>

          {/* Footer containing Total & Checkout Trigger */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#2C1E14]/10 bg-[#FDFBF7]" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
              
              {/* Checkout details display */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-[#2C1E14]">
                  {isRtl ? 'المجموع الفرعي:' : 'Subtotal:'}
                </span>
                <span className="font-serif text-lg font-bold text-[#2C1E14]">
                  {subtotal} {isRtl ? 'ر.س' : 'SAR'}
                </span>
              </div>

              {/* Notice info */}
              <div className="flex items-start gap-2 p-3 bg-[#C5A059]/5 border border-[#C5A059]/15 rounded-sm mb-4 text-left">
                <AlertCircle className="h-4 w-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <p className="text-[10px] text-[#2C1E14]/90 leading-relaxed font-light">
                  {isRtl
                    ? 'سيتم تجميع طلبك وإرساله كرسالة منسقة إلى واتساب المخبز لتأكيد الطلب والدفع بأمان.'
                    : 'Your order will be compiled and sent as a structured message to our bakery WhatsApp line to securely confirm & pay.'}
                </p>
              </div>

              {/* Instant WhatsApp ordering CTA */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold rounded-sm cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4 fill-current text-white" />
                <span>{isRtl ? 'إرسال الطلب عبر واتساب' : 'Order via WhatsApp'}</span>
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
