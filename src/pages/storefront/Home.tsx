import { motion } from 'motion/react';
import { ChevronRight, Star, ShoppingCart, Calendar, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Image from '@/components/ui/Image';
import { useStore } from '@/src/store/useStore';
import { Link } from 'react-router-dom';
import { PRODUCTS, BRANDS } from '@/src/constants';

const FEATURED_PRODUCTS = PRODUCTS.slice(0, 4);

const RECENT_BLOGS = [
  {
    id: '1',
    title: 'Honor Magic 6 Pro: The New King of Smartphone Photography?',
    excerpt: 'We take a deep dive into the revolutionary Falcon Camera System...',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop',
    date: 'March 25, 2026',
  },
  {
    id: '2',
    title: 'Top 10 Accessories Every Smartphone Owner Needs in 2026',
    excerpt: 'From high-speed chargers to premium protective cases...',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    date: 'March 22, 2026',
  },
];

export default function Home() {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/95 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[600px] md:h-[800px] bg-primary/20 rounded-full blur-[80px] sm:blur-[120px] opacity-50 z-0" />
        
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
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              Honor Magic 6 Pro
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Discover the Magic.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Experience the next generation of smartphone photography with the revolutionary Falcon Camera System.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              <Link to="/phones" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-12 sm:h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white">
                  Shop Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 sm:h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative hidden md:block"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto aspect-[3/4]">
              <Image 
                src="https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop" 
                alt="Honor Magic 6 Pro" 
                className="w-full h-full rounded-3xl shadow-2xl shadow-primary/20 border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Filtering */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Shop by Brand</h2>
          <Link to="/brands">
            <Button variant="link" className="text-primary pr-0">View All <ChevronRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
          {BRANDS.map((brand, i) => (
            <motion.div 
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="w-full h-[80px] sm:h-[100px] bg-[#121212] border-white/5 hover:border-primary/50 transition-colors cursor-pointer group flex items-center justify-center p-4">
                <div className="text-center font-bold text-sm sm:text-lg text-muted-foreground group-hover:text-white transition-colors">
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
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Trending Now</h2>
          <Link to="/phones">
            <Button variant="link" className="text-primary pr-0">View All <ChevronRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {FEATURED_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0"
                    />
                    <Image 
                      src={product.hoverImage} 
                      alt={`${product.name} alternate view`} 
                      className="w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 scale-105"
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
      </section>

      {/* Recent Blogs */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Latest from Blog</h2>
          <Link to="/blog">
            <Button variant="link" className="text-primary pr-0">View All <ChevronRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-8">
          {RECENT_BLOGS.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="bg-[#121212] border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 h-full">
                <div className="flex flex-col">
                  <div className="w-full aspect-video overflow-hidden">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-center p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </div>
                    <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-muted-foreground line-clamp-2 mb-3 sm:mb-4">
                      {blog.excerpt}
                    </p>
                    <Button variant="link" className="text-primary p-0 h-auto text-[10px] sm:text-xs w-fit">
                      Read More <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4">
        <div className="bg-[#121212] rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                  Contact Us
                </Badge>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Need Help? <br />
                  <span className="text-primary">We're here for you.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have a question about a product or your order? Reach out to us and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-white font-medium">info@ishodacellular.lk</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-white font-medium">+94 11 234 5678</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 border-l border-white/10">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
                  <Input placeholder="Email" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
                </div>
                <Input placeholder="Subject" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
                <textarea 
                  className="w-full min-h-[120px] bg-[#0A0A0A] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  placeholder="Your message..."
                ></textarea>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

