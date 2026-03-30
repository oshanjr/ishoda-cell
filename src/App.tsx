import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorefrontLayout from './components/layout/StorefrontLayout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/storefront/Home';
import Phones from './pages/storefront/Phones';
import Accessories from './pages/storefront/Accessories';
import Brands from './pages/storefront/Brands';
import Cart from './pages/storefront/Cart';
import Search from './pages/storefront/Search';
import Blog from './pages/storefront/Blog';
import Checkout from './pages/storefront/Checkout';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Orders from './pages/admin/Orders';
import Categories from './pages/admin/Categories';
import Settings from './pages/admin/Settings';
import Preloader from './components/ui/Preloader';

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Routes>
        {/* Storefront Routes */}
        <Route path="/" element={<StorefrontLayout />}>
          <Route index element={<Home />} />
          <Route path="phones" element={<Phones />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="brands" element={<Brands />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search" element={<Search />} />
          <Route path="blog" element={<Blog />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
