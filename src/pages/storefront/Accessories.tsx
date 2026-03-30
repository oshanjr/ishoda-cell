import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from '@/components/ui/Image';
import { ShoppingCart, Star } from 'lucide-react';
import { useStore } from '@/src/store/useStore';
import { motion } from 'motion/react';

const ACCESSORIES = [
  {
    id: 'a1',
    name: 'Samsung Galaxy Buds 2 Pro',
    brand: 'Samsung',
    price: 45900,
    installments: 3,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    storage: 'N/A',
    ram: 'N/A',
    color: 'Graphite',
    warranty: '1 Year Official',
  },
  {
    id: 'a2',
    name: 'Apple AirPods Pro (2nd Gen)',
    brand: 'Apple',
    price: 89900,
    installments: 6,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=800&auto=format&fit=crop',
    storage: 'N/A',
    ram: 'N/A',
    color: 'White',
    warranty: '1 Year Apple Care',
  },
  {
    id: 'a3',
    name: 'Anker 737 Power Bank (PowerCore 24K)',
    brand: 'Anker',
    price: 35900,
    installments: 3,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d0?q=80&w=800&auto=format&fit=crop',
    storage: '24000mAh',
    ram: '140W',
    color: 'Black',
    warranty: '18 Months Official',
  },
  {
    id: 'a4',
    name: 'Apple 20W USB-C Power Adapter',
    brand: 'Apple',
    price: 8900,
    installments: 1,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=800&auto=format&fit=crop',
    storage: 'N/A',
    ram: '20W',
    color: 'White',
    warranty: '1 Year Apple Care',
  }
];

export default function Accessories() {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Accessories</h1>
          <p className="text-muted-foreground mt-1">Enhance your mobile experience.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Button variant="outline" className="border-white/10 hover:bg-white/5 whitespace-nowrap">All</Button>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 whitespace-nowrap">Audio</Button>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 whitespace-nowrap">Power</Button>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 whitespace-nowrap">Wearables</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ACCESSORIES.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="group bg-[#121212] border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              <div className="relative w-full aspect-square overflow-hidden bg-[#0A0A0A]">
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
                  <span className="text-[10px] text-muted-foreground ml-1">(89)</span>
                </div>
                <h3 className="font-semibold text-base leading-tight mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{product.color}</p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-xl font-bold text-white">
                        Rs. {product.price.toLocaleString()}
                      </div>
                      {product.installments > 1 && (
                        <div className="text-[10px] text-primary mt-1">
                          From Rs. {Math.round(product.price / product.installments).toLocaleString()}/mo
                        </div>
                      )}
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
