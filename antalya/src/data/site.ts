export const SITE = {
  name: 'Tours Antalya',
  domain: 'www.toursantaya.ir',
  url: 'https://www.toursantaya.ir',
  whatsappNumber: '989143403431',
  whatsappDisplay: '09143403431',
  whatsappLink:
    'https://wa.me/989143403431?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20service%20in%20Antalya.',
  email: 'Santa.abr@gmail.com',
  description:
    'Premier Antalya tourism & business travel agency offering luxury hotels, VIP transfers, guided tours, and nightlife experiences in Antalya, Turkey.',
};

export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Hotels', href: '/hotels/' },
  { label: 'Lara Hotels', href: '/lara-hotels/' },
  { label: 'Belek Hotels', href: '/belek-hotels/' },
  { label: 'Kemer Hotels', href: '/kemer-hotels/' },
  { label: 'Alanya Hotels', href: '/alanya-hotels/' },
  { label: 'Attractions', href: '/lara-attractions/' },
  { label: 'Voyage Tour', href: '/antalya-voyage-tour/' },
  { label: 'City Tour', href: '/antalya-city-tour-with-guide/' },
  { label: 'Airport Transfer', href: '/antalya-airport-transfer/' },
  { label: 'Real Estate', href: '/antalya-real-estate/' },
  { label: 'Business Travel', href: '/antalya-business-tourism/' },
  { label: 'Nightlife', href: '/antalya-nightlife-disco/' },
  { label: 'Cooperate', href: '/cooperate-with-us/' },
  { label: 'Blog', href: '/blog/' },
];

export interface HotelInfo {
  slug: string;
  name: string;
  region: string;
  starRating: number;
  priceRange: string;
  image: string;
  shortDesc: string;
  highlights: string[];
}

