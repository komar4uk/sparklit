import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Blog() {
  const articles = [
    {
      title: "The Anatomy of a Perfect Stroke: Choosing the Right Applicator Tool",
      category: "Expert Guide",
      excerpt: "Not all pens are created equal. We dive deep into the ergonomic designs of luxury applicators that transform hours of crafting into effortless flow.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqww7wLAFm4zSf34ebycL2lMVSHY4orubEW8OXvd1ANZlsQy8c38MhhtCF7CVDSWVLjvDqaN6n9FDntKNY3rOMp96-aWB-42LxvXuvRjdRH6ZLvjxWVH1BHM5bHlMRABal9NGxQMMfIBoaeVPruGvo9u4Xlqi27M-lMuai9OSkQwl9vf4pXW449YmnVo89JNVF5MLMLKrcL_hcpRQBS7WMMex3hGDzgjioyvYjc1Rs8bMFyBorSUN-oQ0xkSYGMxhCvydHEBmT9nRf",
      subhead: "Mastery & Precision"
    },
    {
      title: "Finding Zen: The Meditative Power of Repetitive Motion",
      category: "Wellness",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJacVbanHbx14-ZNv8MKqjEGLi5Y2RoGBIMlhkgcFbh-l49dy8KIyNn9lUZQeY3OFKOEfDYKvnXSdScrewEEmlCzT_MiFEWRpaN-TqcJGwtE7zCFKkkhgMgXR-KMKMxrFzlCc0_Yp9h9soEAukw7ryAoBdQdfY4Ga9GFquf0SnfUFzbrj5yB9msUCLU5XY9jeftE3uwins-l8VykP2zD1eJkPMu6JjPXTfRTgveKKZXC8TxOhU6Ogd87m53hzIydnmmD98VCMTjVBp"
    },
    {
      title: "Square vs. Round Drills: Which One Defines Your Style?",
      category: "Materials",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUKK_DGVVsHdixr-rPtALxZw28eT6n0esAHjB-kYDV8dfZkeAaL5Aw-nR9pa4LxvB6LdIxwOUMSXLJnB6Tduu-XzXqxJa5zayI2tq_3O_WK5Djt57-cPN2rrieSkg9LhfS7r1dU6YwtWlXkfCvyMNLX7iyvL8GDpIPFcogUZV3O4XOLnDqiFBsSQaQVjpUAg_Q8JALZhI_tliZOuXEGne24TOaclrGLVjjwv4gI19o_67Tk7Q0K3zFmI_LIE87uDvazqOAqIeWmOpj"
    },
    {
      title: "Seal and Protect: Preserving Your Brilliance for Decades",
      category: "Finishing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-UoaC6TYMFlnjfLa34VDW9J5Mistc2qBhu6YW5VL3_vHtgMVX1PUJMTSIrQSuFPxCqJwfa4b_-vGhqhIZ2_C3qoSz8ezukq8tSJreZdyIC75TiK4vzXilmIySKzxoIDHu5Et3cotor7BkNMHFsHJfOsdB6qrWueCKpCCzCdP6_eOSPE9X887vhH4IB6KjfN9lT8hfROyEtHrDnl-HVIS2Q1RiDlV0fYbqZYhqGYQHps5IOonY82vI7NQmh5O0C41joPPOVoZ1r9qF"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Journal &amp; Insights | Sparklit</title>
        <meta name="description" content="Explore the rhythmic art of diamond painting through our editorial lens. Tips, tutorials, and more." />
      </Helmet>
      
      <main className="pt-32 pb-24">
        {/* Hero Header */}
        <header className="max-w-7xl mx-auto px-8 mb-20 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] uppercase tracking-[0.2em] font-bold mb-6">The Journal</span>
          <h1 className="text-5xl md:text-7xl font-bold text-on-surface tracking-tight mb-8 leading-[1.1]">
            Curated Insights for <br/><span className="text-primary italic">Radiant Minds</span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            Explore the rhythmic art of diamond painting through our editorial lens. From precision tools to meditative flow states.
          </p>
        </header>

        {/* Blog Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Article */}
            <article className="md:col-span-8 group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-surface-container">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {articles[0].category}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-3">{articles[0].subhead}</span>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{articles[0].title}</h2>
              <p className="text-on-surface-variant leading-relaxed max-w-xl">{articles[0].excerpt}</p>
            </article>

            {/* Sidebar Articles */}
            <div className="md:col-span-4 flex flex-col gap-12">
              {[articles[1], articles[2]].map((article, idx) => (
                <article key={idx} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <span className="text-[10px] font-bold text-secondary tracking-widest uppercase block mb-2">{article.category}</span>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
                </article>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="md:col-span-4 mt-8">
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container">
                  <img src={articles[3].image} alt={articles[3].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="text-[10px] font-bold text-secondary tracking-widest uppercase block mb-2">{articles[3].category}</span>
                <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">{articles[3].title}</h3>
              </article>
            </div>

            <div className="md:col-span-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-surface-container transition-colors">
                <div>
                  <span className="text-[10px] font-bold text-tertiary tracking-widest uppercase block mb-4">Inside Look</span>
                  <h3 className="text-2xl font-bold leading-tight mb-4">Behind the Design: The Making of Our Spring '24 Collection</h3>
                  <p className="text-on-surface-variant text-sm mb-6">A conversation with lead artist Elena Vance on color theory and canvas textures.</p>
                </div>
                <div className="flex items-center text-primary font-bold text-sm">
                  Read Interview <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </div>
              </article>
              
              <article className="bg-primary-container/30 p-8 rounded-xl flex flex-col justify-between group cursor-pointer">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined">star</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-2">Sparklit Rewards</h3>
                  <p className="text-on-surface-variant text-sm">Join our community of curators and earn drills for every masterpiece completed.</p>
                </div>
                <button className="bg-primary text-on-primary rounded-full px-6 py-2 text-sm font-semibold self-start hover:bg-primary-dim transition-all">Join Community</button>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
