import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 500000) + 100000 },
  { name: 'Feb', total: Math.floor(Math.random() * 500000) + 100000 },
  { name: 'Mar', total: Math.floor(Math.random() * 500000) + 100000 },
  { name: 'Apr', total: Math.floor(Math.random() * 500000) + 100000 },
  { name: 'May', total: Math.floor(Math.random() * 500000) + 100000 },
  { name: 'Jun', total: Math.floor(Math.random() * 500000) + 100000 },
  { name: 'Jul', total: Math.floor(Math.random() * 500000) + 100000 },
];

export default function Dashboard() {
  const metrics = [
    { title: 'Total Revenue', value: 'Rs. 4,231,890', icon: DollarSign, trend: '+12.5%' },
    { title: 'Sales', value: '+234', icon: ShoppingCart, trend: '+8.2%' },
    { title: 'Active Products', value: '1,204', icon: Package, trend: '+2.4%' },
    { title: 'Active Customers', value: '573', icon: Users, trend: '+14.1%' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of your store's performance and recent activity.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
            Mar 1, 2026 - Mar 30, 2026
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-[#121212] border-white/5 hover:border-primary/30 transition-all duration-300 group">
              <CardHeader className="flex flex-row items-center justify-between pb-4 space-y-0">
                <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {metric.title}
                </CardTitle>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <metric.icon className="w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white tracking-tight">{metric.value}</div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2.5 py-1 rounded-full">
                    {metric.trend}
                  </span>
                  <span className="text-[10px] text-muted-foreground">vs last month</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        <Card className="col-span-1 lg:col-span-4 bg-[#121212] border-white/5 overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white">Revenue Overview</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">Monthly revenue growth in LKR</p>
            </div>
          </CardHeader>
          <CardContent className="h-[400px] border-t border-white/5 pt-8 px-6 pb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#01A1FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#01A1FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  stroke="#444" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis
                  stroke="#444"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `Rs.${value/1000}k`}
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#121212', 
                    borderColor: 'rgba(255,255,255,0.1)', 
                    color: '#fff',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}
                  itemStyle={{ color: '#01A1FF' }}
                  cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#01A1FF"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 lg:col-span-3 bg-[#121212] border-white/5 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-white">Recent Sales</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">Latest transactions from your store</p>
          </CardHeader>
          <CardContent className="border-t border-white/5 p-0">
            <div className="divide-y divide-white/5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 px-6 py-5 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:scale-110 transition-transform">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">Customer {i}</p>
                    <p className="text-xs text-muted-foreground truncate">customer{i}@example.com</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">
                      +Rs. {(Math.random() * 100000 + 50000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">2 mins ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
