import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your store configuration.</p>
      </div>

      <div className="grid gap-6">
        <Card className="bg-[#121212] border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Store Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="storeName" className="text-muted-foreground">Store Name</Label>
                <Input id="storeName" defaultValue="Ishoda Cellular" className="bg-[#0A0A0A] border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail" className="text-muted-foreground">Contact Email</Label>
                <Input id="contactEmail" type="email" defaultValue="contact@ishodacellular.com" className="bg-[#0A0A0A] border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-muted-foreground">Phone Number</Label>
                <Input id="phone" defaultValue="+94 77 123 4567" className="bg-[#0A0A0A] border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency" className="text-muted-foreground">Currency</Label>
                <select id="currency" className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white">
                  <option value="LKR">LKR (Rs.)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-muted-foreground">Store Address</Label>
              <Input id="address" defaultValue="123 Main Street, Colombo 01, Sri Lanka" className="bg-[#0A0A0A] border-white/10 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#121212] border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Payment & Shipping</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shippingFee" className="text-muted-foreground">Standard Shipping Fee (Rs.)</Label>
                <Input id="shippingFee" type="number" defaultValue="500" className="bg-[#0A0A0A] border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="freeShipping" className="text-muted-foreground">Free Shipping Threshold (Rs.)</Label>
                <Input id="freeShipping" type="number" defaultValue="100000" className="bg-[#0A0A0A] border-white/10 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
