import { ShoppingCart, Search, Menu, Smartphone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '@/src/store/useStore';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Header() {
  const cart = useStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Phones', path: '/phones' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Brands', path: '/brands' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">Ishoda Cellular</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/search" className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="relative p-2 hover:bg-white/5 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white rounded-full text-xs">
                {cartCount}
              </Badge>
            )}
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-white/10 p-0 w-[280px]">
              <SheetHeader className="p-6 border-b border-white/5">
                <SheetTitle className="text-left flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  Ishoda Cellular
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <Link 
                      to={link.path} 
                      className="px-4 py-4 text-lg font-medium hover:text-primary border-b border-white/5 last:border-0 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
