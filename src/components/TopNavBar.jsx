import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
          <NavLink to="/categories" className={navLinkClass}>Categories</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center bg-stone-100/50 dark:bg-stone-800/50 px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-stone-400 text-sm mr-2">search</span>
            <input 
              type="text" 
              placeholder="Search patterns..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-32 placeholder-stone-400 outline-none"
            />
          </div>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-dim transition-all duration-200 active:scale-95">
            Sign In
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center z-50">
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
          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/shop" onClick={closeMenu} className={navLinkClass}>Shop</NavLink>
          <NavLink to="/categories" onClick={closeMenu} className={navLinkClass}>Categories</NavLink>
          <NavLink to="/blog" onClick={closeMenu} className={navLinkClass}>Blog</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>About</NavLink>
          <div className="pt-4 border-t border-outline-variant/10">
            <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-dim transition-all">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
