import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import blogData from '../data/blog.json';
import { useLanguage } from '../context/LanguageContext';

export default function BlogList() {
  const { t } = useLanguage();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Ensure we only show published blogs
    const published = blogData.filter(b => b.status === 'Published');
    setBlogs(published);
  }, []);

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <Helmet>
        <title>{t('blog.hubTitle')} - Sparklit</title>
        <meta name="description" content={t('blog.hubSubtitle')} />
      </Helmet>

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-6">
          {t('blog.hubTitle')}
        </h1>
        <p className="text-stone-600 dark:text-stone-400 text-lg">
          {t('blog.hubSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(post => (
          <article key={post.id} className="group cursor-pointer">
            <Link to={`/blog/${post.id}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative bg-stone-100 dark:bg-stone-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm text-stone-800 dark:text-stone-200 text-xs font-bold rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm font-medium text-stone-500 dark:text-stone-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-stone-600 dark:text-stone-400 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-2 text-teal-600 dark:text-teal-400 font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform inline-flex items-center">
                  {t('blog.readArticle')} <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
