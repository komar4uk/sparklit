import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-teal-700 dark:text-teal-300 border-b-2 border-teal-500 pb-1 font-sans text-sm transition-all duration-300 block"
      : "text-stone-600 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 font-sans text-sm transition-all duration-300 block";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" onClick={closeMenu} className="text-2xl font-serif font-bold tracking-tight text-teal-700 dark:text-teal-300 z-50">
          Sparklit
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>{t('nav.home')}</NavLink>
          <NavLink to="/shop" className={navLinkClass}>{t('nav.shop')}</NavLink>
          <NavLink to="/categories" className={navLinkClass}>{t('categories.pageTitle').split(' ')[0]}</NavLink>
          <NavLink to="/blog" className={navLinkClass}>{t('nav.blog')}</NavLink>
          <NavLink to="/about" className={navLinkClass}>{t('nav.about')}</NavLink>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <button onClick={() => language !== 'en' && toggleLanguage()} className={language === 'en' ? 'text-teal-600 underline underline-offset-4 outline-none' : 'text-stone-400 hover:text-teal-600'}>EN</button>
            <span className="text-stone-300">/</span>
            <button onClick={() => language !== 'ua' && toggleLanguage()} className={language === 'ua' ? 'text-teal-600 underline underline-offset-4 outline-none' : 'text-stone-400 hover:text-teal-600'}>UA</button>
          </div>

          <Link to="/admin" className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-dim transition-all duration-200 active:scale-95">
            {t('nav.admin')}
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center z-50 gap-4">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
            <button onClick={() => language !== 'en' && toggleLanguage()} className={language === 'en' ? 'text-teal-600 underline underline-offset-4 outline-none' : 'text-stone-400'}>EN</button>
            <span className="text-stone-300">/</span>
            <button onClick={() => language !== 'ua' && toggleLanguage()} className={language === 'ua' ? 'text-teal-600 underline underline-offset-4 outline-none' : 'text-stone-400'}>UA</button>
          </div>
          <button 
            className="text-on-surface-variant p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-surface shadow-lg transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-96 border-t border-outline-variant/10' : 'max-h-0'}`}>
        <div className="px-8 py-6 flex flex-col space-y-6 text-center">
          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>{t('nav.home')}</NavLink>
          <NavLink to="/shop" onClick={closeMenu} className={navLinkClass}>{t('nav.shop')}</NavLink>
          <NavLink to="/categories" onClick={closeMenu} className={navLinkClass}>{t('categories.pageTitle').split(' ')[0]}</NavLink>
          <NavLink to="/blog" onClick={closeMenu} className={navLinkClass}>{t('nav.blog')}</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>{t('nav.about')}</NavLink>
          <div className="pt-4 border-t border-outline-variant/10">
            <Link to="/admin" onClick={closeMenu} className="inline-block w-full bg-primary text-on-primary px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-dim transition-all">
              {t('nav.admin')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
