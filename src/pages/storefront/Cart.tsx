import { useStore } from '@/src/store/useStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven't added any items to your cart yet. Discover our latest smartphones and accessories.
        </p>
        <Link to="/phones">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-[#121212] border-white/10 overflow-hidden">
                <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="w-24 h-24 bg-[#0A0A0A] rounded-lg p-2 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80'; }}
                    />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.color} | {item.storage}</p>
                    <div className="text-primary font-bold mt-2">Rs. {item.price.toLocaleString()}</div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end mt-4 sm:mt-0">
                    <div className="flex items-center border border-white/10 rounded-full bg-black/20">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:text-primary transition-colors text-muted-foreground"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:text-primary transition-colors text-muted-foreground"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-muted-foreground hover:text-red-500 transition-colors bg-white/5 rounded-full"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-[#121212] border-white/10 sticky top-24">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-bold text-white">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="text-white">Rs. {cartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Taxes</span>
                  <span className="text-white">Calculated at checkout</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between items-end mb-6">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-2xl font-bold text-primary">Rs. {cartTotal().toLocaleString()}</span>
                </div>
                <Button className="w-full h-12 text-lg rounded-full bg-primary hover:bg-primary/90 text-white">
                  Proceed to Checkout
                </Button>
                <div className="mt-4 text-center text-xs text-muted-foreground">
                  Secure checkout powered by Stripe
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
