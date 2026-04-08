import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import { useLanguage } from '../context/LanguageContext';

export default function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const { t } = useLanguage();

  const categories = ["All", ...new Set(products.map(p => {
    const cat = p.category || '';
    return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  }))];
  
  const filteredProducts = products.filter(p => {
    const catMatch = activeCategory === "All" || (p.category || '').toLowerCase() === activeCategory.toLowerCase();
    const diffMatch = activeDifficulty === "All" || p.difficulty === activeDifficulty;
    return catMatch && diffMatch;
  });

  return (
    <>
      <Helmet>
        <title>{t('shop.pageTitle')}</title>
        <meta name="description" content={t('shop.pageDesc')} />
      </Helmet>
      
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-8 min-h-screen">
        <div className="mb-12">
          <span className="label-md uppercase tracking-widest text-primary font-bold text-[10px] mb-2 block">{t('shop.tag')}</span>
          <h1 className="text-5xl font-headline text-on-surface mb-4">{t('shop.title')}</h1>
          <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">{t('shop.desc')}</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 space-y-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">{t('shop.categories')}</h3>
                <ul className="space-y-3 font-body text-sm">
                  {categories.map((cat, idx) => (
                    <li 
                      key={idx}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between cursor-pointer transition-colors ${activeCategory === cat ? "text-primary font-semibold" : "text-on-surface-variant hover:text-primary"}`}
                    >
                      {cat === "All" ? t('nav.shop') : cat} 
                      <span className={`text-[10px] px-2 rounded-full ${activeCategory === cat ? "bg-primary-container" : "bg-surface-container"}`}>
                        {cat === "All" ? products.length : products.filter(p => (p.category || '').toLowerCase() === cat.toLowerCase()).length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">{t('shop.difficulty')}</h3>
                <div className="space-y-2">
                  {['All', 'Beginner', 'Medium', 'Advanced'].map((diff, i) => {
                    let label = diff;
                    if(diff === 'All') label = t('nav.shop');
                    if(diff === 'Beginner') label = t('product.beginnerFriendly');
                    if(diff === 'Medium') label = t('product.intermediate');
                    if(diff === 'Advanced') label = t('product.advanced');

                    return (
                      <div 
                        key={i} 
                        onClick={() => setActiveDifficulty(diff)}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div className={`w-4 h-4 rounded-sm border-2 transition-all flex items-center justify-center ${activeDifficulty === diff ? "border-primary bg-primary" : "border-outline-variant group-hover:border-primary"}`}>
                          {activeDifficulty === diff && (
                            <svg className="w-2.5 h-2.5 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm font-body transition-colors ${activeDifficulty === diff ? "text-primary font-semibold" : "text-on-surface-variant hover:text-primary"}`}>
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
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
                {t('shop.noProducts')}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
