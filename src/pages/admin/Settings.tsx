import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your store configuration and preferences.</p>
      </div>

      <div className="grid gap-8">
        <Card className="bg-[#121212] border-white/5 rounded-2xl shadow-xl overflow-hidden">
          <CardHeader className="border-b border-white/5 bg-white/[0.02] py-6">
            <CardTitle className="text-xl font-bold text-white">Store Details</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="storeName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Store Name</Label>
                <Input id="storeName" defaultValue="Ishoda Cellular" className="bg-[#0A0A0A] border-white/10 text-white h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="contactEmail" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact Email</Label>
                <Input id="contactEmail" type="email" defaultValue="contact@ishodacellular.com" className="bg-[#0A0A0A] border-white/10 text-white h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                <Input id="phone" defaultValue="+94 77 123 4567" className="bg-[#0A0A0A] border-white/10 text-white h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="currency" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Currency</Label>
                <select id="currency" className="flex h-12 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white">
                  <option value="LKR">LKR (Rs.)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="address" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Store Address</Label>
              <Input id="address" defaultValue="123 Main Street, Colombo 01, Sri Lanka" className="bg-[#0A0A0A] border-white/10 text-white h-12 rounded-xl focus:border-primary/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#121212] border-white/5 rounded-2xl shadow-xl overflow-hidden">
          <CardHeader className="border-b border-white/5 bg-white/[0.02] py-6">
            <CardTitle className="text-xl font-bold text-white">Payment & Shipping</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="shippingFee" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Standard Shipping Fee (Rs.)</Label>
                <Input id="shippingFee" type="number" defaultValue="500" className="bg-[#0A0A0A] border-white/10 text-white h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="freeShipping" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Free Shipping Threshold (Rs.)</Label>
                <Input id="freeShipping" type="number" defaultValue="100000" className="bg-[#0A0A0A] border-white/10 text-white h-12 rounded-xl focus:border-primary/50" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end pt-4">
          <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 rounded-xl shadow-lg shadow-primary/20 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
