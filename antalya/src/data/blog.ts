export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'discover-antalya-province-complete-guide',
    title: 'Discover Antalya Province: A Complete Guide',
    description: 'Explore the history, culture, beaches, and climate of Antalya Province, Turkey\'s premier tourism destination on the Mediterranean coast.',
    date: '2026-10-15',
    author: 'Tours Antalya Team',
    image: 'https://images.pexels.com/photos/37752541/pexels-photo-37752541.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '12 min read',
    category: 'Travel Guide',
  },
  {
    slug: 'antalya-airports-guide-international-terminals',
    title: 'Antalya Airports Guide: International Terminals & Facilities',
    description: 'A comprehensive guide to Antalya Airport (AYT) terminals, facilities, transport options, and tips for smooth arrivals and departures.',
    date: '2026-10-10',
    author: 'Tours Antalya Team',
    image: 'https://images.pexels.com/photos/17455633/pexels-photo-17455633.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '8 min read',
    category: 'Travel Tips',
  },
  {
    slug: 'hidden-gems-of-antalya-long-tail-guide',
    title: 'Long-Tail Travel Guide: Hidden Gems of Antalya',
    description: 'Discover the secret beaches, boutique hotels, and off-the-beaten-path experiences in Antalya, from Kaleiçi guesthouses to Belek golf retreats.',
    date: '2026-10-05',
    author: 'Tours Antalya Team',
    image: 'https://images.pexels.com/photos/10577733/pexels-photo-10577733.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '10 min read',
    category: 'Hidden Gems',
  },
];
