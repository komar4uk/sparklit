import React from 'react';

export default function ProductCard({ product }) {
  const getDifficultyStyles = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
        return { icon: 'auto_awesome', bg: 'bg-primary-container', text: 'text-primary' };
      case 'intermediate':
        return { icon: 'trending_up', bg: 'bg-secondary-container', text: 'text-on-secondary-container' };
      case 'advanced':
        return { icon: 'bolt', bg: 'bg-tertiary-container', text: 'text-tertiary' };
      default:
        return { icon: 'star', bg: 'bg-surface-container', text: 'text-on-surface' };
    }
  };

  const diffStyles = getDifficultyStyles(product.difficulty);

  return (
    <div className="group">
      <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden mb-4 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-tighter">
            {product.category}
          </span>
        </div>
        {product.badge && (
          <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold">
            {product.badge}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-headline text-on-surface">{product.name}</h3>
          <span className="text-xs font-body text-on-surface-variant font-semibold bg-surface-container px-2 py-0.5 rounded-md">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-sm text-on-surface-variant line-clamp-1">{product.description}</p>
        
        <div className="flex items-center justify-between pt-2">
          <span className={`flex items-center text-[10px] font-bold ${diffStyles.text} ${diffStyles.bg} px-2 py-0.5 rounded-full`}>
            <span className="material-symbols-outlined text-[12px] mr-1">{diffStyles.icon}</span> 
            {product.difficulty?.toUpperCase()}
          </span>
          <span className="text-xs font-body text-on-surface-variant">{product.size}</span>
        </div>
        
        <a 
          href={product.affiliate_link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full mt-4 py-3 bg-primary text-on-primary rounded-full font-bold text-sm hover:bg-primary-dim transition-colors duration-300 flex items-center justify-center cursor-pointer block text-center"
        >
          View Product
        </a>
      </div>
    </div>
  );
}
