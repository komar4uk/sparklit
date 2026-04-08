import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('about.pageTitle')}</title>
        <meta name="description" content={t('about.pageDesc')} />
      </Helmet>
      
      <main className="pt-32 pb-20 overflow-x-hidden">
        {/* Hero Title Section */}
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="uppercase tracking-widest text-[10px] font-bold text-primary mb-4 block">{t('about.tag')}</span>
              <h1 className="text-6xl md:text-8xl font-serif leading-tight tracking-tight text-on-surface">{t('about.title')}</h1>
            </div>
            <div className="pb-4">
              <p className="text-on-surface-variant max-w-xs leading-relaxed">
                {t('about.desc')}
              </p>
            </div>
          </div>
        </header>

        {/* Our Story Section */}
        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-4 bg-primary-container/20 rounded-xl blur-2xl group-hover:bg-primary-container/30 transition-all duration-700"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbEK9O6OFOA9HtazVO9z9s56gkD9TR45Qv1vmtwT8jJvJCTiFDqc8PRlefOOs2CBLwX0kkTU5_bg4antDmRXeVDTMOdwmZNL6MQ3dSxjGOnt72FqM4noA7G6D0KkdqWJ8UnL46g-0D8BJiTzR5lG9GPIsjSuX6nxEPwWbqnHZa8rNAktl98Yq-njTWRKI85Y_Hs5Cxw2MUlPZGqNxeeJnXs-keLYbpZmlZlY7_e8IZWIaUU5nlKVJ8CXHoOJ0fghG9kt3pLRr6aszg" 
                alt="Our Story" 
                className="relative rounded-xl w-full h-[600px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute -bottom-10 -right-10 hidden xl:block w-64 h-64 bg-secondary-container rounded-xl flex items-center justify-center p-8 text-on-secondary-container">
                <p className="font-serif italic text-lg leading-snug">"{t('about.quote')}"</p>
              </div>
            </div>
            
            <div className="lg:col-span-5 lg:pl-12 pt-12 lg:pt-32">
              <h2 className="text-4xl font-serif mb-8 text-on-surface">{t('about.storyTitle')}</h2>
              <div className="space-y-6 text-on-surface-variant font-body leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p>{t('about.storyP3')}</p>
              </div>
              <div className="mt-12">
                <Link to="/shop" className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium hover:bg-primary-dim transition-all duration-300">
                  {t('about.viewGallery')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-surface-container-low py-32 mb-40">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">brush</span>
                <h3 className="text-xl font-serif font-bold">{t('about.v1Title')}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{t('about.v1Desc')}</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                <h3 className="text-xl font-serif font-bold">{t('about.v2Title')}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{t('about.v2Desc')}</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
                <h3 className="text-xl font-serif font-bold">{t('about.v3Title')}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{t('about.v3Desc')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
