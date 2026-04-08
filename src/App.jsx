import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';

// Components
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';

// Public Pages
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Categories from './pages/Categories';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import ProductPage from './pages/ProductPage';
import ContactFAQ from './pages/ContactFAQ';
import About from './pages/About';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminBlog from './pages/admin/AdminBlog';
import AdminCategories from './pages/admin/AdminCategories';
import AdminSettings from './pages/admin/AdminSettings';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <TopNavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<AllProducts />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<ContactFAQ />} />
              <Route path="/about" element={<About />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
