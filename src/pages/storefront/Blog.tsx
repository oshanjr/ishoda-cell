import { motion } from 'motion/react';
import { ChevronRight, Calendar, User, Clock, Search, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Image from '@/components/ui/Image';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Honor Magic 6 Pro: The New King of Smartphone Photography?',
    excerpt: 'We take a deep dive into the revolutionary Falcon Camera System and how it stacks up against the competition.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop',
    category: 'Reviews',
    author: 'Admin',
    date: 'March 25, 2026',
    readTime: '8 min read',
  },
  {
    id: '2',
    title: 'Top 10 Accessories Every Smartphone Owner Needs in 2026',
    excerpt: 'From high-speed chargers to premium protective cases, here are our top picks for this year.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    category: 'Guides',
    author: 'Admin',
    date: 'March 22, 2026',
    readTime: '5 min read',
  },
  {
    id: '3',
    title: 'The Future of Mobile Technology: What to Expect from Flagships',
    excerpt: 'Exploring the upcoming trends in AI integration, battery technology, and foldable displays.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    category: 'Tech News',
    author: 'Admin',
    date: 'March 18, 2026',
    readTime: '10 min read',
  },
  {
    id: '4',
    title: 'How to Extend Your Smartphone Battery Life: Pro Tips',
    excerpt: 'Simple settings and habits that can help you get the most out of your device battery.',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop',
    category: 'Tips & Tricks',
    author: 'Admin',
    date: 'March 15, 2026',
    readTime: '6 min read',
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Ishoda Blog</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Stay updated with the latest tech news, product reviews, and expert guides from Ishoda Cellular.
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search articles..." 
            className="pl-10 bg-[#121212] border-white/10 rounded-full h-12 focus:border-primary/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 mb-16">
        {BLOG_POSTS.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="group bg-[#121212] border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-primary text-white border-none text-[8px] sm:text-xs">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="px-3 py-0 sm:px-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 sm:gap-4 text-[8px] sm:text-xs text-muted-foreground my-2 sm:my-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-2 h-2 sm:w-3 sm:h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xs sm:text-xl font-bold text-white mb-1 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[10px] sm:text-sm text-muted-foreground mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto py-3 sm:py-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[8px] sm:text-xs">
                      {post.author[0]}
                    </div>
                    <span className="text-[8px] sm:text-xs font-medium text-white">{post.author}</span>
                  </div>
                  <Button variant="link" className="text-primary p-0 h-auto text-[8px] sm:text-xs">
                    Read More <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 ml-0.5 sm:ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Contact Form Section */}
      <section className="mt-24 bg-[#121212] rounded-3xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-16 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                Contact Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Have Questions? <br />
                <span className="text-primary">Get in Touch.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team is here to help you with any inquiries about our products, orders, or technical support.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-white font-medium">info@ishodacellular.lk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Opening Hours</p>
                  <p className="text-white font-medium">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-16 border-l border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Full Name</label>
                  <Input placeholder="John Doe" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email Address</label>
                  <Input placeholder="john@example.com" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Subject</label>
                <Input placeholder="How can we help?" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message</label>
                <textarea 
                  className="w-full min-h-[150px] bg-[#0A0A0A] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
