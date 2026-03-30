import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CATEGORIES = [
  { id: '1', name: 'Smartphones', type: 'Category', count: 124, status: 'Active' },
  { id: '2', name: 'Audio', type: 'Category', count: 45, status: 'Active' },
  { id: '3', name: 'Power Banks', type: 'Category', count: 18, status: 'Active' },
  { id: '4', name: 'Honor', type: 'Brand', count: 32, status: 'Active' },
  { id: '5', name: 'Samsung', type: 'Brand', count: 41, status: 'Active' },
  { id: '6', name: 'Apple', type: 'Brand', count: 28, status: 'Active' },
];

export default function Categories() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Categories & Brands</h1>
          <p className="text-muted-foreground mt-2">Manage your product classifications.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#121212] border-white/10 text-white">
            <DialogHeader>
              <DialogTitle>Add Category or Brand</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="e.g. Smartwatches" className="bg-[#0A0A0A] border-white/10" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <select id="type" className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="category">Category</option>
                  <option value="brand">Brand</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <select id="status" className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">Cancel</Button>
              <Button className="bg-primary text-white hover:bg-primary/90">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-[#121212] border border-white/10 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-muted-foreground">Products Count</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CATEGORIES.map((item) => (
              <TableRow key={item.id} className="border-white/10 hover:bg-white/5 transition-colors">
                <TableCell className="font-medium text-white">{item.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-white/10 text-muted-foreground">
                    {item.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{item.count}</TableCell>
                <TableCell>
                  <Badge 
                    variant={item.status === 'Active' ? 'default' : 'secondary'}
                    className={
                      item.status === 'Active' ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' :
                      'bg-gray-500/20 text-gray-500 hover:bg-gray-500/30'
                    }
                  >
                    {item.status}
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
                      <DialogContent className="bg-[#121212] border-white/10 text-white">
                        <DialogHeader>
                          <DialogTitle>Edit {item.type}</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor={`edit-name-${item.id}`}>Name</Label>
                            <Input id={`edit-name-${item.id}`} defaultValue={item.name} className="bg-[#0A0A0A] border-white/10" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor={`edit-type-${item.id}`}>Type</Label>
                            <select id={`edit-type-${item.id}`} defaultValue={item.type.toLowerCase()} className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="category">Category</option>
                              <option value="brand">Brand</option>
                            </select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor={`edit-status-${item.id}`}>Status</Label>
                            <select id={`edit-status-${item.id}`} defaultValue={item.status.toLowerCase()} className="flex h-10 w-full rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
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
