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
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Overview of your store's performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-[#121212] border-white/10">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                  {metric.trend} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <Card className="col-span-1 lg:col-span-4 bg-[#121212] border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px] border-t border-white/5 pt-6">
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
                  stroke="#888888" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `Rs.${value}`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121212', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                  itemStyle={{ color: '#01A1FF' }}
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#01A1FF"
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 lg:col-span-3 bg-[#121212] border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="border-t border-white/5 pt-4">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Customer {i}</p>
                    <p className="text-xs text-muted-foreground">customer{i}@example.com</p>
                  </div>
                  <div className="text-sm font-bold text-white">
                    +Rs. {(Math.random() * 100000 + 50000).toFixed(0)}
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
