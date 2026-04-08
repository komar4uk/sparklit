import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ProductCard({ product }) {
  const { language } = useLanguage();

  const priceNum = Number(product.price);
  const priceDisplay = language === 'en' ? `$${priceNum.toFixed(2)}` : `₴${(priceNum * 41).toFixed(0)}`;

  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all group-hover:-translate-y-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full aspect-[3/4] object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {product.badge && (
          <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            {product.badge}
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-headline italic">{product.name}</h3>
          <p className="text-sm text-on-surface-variant font-medium">{product.category}</p>
        </div>
        <span className="text-lg font-headline font-bold text-primary">{priceDisplay}</span>
      </div>
    </Link>
  );
}
