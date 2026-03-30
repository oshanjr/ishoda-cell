import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from '@/components/ui/Image';
import { ShoppingCart, Star } from 'lucide-react';
import { useStore } from '@/src/store/useStore';
import { motion } from 'motion/react';

const PHONES = [
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
  }
];

export default function Phones() {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Smartphones</h1>
          <p className="text-muted-foreground mt-1">Discover the latest flagship devices.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Button variant="outline" className="border-white/10 hover:bg-white/5 whitespace-nowrap">All Brands</Button>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 whitespace-nowrap">Honor</Button>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 whitespace-nowrap">Samsung</Button>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 whitespace-nowrap">Apple</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PHONES.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="group bg-[#121212] border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-[#0A0A0A]">
                <Badge className="absolute top-3 left-3 z-10 bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-black/50 text-[10px]">
                  {product.brand}
                </Badge>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full transition-opacity duration-500 group-hover:opacity-0 absolute inset-0"
                />
                <Image 
                  src={product.hoverImage} 
                  alt={`${product.name} alternate view`} 
                  className="w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 scale-105"
                />
              </div>
              <CardContent className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-[10px] text-muted-foreground ml-1">(124)</span>
                </div>
                <h3 className="font-semibold text-base leading-tight mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{product.storage} | {product.ram}</p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-xl font-bold text-white">
                        Rs. {product.price.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-primary mt-1">
                        From Rs. {Math.round(product.price / product.installments).toLocaleString()}/mo
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => addToCart(product)}
                    className="w-full h-10 bg-white text-black hover:bg-gray-200 font-medium group-hover:bg-primary group-hover:text-white transition-colors text-sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
