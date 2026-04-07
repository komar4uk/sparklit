import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

export default function Home() {
  const bestSellers = products.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Sparklit | Curated Diamond Painting Kits</title>
        <meta name="description" content="Discover the meditative art of diamond painting with our curated collection of premium kits designed for the modern creator." />
      </Helmet>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden bg-secondary-container">
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-12 md:py-0">
            <div className="space-y-8 mt-16 md:mt-0">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase">Curated Brilliance</span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight -tracking-widest">Your Daily Dose<br/>of Sparkle</h1>
              <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">Discover the meditative art of diamond painting with our curated collection of premium kits designed for the modern creator.</p>
              <div className="pt-4">
                <Link to="/shop" className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dim transition-all active:scale-95">
                  Explore Collections
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7A2Ya0Q7wlauj1qlRz8ZqJehTsrpFAJD3ICXAtxpZ_6sjFXypjRvJ0ghHJFA52R8zEr1uja1VPSJul_quFsii4u52rdZVKxbcL85ObmvNCRlJadd_oJEBEap7Jsy8JmBveC9P05q5853pXQE-5RwHCS7D3uFvkOJYftuaG5HKa1c2NATjEPMcxphtuRsDjkQrwxC8GLVELxGnyYSCONyKbv81Ps1NL7vsOiNlKWtCUrbnzx0ZrgRYHArh2vKXLZvQUaekX6ZVeZ71" 
                  alt="Diamond painting canvas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl overflow-hidden shadow-xl transform -rotate-3 hidden lg:block border-8 border-white">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzQ9hLm8YsznlTzu3qIB84QuWlcWN5EXY3_J5YbClfQ5YTPTdijilWIzud8nuSyL990Z2iZX4Er7Mr0Bw_PF9KqFPEBvS0JwpDy50HmoEDgcSzRl9wo4XzgiOC3qX-GkInhl7IOyokzDD_omoRQvk_sSp-xXiL38rotpZkI9_lYB9y4zSjukGG_MNHii2JdDsdTtQYH9vdiPvy55rWw3A-H_mCk6oB5rBi8WjtmtIl7HljcI0yeANrjBznnQ_oGyPLSPkJKYbbdNcB" 
                  alt="Diamond painting detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container via-transparent to-primary-container/30 pointer-events-none"></div>
        </section>

        {/* Category Tiles */}
        <section className="py-24 bg-surface relative z-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="label-md uppercase text-primary font-bold tracking-widest text-xs">Categories</span>
                <h2 className="text-4xl mt-2">Find Your Flow</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Beginner Kits', color: 'bg-primary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkiPHoatkilSTqhPfBruNaYOBH9XF2tg-WVUCFv287Q54HrYCfXDsz8bZvCel7yHT-V65-hRmLv-eXRwV7tSQ6V9j-XMXCpPiIOUbR0p8R_-SDvaR-woA9JKBbXQVPOvpY9hgd4sM50mw_d1qeGX3i_GOAAmxYkDJu68s9ok4gZDi3JpkZP_EIO_vjC9J-IR0X6aOwgvGLJe7CmFYRAMzvMuQnL68mFvjhIIEUWKXKUmcSJ_Ax2d_0SAZ-ZVMXZALwczBWT3iDp9Fs' },
                { name: 'Animals', color: 'bg-secondary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLnYl5zTDqFo8rBOsUYJr5H1R7bASKP4AaONSjv77cbvCu-g4l5_x8BIerM6acdZ4lGsWDEcaMHTkqQrErOZiZuuGKNhbUSypo3HaCtUAIjhAN0CdDjnM73bedBcB7EQ9JteblJst1erfwf6rznKgQolQvwU3q7qroehfLLc5IBiamXSGkG4IlXVdsVayP8JsNGYTnXWSVHllRPc6C-AupL0XtDjkUaQIEcBXT4Q_JmvNeqKTKeMBlRsv7YJTKgh5EDvw1Y13cx9vS' },
                { name: 'Abstract', color: 'bg-tertiary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYT82mijIUK91RlUkLulmoVoD0iuZr5yBDnGBj8CN5Ey-o7HSsiq6lX4b18TXDLk8XMoVGdBQa2yIlZaR-jTjqG32MaQMERGLdZi2wzzmpM-MtmptyX4smKfSjgSoOCujH8LvY5KtXdVq0OhwMhBXjfQCHGwSxmpVQ1uRzM21jDLzvfZIGeLV1fwSuNb0VXAnjCAIn7zQtclaw3R-HONe1giis79EACSSa1E7gDUj7axCCEWRksvNu_7Jl2D-4BxsjcK_i-Impqcic' },
                { name: 'Nature', color: 'bg-primary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5gv6tLlvEjny7hk-vpUog05bM4pYTSMi_BJpRbX7V8v6Cg2zrOm7LBW5017UEOPv_zDjUotk9RORGlcjWsIWd-T5LRsil40bHgeC7nistQDMhGriTeemVsjwMx2uOXlYd8P0i5N2JAwwF8gvKat7JcJWQCvv7OUVTtldzRzSFRgnp0g1FNWHFM9CJ6NRvQTr9CaNa-e7lQmlaMTDQQBc2JabhHBlDszwckVZ-b40FwMBT2AI5Zi4Eb_LXfbX0xCaCwc8KssIMWG66' }
              ].map((cat, i) => (
                <Link to={`/categories`} key={i} className="group text-center space-y-4">
                  <div className={`aspect-square rounded-full ${cat.color} p-1 overflow-hidden transition-transform duration-500 group-hover:scale-105`}>
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                      <img src={cat.img} alt={cat.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"/>
                    </div>
                  </div>
                  <p className="font-bold text-on-surface-variant group-hover:text-primary transition-colors">{cat.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <span className="label-md uppercase text-primary font-bold tracking-widest text-xs">Trending Now</span>
              <h2 className="text-4xl mt-2">Best Sellers</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {bestSellers.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Beginner Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-primary-container rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              <div className="relative z-10 md:w-3/5 space-y-6">
                <span className="label-md uppercase text-on-primary-container font-bold tracking-widest text-xs">First Time?</span>
                <h2 className="text-4xl md:text-5xl text-on-primary-container leading-tight">New to Diamond Painting? Start Here</h2>
                <p className="text-on-primary-container/80 text-lg leading-relaxed">Our comprehensive guide covers everything from setting up your workspace to mastering the "multi-placer" tool. We've simplified the sparkle for you.</p>
                <div className="pt-4">
                  <Link to="/blog" className="inline-block bg-primary text-on-primary px-8 py-3.5 rounded-full font-bold hover:bg-primary-dim transition-all shadow-lg shadow-primary/20">
                    Read the Beginner Guide
                  </Link>
                </div>
              </div>
              <div className="md:w-2/5 relative">
                <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl transform rotate-3 relative z-10">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwd5nKpDdBKNBEqeZzxGxJ6Pp3APAhcA-Vx_fUH2y-aSu4454g1CGNuErlR4ekr4sLW0OvyAlMDFSlVbIwYMpAMY7fwnWM9trYE5OSpxRIc2HcC0sfZo0AGw_5rwK1r1Bs_CcR3L-Lc_4e0DZbsOzXW26x2Pz7Ls44BatBW-ouA74Cl-y6Gr0YeiweUVw2MqlR9WyAK5gtrt8DhOGLVaq9VI23yYPzznzaaUx4fT2kHoG8c4hQ2WtTDIiGiOqS1_bF6BDlBJI7RUEE" alt="Tutorial" className="rounded-xl shadow-lg"/>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary-container rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
