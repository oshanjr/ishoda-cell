import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ORDERS = [
  { id: 'ORD-001', customer: 'Kamal Perera', email: 'kamal@example.com', phone: '0771234567', date: '2026-03-30', total: 329900, status: 'Pending' },
  { id: 'ORD-002', customer: 'Nimal Silva', email: 'nimal@example.com', phone: '0719876543', date: '2026-03-29', total: 419900, status: 'Shipped' },
  { id: 'ORD-003', customer: 'Sunil Fernando', email: 'sunil@example.com', phone: '0755555555', date: '2026-03-28', total: 459900, status: 'Completed' },
  { id: 'ORD-004', customer: 'Amila Kumara', email: 'amila@example.com', phone: '0722222222', date: '2026-03-28', total: 349900, status: 'Completed' },
];

export default function Orders() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Orders</h1>
        <p className="text-muted-foreground mt-2">Track and manage customer orders.</p>
      </div>

      <div className="bg-[#121212] border border-white/10 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Order ID</TableHead>
              <TableHead className="text-muted-foreground">Customer</TableHead>
              <TableHead className="text-muted-foreground">Contact</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Total</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ORDERS.map((order) => (
              <TableRow key={order.id} className="border-white/10 hover:bg-white/5 transition-colors">
                <TableCell className="font-medium text-white">{order.id}</TableCell>
                <TableCell>
                  <div className="text-white">{order.customer}</div>
                  <div className="text-xs text-muted-foreground">{order.email}</div>
                </TableCell>
                <TableCell className="text-muted-foreground">{order.phone}</TableCell>
                <TableCell className="text-muted-foreground">{order.date}</TableCell>
                <TableCell className="text-white">Rs. {order.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge 
                    variant={order.status === 'Completed' ? 'default' : order.status === 'Shipped' ? 'secondary' : 'outline'}
                    className={
                      order.status === 'Completed' ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' :
                      order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/50'
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="hover:bg-white/10 text-muted-foreground hover:text-white">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#121212] border-white/10 text-white">
                      <DialogHeader>
                        <DialogTitle>Order Details - {order.id}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Customer</p>
                            <p className="font-medium">{order.customer}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Date</p>
                            <p className="font-medium">{order.date}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Email</p>
                            <p className="font-medium">{order.email}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Phone</p>
                            <p className="font-medium">{order.phone}</p>
                          </div>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                          <h4 className="font-medium mb-2">Order Items</h4>
                          <div className="flex justify-between text-sm text-muted-foreground mb-2">
                            <span>1x Honor Magic 6 Pro</span>
                            <span>Rs. 329,900</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg border-t border-white/10 pt-2 mt-2">
                            <span>Total</span>
                            <span className="text-primary">Rs. {order.total.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
