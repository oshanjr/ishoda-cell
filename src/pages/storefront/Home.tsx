import { motion } from 'motion/react';
import { ChevronRight, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/src/store/useStore';

const BRANDS = [
  { name: 'Honor', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Honor_Logo.svg/1200px-Honor_Logo.svg.png' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png' },
  { name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/1200px-Xiaomi_logo.svg.png' },
  { name: 'OnePlus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/OnePlus_logo.svg/1200px-OnePlus_logo.svg.png' },
];

const FEATURED_PRODUCTS = [
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
];

export default function Home() {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/95 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 z-0" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left space-y-6"
          >
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-4 py-1 text-sm">
              New Arrival
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              Honor Magic 6 Pro
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Discover the Magic.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Experience the next generation of smartphone photography with the revolutionary Falcon Camera System.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-[500px] mx-auto aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop" 
                alt="Honor Magic 6 Pro" 
                className="object-cover w-full h-full rounded-3xl shadow-2xl shadow-primary/20 border border-white/10"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80'; }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Filtering */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Shop by Brand</h2>
          <Button variant="link" className="text-primary pr-0">View All <ChevronRight className="w-4 h-4 ml-1" /></Button>
        </div>
        
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-4 snap-x hide-scrollbar">
          {BRANDS.map((brand, i) => (
            <motion.div 
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-start shrink-0"
            >
              <Card className="w-[140px] h-[100px] bg-[#121212] border-white/5 hover:border-primary/50 transition-colors cursor-pointer group flex items-center justify-center p-6">
                <div className="text-center font-bold text-lg text-muted-foreground group-hover:text-white transition-colors">
                  {brand.name}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Trending Now</h2>
          <Button variant="link" className="text-primary pr-0">View All <ChevronRight className="w-4 h-4 ml-1" /></Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group bg-[#121212] border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-[#0A0A0A]">
                  <Badge className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-black/50">
                    {product.brand}
                  </Badge>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-contain w-full h-full transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 p-2"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80'; }}
                  />
                  <img 
                    src={product.hoverImage} 
                    alt={`${product.name} alternate view`} 
                    className="object-contain w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 p-2 scale-105"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80'; }}
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-xs text-muted-foreground ml-1">(124)</span>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.storage} | {product.ram}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">
                          Rs. {product.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-primary mt-1">
                          From Rs. {Math.round(product.price / product.installments).toLocaleString()}/mo
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-white text-black hover:bg-gray-200 font-medium group-hover:bg-primary group-hover:text-white transition-colors"
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
      </section>
    </div>
  );
}
