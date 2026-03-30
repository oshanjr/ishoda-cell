import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';

const BRANDS = [
  { name: 'Honor', logo: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop', slogan: 'Go Beyond.' },
  { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop', slogan: 'Do What You Can\'t.' },
  { name: 'Apple', logo: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', slogan: 'Think Different.' },
  { name: 'Xiaomi', logo: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop', slogan: 'Innovation for Everyone.' },
  { name: 'OnePlus', logo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop', slogan: 'Never Settle.' },
  { name: 'Google', logo: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', slogan: 'Helpful by Design.' },
];

export default function Brands() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Our Brands</h1>
        <p className="text-muted-foreground mt-1">We partner with the world's leading technology brands.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BRANDS.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="group relative h-64 overflow-hidden border-white/10 cursor-pointer">
              <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors" />
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80'; }}
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-4xl font-bold text-white tracking-tight mb-2">{brand.name}</h2>
                <p className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {brand.slogan}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
