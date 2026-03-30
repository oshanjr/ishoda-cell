import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from '@/components/ui/Image';
import { ShoppingCart, Star } from 'lucide-react';
import { useStore } from '@/src/store/useStore';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';

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

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="group bg-[#121212] border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              <div className="relative w-full aspect-square overflow-hidden bg-[#0A0A0A]">
                <Badge className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-black/50 text-[8px] sm:text-[10px]">
                  {product.brand}
                </Badge>
                <Link to={`/products/${product.id}`}>
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
                </Link>
              </div>
              <CardContent className="p-3 sm:p-4 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-1 sm:mb-2">
                  <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-primary text-primary" />
                  <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-primary text-primary" />
                  <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-primary text-primary" />
                  <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-primary text-primary" />
                  <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-primary text-primary" />
                  <span className="text-[8px] sm:text-[10px] text-muted-foreground ml-1">(124)</span>
                </div>
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-semibold text-xs sm:text-base leading-tight mb-1 line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-4">{product.storage} | {product.ram}</p>
                
                <div className="mt-auto pt-2 sm:pt-4 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-2 sm:mb-4">
                    <div>
                      <div className="text-sm sm:text-xl font-bold text-white">
                        Rs. {product.price.toLocaleString()}
                      </div>
                      <div className="text-[8px] sm:text-[10px] text-primary mt-0.5 sm:mt-1">
                        From Rs. {Math.round(product.price / product.installments).toLocaleString()}/mo
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => addToCart(product)}
                    className="w-full h-8 sm:h-10 bg-white text-black hover:bg-gray-200 font-medium group-hover:bg-primary group-hover:text-white transition-colors text-[10px] sm:text-sm"
                  >
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
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
