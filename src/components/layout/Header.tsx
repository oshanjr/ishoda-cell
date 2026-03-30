import { ShoppingCart, Search, Menu, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '@/src/store/useStore';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const cart = useStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

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
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/phones" className="text-sm font-medium hover:text-primary transition-colors">Phones</Link>
          <Link to="/accessories" className="text-sm font-medium hover:text-primary transition-colors">Accessories</Link>
          <Link to="/brands" className="text-sm font-medium hover:text-primary transition-colors">Brands</Link>
        </div>

        <div className="flex items-center gap-4">
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
          <button className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
