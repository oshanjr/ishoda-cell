export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  installments: number;
  image: string;
  hoverImage: string;
  storage: string;
  ram: string;
  color: string;
  warranty: string;
  description?: string;
  rating?: number;
  reviews?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Honor Magic 6 Pro',
    brand: 'Honor',
    price: 329900,
    installments: 12,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    storage: '512GB',
    ram: '12GB',
    color: 'Epi Green',
    warranty: '1 Year Official',
    description: 'The Honor Magic 6 Pro features the revolutionary Falcon Camera System, a stunning LTPO display, and the powerful Snapdragon 8 Gen 3 chipset. Experience true flagship performance with industry-leading battery life and ultra-fast charging.',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 419900,
    installments: 24,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop',
    storage: '256GB',
    ram: '12GB',
    color: 'Titanium Black',
    warranty: '1 Year Official',
    description: 'Galaxy AI is here. Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility — starting with the most important device in your life. Your smartphone.',
    rating: 4.8,
    reviews: 215,
  },
  {
    id: '3',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 459900,
    installments: 24,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop',
    storage: '256GB',
    ram: '8GB',
    color: 'Natural Titanium',
    warranty: '1 Year Apple Care',
    description: 'iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
    rating: 4.9,
    reviews: 342,
  },
  {
    id: '4',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 349900,
    installments: 12,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    storage: '512GB',
    ram: '16GB',
    color: 'Black',
    warranty: '1 Year Official',
    description: 'Xiaomi 14 Ultra features a Leica Summilux optical lens, a 1-inch main camera, and a WQHD+ dynamic 120Hz AMOLED display. Powered by Snapdragon 8 Gen 3 for ultimate performance.',
    rating: 4.7,
    reviews: 89,
  },
  {
    id: '5',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 299900,
    installments: 12,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    storage: '256GB',
    ram: '12GB',
    color: 'Obsidian',
    warranty: '1 Year Official',
    description: 'Pixel 8 Pro is the all-pro phone engineered by Google. It’s sleek, sophisticated, and has a powerful triple camera system that’s more capable than ever.',
    rating: 4.6,
    reviews: 156,
  },
  {
    id: '6',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 279900,
    installments: 12,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop',
    storage: '512GB',
    ram: '16GB',
    color: 'Flowy Emerald',
    warranty: '1 Year Official',
    description: 'The OnePlus 12 represents the culmination of a decade of OnePlus innovation. With the Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera for Mobile, and ultra-fast charging.',
    rating: 4.7,
    reviews: 92,
  }
];

export const BRANDS = [
  { name: 'Honor', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Honor_Logo.svg/1200px-Honor_Logo.svg.png' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png' },
  { name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/1200px-Xiaomi_logo.svg.png' },
  { name: 'OnePlus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/OnePlus_logo.svg/1200px-OnePlus_logo.svg.png' },
];
