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
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Orders</h1>
        <p className="text-muted-foreground mt-1">Track and manage customer orders and fulfillment status.</p>
      </div>

      <div className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <Table>
          <TableHeader className="bg-white/[0.02]">
            <TableRow className="border-white/5 hover:bg-transparent h-14">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pl-6">Order ID</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Customer</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ORDERS.map((order) => (
              <TableRow key={order.id} className="border-white/5 hover:bg-white/[0.02] transition-colors h-20">
                <TableCell className="pl-6 font-semibold text-white">{order.id}</TableCell>
                <TableCell>
                  <div className="font-semibold text-white">{order.customer}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">{order.email}</div>
                </TableCell>
                <TableCell className="text-muted-foreground font-medium">{order.phone}</TableCell>
                <TableCell className="text-muted-foreground">{order.date}</TableCell>
                <TableCell className="text-white font-bold">Rs. {order.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge 
                    className={
                      order.status === 'Completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                      order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                      'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <Dialog>
                    <DialogTrigger 
                      render={
                        <Button variant="ghost" size="icon" className="w-9 h-9 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </Button>
                      }
                    />
                    <DialogContent className="bg-[#121212] border-white/10 text-white rounded-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl">Order Details - {order.id}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6 py-6">
                        <div className="grid grid-cols-2 gap-6 text-sm">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Customer</p>
                            <p className="font-medium text-white">{order.customer}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Date</p>
                            <p className="font-medium text-white">{order.date}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                            <p className="font-medium text-white">{order.email}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
                            <p className="font-medium text-white">{order.phone}</p>
                          </div>
                        </div>
                        <div className="border-t border-white/5 pt-6">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Order Items</h4>
                          <div className="flex justify-between text-sm text-white mb-2">
                            <span>1x Honor Magic 6 Pro</span>
                            <span className="font-medium">Rs. 329,900</span>
                          </div>
                          <div className="flex justify-between font-bold text-xl border-t border-white/5 pt-4 mt-4">
                            <span className="text-white">Total</span>
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
