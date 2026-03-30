import { Outlet, Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { Bell, User, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-[#0A0A0A]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/5 bg-[#121212]/50 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-8">
          <div className="flex-1 max-w-md relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search admin..." 
              className="pl-10 bg-white/5 border-white/10 h-9 rounded-full focus:border-primary/50"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-[#121212]" />
            </button>
            <div className="h-8 w-px bg-white/10 mx-2" />
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-[10px] text-muted-foreground">Super Admin</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary">
                <User className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-8 md:p-10 space-y-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
