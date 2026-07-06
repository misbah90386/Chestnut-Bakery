export interface MenuItem {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  arabicDescription: string;
  price: number; // in SAR
  category: string;
  image: string;
  isBestSeller?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  arabicComment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'interior' | 'bakery' | 'breakfast' | 'coffee' | 'sandwiches' | 'desserts' | 'all';
  image: string;
}

export interface ReservationInfo {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  notes: string;
}
