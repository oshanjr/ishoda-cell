import { useStore } from '@/src/store/useStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'motion/react';
import { ChevronLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  // const handleCheckout = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsProcessing(true);
  //   // Simulate payment processing
  //   setTimeout(() => {
  //     setIsProcessing(false);
  //     clearCart();
  //     alert('Order placed successfully! Thank you for shopping with Ishoda Cellular.');
  //     navigate('/');
  //   }, 2000);
  // };

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    // 1. Grab the form data the user typed in
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const address = formData.get('address');
    const city = formData.get('city');
    const phone = formData.get('phone');

    // Combine fields for the Engine
    const fullName = `${firstName} ${lastName}`;
    const fullAddress = `${address}, ${city}`;

    // 2. The Engine Credentials
    // Make sure your Next.js server is running locally on port 3000, 
    // or replace this with your actual live deployed URL (e.g., https://api.yourdomain.com)
    const ENGINE_URL = 'http://localhost:3000'; 
    const PUBLIC_KEY = 'pub_tenant_6b51b752'; 

    try {
      // 3. Fire the payload to your Central Engine
      const response = await fetch(`${ENGINE_URL}/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tenant_id: PUBLIC_KEY,
          customer_name: fullName,
          customer_phone: phone,
          customer_address: fullAddress,
          distance_km: 12 // Hardcoded for this demo, normally you'd calculate this via Maps API
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Checkout failed');
      }

      const confirmedOrder = await response.json();
      console.log('✅ Order successful! Engine returned:', confirmedOrder);

      // 4. Success state
      setIsProcessing(false);
      clearCart();
      alert(`Order placed successfully! Delivery Fee calculated: Rs. ${confirmedOrder.delivery_fee}`);
      navigate('/');

    } catch (error: any) {
      console.error('🚨 Engine rejected order:', error.message);
      setIsProcessing(false);
      alert(`Failed to place order: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/cart" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Cart
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
            <Card className="bg-[#121212] border-white/10 overflow-hidden">
              <CardHeader className="border-b border-white/5 bg-white/[0.02]">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Shipping Address</Label>
                  <Input id="address" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-white/10 overflow-hidden">
              <CardHeader className="border-b border-white/5 bg-white/[0.02]">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="0000 0000 0000 0000" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" required className="bg-[#0A0A0A] border-white/10 rounded-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-[#121212] border-white/10 sticky top-24">
            <CardHeader className="border-b border-white/5 bg-white/[0.02]">
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-12 bg-[#0A0A0A] rounded p-1 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm pt-4 border-t border-white/10">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="text-white">Rs. {cartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-white/5">
                  <span className="text-white">Total</span>
                  <span className="text-primary">Rs. {cartTotal().toLocaleString()}</span>
                </div>
              </div>

              <Button 
                type="submit" 
                form="checkout-form"
                disabled={isProcessing}
                className="w-full h-12 text-lg rounded-full bg-primary hover:bg-primary/90 text-white font-bold"
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </Button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground">
                <ShieldCheck className="w-3 h-3 text-green-500" />
                Secure 256-bit SSL encrypted payment
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
