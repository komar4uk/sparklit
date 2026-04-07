import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
          <TopNavBar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<AllProducts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