export const HOTELS: HotelInfo[] = [
  {
    slug: 'maxx-royal-belek',
    name: 'Maxx Royal Belek',
    region: 'Belek',
    starRating: 5,
    priceRange: '$$$$',
    image: 'luxury-hotel-pool-resort',
    shortDesc:
      'Ultra all-inclusive luxury resort with private beach, golf course, and world-class spa in Belek.',
    highlights: ['Private Beach', 'Golf Course', 'Ultra All-Inclusive', 'Spa & Wellness'],
  },
  {
    slug: 'regnum-carya',
    name: 'Regnum Carya',
    region: 'Belek',
    starRating: 5,
    priceRange: '$$$$',
    image: 'luxury-resort-swimming-pool',
    shortDesc:
      'Five-star all-inclusive golf and spa resort featuring elegant suites and a championship golf course.',
    highlights: ['Championship Golf', 'All-Inclusive', 'Water Park', 'Fine Dining'],
  },
  {
    slug: 'cullinan-belek',
    name: 'Cullinan Belek',
    region: 'Belek',
    starRating: 5,
    priceRange: '$$$$',
    image: 'five-star-hotel-beach',
    shortDesc:
      'Premium all-inclusive resort with a Blue Flag beach, expansive pools, and family-friendly luxury.',
    highlights: ['Blue Flag Beach', 'Aqua Park', 'Kids Club', 'All-Inclusive'],
  },
  {
    slug: 'rixos-premium-belek',
    name: 'Rixos Premium Belek',
    region: 'Belek',
    starRating: 5,
    priceRange: '$$$$',
    image: 'luxury-beach-resort-turkey',
    shortDesc:
      'Exclusive ultra all-inclusive resort renowned for its Turkish hospitality and pristine beachfront.',
    highlights: ['Private Beach', 'Ultra All-Inclusive', 'Tennis', 'Live Entertainment'],
  },
  {
    slug: 'mardan-palace',
    name: 'Mardan Palace',
    region: 'Lara',
    starRating: 5,
    priceRange: '$$$$',
    image: 'palace-hotel-luxury-pool',
    shortDesc:
      'Opulent five-star palace hotel with a 9,000 sqm pool, aquarium restaurant, and private pier.',
    highlights: ['Grand Pool', 'Aquarium Restaurant', 'Private Pier', 'Luxury Suites'],
  },
  {
    slug: 'concorde-de-luxe-resort-lara',
    name: 'Concorde De Luxe Resort Lara',
    region: 'Lara',
    starRating: 5,
    priceRange: '$$$',
    image: 'beach-resort-lara-antalya',
    shortDesc:
      'Stylish all-inclusive beachfront resort in Lara with water slides, spa, and vibrant entertainment.',
    highlights: ['Beachfront', 'Water Slides', 'Spa', 'All-Inclusive'],
  },
  {
    slug: 'delphin-imperial-lara',
    name: 'Delphin Imperial Lara',
    region: 'Lara',
    starRating: 5,
    priceRange: '$$$',
    image: 'luxury-hotel-lara-beach',
    shortDesc:
      'Grand all-inclusive resort with imperial architecture, fine dining, and direct beach access in Lara.',
    highlights: ['Imperial Design', 'Fine Dining', 'Beach Access', 'All-Inclusive'],
  },
  {
    slug: 'barut-hemera-side',
    name: 'Barut Hemera Side',
    region: 'Side',
    starRating: 5,
    priceRange: '$$$',
    image: 'resort-side-antalya-pool',
    shortDesc:
      'Eco-friendly luxury resort in Side with lush gardens, private beach, and award-winning cuisine.',
    highlights: ['Eco-Friendly', 'Private Beach', 'Award Cuisine', 'Gardens'],
  },
  {
    slug: 'voyage-sorgun',
    name: 'Voyage Sorgun',
    region: 'Side',
    starRating: 5,
    priceRange: '$$$',
    image: 'beach-resort-sorgun-side',
    shortDesc:
      'Exclusive adult-friendly all-inclusive resort in Sorgun with serene beach and premium spa.',
    highlights: ['Serene Beach', 'Premium Spa', 'All-Inclusive', 'Quiet Location'],
  },
  {
    slug: 'paloma-finesse-side',
    name: 'Paloma Finesse Side',
    region: 'Side',
    starRating: 5,
    priceRange: '$$$',
    image: 'luxury-resort-side-turkey',
    shortDesc:
      'Refined all-inclusive resort in Side offering gourmet dining, water sports, and elegant rooms.',
    highlights: ['Gourmet Dining', 'Water Sports', 'Elegant Rooms', 'All-Inclusive'],
  },
  {
    slug: 'rixos-sungate-kemer',
    name: 'Rixos Sungate Kemer',
    region: 'Kemer',
    starRating: 5,
    priceRange: '$$$',
    image: 'luxury-hotel-kemer-beach',
    shortDesc:
      'Grand ultra all-inclusive resort in Kemer with a private bay, water sports, and mountain views.',
    highlights: ['Private Bay', 'Ultra All-Inclusive', 'Water Sports', 'Mountain Views'],
  },
  {
    slug: 'maxx-royal-kemer',
    name: 'Maxx Royal Kemer',
    region: 'Kemer',
    starRating: 5,
    priceRange: '$$$$',
    image: 'luxury-resort-kemer-pool',
    shortDesc:
      'Exclusive ultra all-inclusive resort nestled in a pine-forested bay near Kemer with a premium spa.',
    highlights: ['Pine Forest Bay', 'Ultra All-Inclusive', 'Spa & Wellness', 'Private Beach'],
  },
  {
    slug: 'alanya-hotel-grand-ozel',
    name: 'Grand Ozel Hotel Alanya',
    region: 'Alanya',
    starRating: 5,
    priceRange: '$$$',
    image: 'luxury-hotel-alanya-beach',
    shortDesc:
      'Beachfront five-star resort in Alanya near Cleopatra Beach with water slides and panoramic sea views.',
    highlights: ['Cleopatra Beach', 'Water Slides', 'Sea Views', 'All-Inclusive'],
  },
  {
    slug: 'long-beach-resort-alanya',
    name: 'Long Beach Resort Alanya',
    region: 'Alanya',
    starRating: 5,
    priceRange: '$$$',
    image: 'beach-resort-alanya-pool',
    shortDesc:
      'All-inclusive beachfront resort on Alanya Long Beach with fine dining and family entertainment.',
    highlights: ['Long Beach', 'All-Inclusive', 'Fine Dining', 'Family Friendly'],
  },
];
