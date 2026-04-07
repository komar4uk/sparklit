import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

export default function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>All Diamond Art Kits | Sparklit</title>
        <meta name="description" content="Discover our premium range of diamond painting kits. Shop all designs from meditative landscapes to vibrant abstracts." />
      </Helmet>
      
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="label-md uppercase tracking-widest text-primary font-bold text-[10px] mb-2 block">Curated Collection</span>
          <h1 className="text-5xl font-headline text-on-surface mb-4">All Diamond Art Kits</h1>
          <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">Discover our premium range of diamond painting kits. From meditative landscapes to vibrant abstracts, each set is curated for a mindful crafting experience.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 space-y-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">Categories</h3>
                <ul className="space-y-3 font-body text-sm">
                  {categories.map((cat, idx) => (
                    <li 
                      key={idx}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between cursor-pointer transition-colors ${activeCategory === cat ? "text-primary font-semibold" : "text-on-surface-variant hover:text-primary"}`}
                    >
                      {cat} 
                      <span className={`text-[10px] px-2 rounded-full ${activeCategory === cat ? "bg-primary-container" : "bg-surface-container"}`}>
                        {cat === "All" ? products.length : products.filter(p => p.category === cat).length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">Difficulty</h3>
                <div className="space-y-3">
                  {['Beginner', 'Intermediate', 'Advanced'].map((diff, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded-sm border-2 border-outline-variant group-hover:border-primary transition-colors"></div>
                      <span className="text-sm font-body text-on-surface-variant">{diff}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-tertiary-container/30 relative overflow-hidden hidden md:block">
              <div className="relative z-10">
                <h4 className="font-headline text-on-tertiary-container font-bold mb-2">Artisan Support</h4>
                <p className="text-xs text-on-tertiary-container/80 leading-relaxed mb-4">Every purchase supports our featured independent illustrators.</p>
                <a href="#" className="text-xs font-bold text-on-tertiary-container underline">Learn More</a>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-7xl">palette</span>
              </div>
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center text-on-surface-variant">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
