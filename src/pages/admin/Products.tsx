import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PRODUCTS = [
  { id: '1', name: 'Honor Magic 6 Pro', brand: 'Honor', price: 329900, stock: 45, status: 'In Stock' },
  { id: '2', name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', price: 419900, stock: 12, status: 'Low Stock' },
  { id: '3', name: 'iPhone 15 Pro Max', brand: 'Apple', price: 459900, stock: 0, status: 'Out of Stock' },
  { id: '4', name: 'Xiaomi 14 Ultra', brand: 'Xiaomi', price: 349900, stock: 89, status: 'In Stock' },
];

export default function Products() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Products</h1>
          <p className="text-muted-foreground mt-1">Manage your mobile phones and accessories inventory.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-white h-11 px-6 rounded-xl shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#121212] border-white/10 text-white max-w-2xl rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl">Add New Product</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="grid gap-2 col-span-2">
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product Name</Label>
                <Input id="name" placeholder="e.g. Honor Magic 6 Pro" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="brand" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Brand</Label>
                <select id="brand" className="flex h-12 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="honor">Honor</option>
                  <option value="samsung">Samsung</option>
                  <option value="apple">Apple</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Price (Rs.)</Label>
                <Input id="price" type="number" placeholder="0.00" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stock" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stock Quantity</Label>
                <Input id="stock" type="number" placeholder="0" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</Label>
                <select id="status" className="flex h-12 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="in_stock">In Stock</option>
                  <option value="low_stock">Low Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>
            </div>
            <DialogFooter className="gap-3">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 h-11 px-6 rounded-xl">Cancel</Button>
              <Button className="bg-primary text-white hover:bg-primary/90 h-11 px-6 rounded-xl">Save Product</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <Table>
          <TableHeader className="bg-white/[0.02]">
            <TableRow className="border-white/5 hover:bg-transparent h-14">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pl-6">Product</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Brand</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Price</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stock</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PRODUCTS.map((product) => (
              <TableRow key={product.id} className="border-white/5 hover:bg-white/[0.02] transition-colors h-20">
                <TableCell className="pl-6">
                  <div className="font-semibold text-white">{product.name}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">ID: {product.id}</div>
                </TableCell>
                <TableCell className="text-muted-foreground font-medium">{product.brand}</TableCell>
                <TableCell className="text-white font-bold">Rs. {product.price.toLocaleString()}</TableCell>
                <TableCell className="text-muted-foreground">{product.stock} units</TableCell>
                <TableCell>
                  <Badge 
                    className={
                      product.status === 'In Stock' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                      product.status === 'Low Stock' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                      'bg-red-500/10 text-red-500 border-red-500/20'
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="w-9 h-9 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-9 h-9 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
