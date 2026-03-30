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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Products</h1>
          <p className="text-muted-foreground mt-2">Manage your mobile phones and accessories.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#121212] border-white/10 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="grid gap-2 col-span-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" placeholder="e.g. Honor Magic 6 Pro" className="bg-[#0A0A0A] border-white/10" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="brand">Brand</Label>
                <select id="brand" className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="honor">Honor</option>
                  <option value="samsung">Samsung</option>
                  <option value="apple">Apple</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price (Rs.)</Label>
                <Input id="price" type="number" placeholder="0.00" className="bg-[#0A0A0A] border-white/10" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input id="stock" type="number" placeholder="0" className="bg-[#0A0A0A] border-white/10" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <select id="status" className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="in_stock">In Stock</option>
                  <option value="low_stock">Low Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="storage">Storage</Label>
                <Input id="storage" placeholder="e.g. 256GB" className="bg-[#0A0A0A] border-white/10" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="ram">RAM</Label>
                <Input id="ram" placeholder="e.g. 12GB" className="bg-[#0A0A0A] border-white/10" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">Cancel</Button>
              <Button className="bg-primary text-white hover:bg-primary/90">Save Product</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-[#121212] border border-white/10 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Brand</TableHead>
              <TableHead className="text-muted-foreground">Price</TableHead>
              <TableHead className="text-muted-foreground">Stock</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PRODUCTS.map((product) => (
              <TableRow key={product.id} className="border-white/10 hover:bg-white/5 transition-colors">
                <TableCell className="font-medium text-white">{product.name}</TableCell>
                <TableCell className="text-muted-foreground">{product.brand}</TableCell>
                <TableCell className="text-white">Rs. {product.price.toLocaleString()}</TableCell>
                <TableCell className="text-muted-foreground">{product.stock}</TableCell>
                <TableCell>
                  <Badge 
                    variant={product.status === 'In Stock' ? 'default' : product.status === 'Low Stock' ? 'secondary' : 'destructive'}
                    className={
                      product.status === 'In Stock' ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' :
                      product.status === 'Low Stock' ? 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30' :
                      'bg-red-500/20 text-red-500 hover:bg-red-500/30'
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-white/10 text-muted-foreground hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#121212] border-white/10 text-white max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Edit Product</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 py-4 text-left">
                          <div className="grid gap-2 col-span-2">
                            <Label htmlFor={`edit-name-${product.id}`}>Product Name</Label>
                            <Input id={`edit-name-${product.id}`} defaultValue={product.name} className="bg-[#0A0A0A] border-white/10" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor={`edit-brand-${product.id}`}>Brand</Label>
                            <select id={`edit-brand-${product.id}`} defaultValue={product.brand.toLowerCase()} className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="honor">Honor</option>
                              <option value="samsung">Samsung</option>
                              <option value="apple">Apple</option>
                              <option value="xiaomi">Xiaomi</option>
                            </select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor={`edit-price-${product.id}`}>Price (Rs.)</Label>
                            <Input id={`edit-price-${product.id}`} type="number" defaultValue={product.price} className="bg-[#0A0A0A] border-white/10" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor={`edit-stock-${product.id}`}>Stock Quantity</Label>
                            <Input id={`edit-stock-${product.id}`} type="number" defaultValue={product.stock} className="bg-[#0A0A0A] border-white/10" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor={`edit-status-${product.id}`}>Status</Label>
                            <select id={`edit-status-${product.id}`} defaultValue={product.status === 'In Stock' ? 'in_stock' : product.status === 'Low Stock' ? 'low_stock' : 'out_of_stock'} className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="in_stock">In Stock</option>
                              <option value="low_stock">Low Stock</option>
                              <option value="out_of_stock">Out of Stock</option>
                            </select>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" className="border-white/10 hover:bg-white/5">Cancel</Button>
                          <Button className="bg-primary text-white hover:bg-primary/90">Save Changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="icon" className="hover:bg-red-500/20 text-muted-foreground hover:text-red-500">
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
