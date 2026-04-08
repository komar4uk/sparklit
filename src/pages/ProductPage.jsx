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

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = productsData.find(p => p.id === id);
    if (found) {
      setProduct(found);
      const others = productsData.filter(p => p.category === found.category && p.id !== found.id).slice(0, 4);
      setRelated(others);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-8 flex items-center justify-center text-on-surface-variant">
        Product not found.
      </div>
    );
  }

  const priceDisplay = language === 'en' ? `$${Number(product.price).toFixed(2)}` : `₴${(Number(product.price)*41).toFixed(0)}`;
  
  let diffTrans = 'product.intermediate';
  if(product.difficulty?.toLowerCase() === 'beginner') diffTrans = 'product.beginnerFriendly';
  if(product.difficulty?.toLowerCase() === 'advanced') diffTrans = 'product.advanced';

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <Helmet>
        <title>{product.name} - Sparklit</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-8 font-serif">
        <Link to="/" className="hover:text-teal-600 transition-colors">{t('nav.home')}</Link> 
        <span className="mx-2">/</span> 
        <Link to="/shop" className="hover:text-teal-600 transition-colors">{t('nav.shop')}</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-800 dark:text-stone-300">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden shadow-sm relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold">
                {product.badge}
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6 md:py-8">
          <div>
            <div className="inline-block px-3 py-1 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              {product.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 dark:text-stone-50 leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-light text-stone-600 dark:text-stone-400 mt-4">
              {priceDisplay}
            </p>
          </div>

          <div className="py-6 border-y border-stone-200 dark:border-stone-800">
            <p className="text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-50 dark:bg-stone-900 p-4 rounded-xl">
              <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">{t('product.difficulty')}</div>
              <div className="font-bold text-stone-800 dark:text-stone-200">{t(diffTrans)}</div>
            </div>
            <div className="bg-stone-50 dark:bg-stone-900 p-4 rounded-xl">
              <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">{t('product.size')}</div>
              <div className="font-bold text-stone-800 dark:text-stone-200">{product.size}</div>
            </div>
          </div>

          <div className="pt-6">
            <a 
              href={product.affiliate_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center py-4 px-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
            >
              {t('product.buyOnAli')}
              <span className="material-symbols-outlined ml-2 text-xl">shopping_bag</span>
            </a>
            <p className="text-xs text-stone-400 text-center mt-3">
              Secure checkout via AliExpress. We earn a small affiliate commission at no extra cost to you.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-24 pt-16 border-t border-stone-200 dark:border-stone-800">
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-8">
            {t('product.relatedProducts')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
