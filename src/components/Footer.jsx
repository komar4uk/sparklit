import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200/20 dark:border-stone-800/20 bg-stone-100 dark:bg-stone-950">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="font-serif text-xl text-stone-800 dark:text-stone-200">Sparklit</div>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            Curating the finest diamond painting kits for artists of all levels. Excellence in every facet.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface text-sm uppercase tracking-widest">Shop</h4>
          <ul className="space-y-2">
            <li><Link to="/shop" className="text-stone-500 hover:text-teal-500 hover:underline underline-offset-4 text-sm transition-all">All Products</Link></li>
            <li><Link to="/categories" className="text-stone-500 hover:text-teal-500 hover:underline underline-offset-4 text-sm transition-all">Categories</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/faq" className="text-stone-500 hover:text-teal-500 hover:underline underline-offset-4 text-sm transition-all">FAQ</Link></li>
            <li><Link to="/contact" className="text-stone-500 hover:text-teal-500 hover:underline underline-offset-4 text-sm transition-all">Contact Us</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface text-sm uppercase tracking-widest">Newsletter</h4>
          <div className="flex flex-col gap-4">
            <p className="text-xs text-stone-500 leading-relaxed">Subscribe to our newsletter for exclusive drops and discounts.</p>
            <div className="relative">
              <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2 text-sm focus:outline-none focus:border-teal-500 transition-colors" />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-teal-600" aria-label="Subscribe">
                <span className="material-symbols-outlined">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-stone-200/10">
        <p className="font-sans text-sm text-stone-600 dark:text-stone-400 text-center">© 2024 Sparklit. Curated Diamond Painting Excellence.</p>
      </div>
    </footer>
  );
}
