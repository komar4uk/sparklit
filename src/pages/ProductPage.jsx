import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const found = productsData.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setActiveImage(found.image);
      
      let others = productsData.filter(p => (p.category || '').toLowerCase() === (found.category || '').toLowerCase() && p.id !== found.id);
      if (others.length < 3) {
         const fallback = productsData.filter(p => p.id !== found.id && !others.find(o => o.id === p.id));
         others = [...others, ...fallback];
      }
      setRelated(others.slice(0, 3));
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-8 flex items-center justify-center text-on-surface-variant">
        {t('product.notFound')}
      </div>
    );
  }

  const priceStr = String(product.price || '0').replace(/[^0-9.]/g, '');
  const priceNum = parseFloat(priceStr) || 0;
  const priceDisplay = language === 'en' ? `$${priceNum.toFixed(2)}` : `₴${(priceNum * 41).toFixed(0)}`;
  const oldPriceDisplay = language === 'en' ? `$${(priceNum * 1.3).toFixed(2)}` : `₴${(priceNum * 41 * 1.3).toFixed(0)}`;
  
  let diffTrans = 'product.intermediate';
  if(product.difficulty?.toLowerCase() === 'beginner') diffTrans = 'product.beginnerFriendly';
  if(product.difficulty?.toLowerCase() === 'advanced') diffTrans = 'product.advanced';
  if(product.difficulty?.toLowerCase() === 'medium') diffTrans = 'product.intermediate'; // Map Medium to Intermediate trans

  const galleryImages = [product.image, ...(product.images || [])];

  const shortQuote = product.description.split('.')[0] + '.';

  return (
    <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <Helmet>
        <title>{product.name} - Sparklit</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant font-medium">
        <Link to="/shop" className="hover:text-primary transition-colors">{t('nav.shop')}</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <Link to={`/categories`} className="hover:text-primary transition-colors">{product.category}</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-primary font-bold">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Product Image Section */}
        <div className="lg:col-span-7">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/10 rounded-[2rem] blur-2xl -z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
            <img 
              src={activeImage} 
              alt={product.name} 
              className="w-full h-auto rounded-xl shadow-sm object-cover aspect-[4/5] bg-surface-container-low transition-opacity duration-500"
            />
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button title="Zoom" className="bg-surface/90 backdrop-blur-md p-3 rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm">
                <span className="material-symbols-outlined">zoom_in</span>
              </button>
              <button title="Share" onClick={() => navigator.clipboard.writeText(window.location.href)} className="bg-surface/90 backdrop-blur-md p-3 rounded-full text-secondary hover:bg-secondary hover:text-on-secondary transition-all shadow-sm">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
          
          {/* Gallery Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex gap-4 overflow-x-auto mt-4 pb-2 scrollbar-hide py-2">
              {galleryImages.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeImage === img ? 'border-primary opacity-100 ring-2 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100 bg-surface-container-low'}`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Section */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-tighter mb-4">
                {product.badge || t('shop.tag')}
              </span>
              <h1 className="text-5xl lg:text-6xl font-headline text-on-surface leading-tight -tracking-widest">
                {product.name}
              </h1>
              <p className="mt-4 text-xl font-body text-on-surface-variant font-light italic">"{shortQuote}"</p>
            </div>
            
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-headline font-bold text-on-surface">{priceDisplay}</span>
              <span className="text-on-surface-variant line-through text-lg opacity-60">{oldPriceDisplay}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-sm">square_foot</span>
                <span className="text-xs font-bold uppercase tracking-wider">{product.size}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary-container/30 px-4 py-2 rounded-full border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-sm">psychology</span>
                <span className="text-xs font-bold uppercase tracking-wider">{t(diffTrans)}</span>
              </div>
              <div className="flex items-center gap-2 bg-tertiary-container/30 px-4 py-2 rounded-full border border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary text-sm">nature</span>
                <span className="text-xs font-bold uppercase tracking-wider">{product.category}</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <a 
                href={product.affiliate_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg hover:bg-primary-dim transition-all overflow-hidden shadow-lg shadow-primary/10"
              >
                <span>{t('product.buyOnAli')}</span>
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">open_in_new</span>
              </a>
              <p className="text-center text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 flex items-center justify-center gap-2 mt-4">
                <span className="material-symbols-outlined text-[14px]">verified_user</span>
                {t('product.affiliateNote')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {related.length > 0 && (
        <section className="mt-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Curated Journey</p>
              <h2 className="text-4xl font-headline italic">{t('product.relatedProducts')}</h2>
            </div>
            <Link to="/shop" className="font-headline text-on-surface-variant border-b-2 border-tertiary-container pb-1 hover:border-tertiary transition-colors">
              {t('nav.gallery')}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
