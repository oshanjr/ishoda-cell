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
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Categories & Brands</h1>
          <p className="text-muted-foreground mt-1">Manage your product classifications and brand partnerships.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-white h-11 px-6 rounded-xl shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#121212] border-white/10 text-white rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl">Add Category or Brand</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</Label>
                <Input id="name" placeholder="e.g. Smartwatches" className="bg-[#0A0A0A] border-white/10 h-12 rounded-xl focus:border-primary/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Type</Label>
                <select id="type" className="flex h-12 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="category">Category</option>
                  <option value="brand">Brand</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</Label>
                <select id="status" className="flex h-12 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <DialogFooter className="gap-3">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 h-11 px-6 rounded-xl">Cancel</Button>
              <Button className="bg-primary text-white hover:bg-primary/90 h-11 px-6 rounded-xl">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <Table>
          <TableHeader className="bg-white/[0.02]">
            <TableRow className="border-white/5 hover:bg-transparent h-14">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pl-6">Name</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Type</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Products Count</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CATEGORIES.map((item) => (
              <TableRow key={item.id} className="border-white/5 hover:bg-white/[0.02] transition-colors h-20">
                <TableCell className="pl-6 font-semibold text-white">{item.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-white/5 border-white/10 text-muted-foreground text-[10px] uppercase tracking-widest">
                    {item.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground font-medium">{item.count} products</TableCell>
                <TableCell>
                  <Badge 
                    className={
                      item.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                      'bg-gray-500/10 text-gray-500 border-gray-500/20'
                    }
                  >
                    {item.status}
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
