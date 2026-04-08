import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import { useLanguage } from '../context/LanguageContext';

export default function Categories() {
  const { t } = useLanguage();
  const categories = [...new Set(products.map(p => p.category))];
  
  const getCategoryImage = (cat) => {
    const product = products.find(p => p.category === cat);
    return product ? product.image : '';
  };

  return (
    <>
      <Helmet>
        <title>{t('categories.pageTitle')}</title>
        <meta name="description" content={t('categories.pageDesc')} />
      </Helmet>
      
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-8 min-h-screen">
        <div className="mb-16">
          <span className="label-md uppercase tracking-widest text-primary font-bold text-[10px] mb-2 block">{t('categories.tag')}</span>
          <h1 className="text-5xl font-headline text-on-surface mb-4">{t('categories.title')}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <Link to={`/shop`} key={i} className="group text-center space-y-4">
              <div className="aspect-square rounded-full bg-primary-container p-1 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                  <img 
                    src={getCategoryImage(cat)} 
                    alt={cat} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
              <p className="font-bold text-on-surface-variant group-hover:text-primary transition-colors text-xl">{cat}</p>
              <p className="text-sm text-on-surface-variant">{products.filter(p => p.category === cat).length} {t('categories.kits')}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
