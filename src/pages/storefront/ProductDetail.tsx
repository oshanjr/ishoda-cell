import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingCart, ChevronLeft, ShieldCheck, Truck, RotateCcw, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from '@/components/ui/Image';
import { useStore } from '@/src/store/useStore';
import { PRODUCTS } from '@/src/constants';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const addToCart = useStore((state) => state.addToCart);
  const [product, setProduct] = useState(PRODUCTS.find(p => p.id === id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/phones">
          <Button variant="link" className="text-primary mt-4">Back to Smartphones</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link to="/phones" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Smartphones
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-[#121212] border border-white/5 relative group">
            <Image 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <Badge className="absolute top-6 left-6 bg-primary text-white border-none px-4 py-1.5 text-sm">
              {product.brand}
            </Badge>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-[#121212] border border-white/5 cursor-pointer hover:border-primary/50 transition-colors">
                <Image src={img} alt={`${product.name} thumbnail ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 5) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.brand} Flagship Series</p>
            </div>

            <div className="space-y-1">
              <div className="text-4xl font-bold text-primary">
                Rs. {product.price.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">
                Or as low as <span className="text-white font-semibold">Rs. {Math.round(product.price / product.installments).toLocaleString()}/mo</span> for {product.installments} months
              </p>
            </div>

            <div className="py-6 border-y border-white/5 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Storage</p>
                  <p className="font-semibold text-white">{product.storage}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">RAM</p>
                  <p className="font-semibold text-white">{product.ram}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Color</p>
                  <p className="font-semibold text-white">{product.color}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Warranty</p>
                  <p className="font-semibold text-white">{product.warranty}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => addToCart(product)}
                size="lg" 
                className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white rounded-full text-lg font-bold"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 text-lg"
              >
                Buy Now
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">Island-wide delivery within 2-3 days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Official Warranty</p>
                  <p className="text-xs text-muted-foreground">100% genuine products with warranty.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">7-Day Returns</p>
                  <p className="text-xs text-muted-foreground">Easy returns if you're not satisfied.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">Multiple secure payment options available.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
