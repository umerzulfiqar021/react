import corporateTaxImg from '../assets/corporate_tax.png';
import baliMassageImg from '../assets/bali_massage.png';

export interface Category {
  id: string;
  name: string;
  iconName: 'spa' | 'hair' | 'face' | 'fitness';
}

export interface Experience {
  id: string;
  provider: string;
  title: string;
  location: string;
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
  category: string;
}

export const CATEGORIES: Category[] = [
  { id: 'spa', name: 'Spa & Massage', iconName: 'spa' },
  { id: 'hair', name: 'Hair Removal', iconName: 'hair' },
  { id: 'face', name: 'Face Skin Care', iconName: 'face' },
  { id: 'fitness', name: 'Fitness & Gym', iconName: 'fitness' },
];

export const EXPERIENCES_BY_CITY: Record<'dubai' | 'bali', Experience[]> = {
  dubai: [
    {
      id: 'dxb-1',
      provider: 'AFFINITAS',
      title: 'Corporate Tax Registration',
      location: 'AFFINITAS FZCO - Dubai Silicon Oasis',
      price: 450,
      originalPrice: 500,
      currency: 'AED',
      image: corporateTaxImg,
      category: 'fitness', // Shown as popular in screenshot
    },
    {
      id: 'dxb-2',
      provider: 'BLEGEND GYM',
      title: '3 Months Unlimited Muay Thai & Gym',
      location: 'Blegend Gym - Al Quoz 3, Dubai',
      price: 1500,
      originalPrice: 1860,
      currency: 'AED',
      image: corporateTaxImg, // Reused premium asset
      category: 'fitness',
    },
    {
      id: 'dxb-3',
      provider: 'TALISE SPA',
      title: 'Luxury Desert Spa & Massage Ritual',
      location: 'Talise Spa - Madinat Jumeirah',
      price: 850,
      originalPrice: 1000,
      currency: 'AED',
      image: baliMassageImg,
      category: 'spa',
    },
  ],
  bali: [
    {
      id: 'dps-1',
      provider: 'UBUD WELLNESS',
      title: 'Balinese Healing Massage & Stone Therapy',
      location: 'Ubud Wellness Center - Ubud, Bali',
      price: 45,
      originalPrice: 60,
      currency: 'USD',
      image: baliMassageImg,
      category: 'spa',
    },
    {
      id: 'dps-2',
      provider: 'BALI BODY CARE',
      title: 'Premium Face Skin Rejuvenation & Facial',
      location: 'Bali Body Care - Seminyak, Bali',
      price: 35,
      originalPrice: 45,
      currency: 'USD',
      image: corporateTaxImg,
      category: 'face',
    },
    {
      id: 'dps-3',
      provider: 'KUTA SURF CO',
      title: 'Private Surfing Lesson & Beach Fitness',
      location: 'Kuta Beach Surf School - Kuta, Bali',
      price: 55,
      originalPrice: 70,
      currency: 'USD',
      image: baliMassageImg,
      category: 'fitness',
    },
  ],
};
