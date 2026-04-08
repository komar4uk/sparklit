import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogData from '../data/blog.json';
import { useLanguage } from '../context/LanguageContext';

export default function BlogPost() {
  const { id } = useParams();
  const { t } = useLanguage();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const currPost = blogData.find(b => b.id === id);
    if (currPost) {
      setPost(currPost);
      setRelated(blogData.filter(b => b.id !== id && b.status === 'Published').slice(0, 3));
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-8 flex items-center justify-center text-on-surface-variant">
        Article not found.
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>{post.title} - Sparklit Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Article Header */}
      <header className="mb-12 text-center">
        <div className="inline-block px-4 py-1.5 bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-xs font-bold rounded-full uppercase tracking-widest mb-6">
          {post.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 dark:text-stone-50 leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex items-center justify-center text-stone-500 dark:text-stone-400 font-medium">
          <span>{post.date}</span>
          <span className="mx-3">•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="aspect-video w-full rounded-3xl overflow-hidden mb-16 shadow-lg relative bg-stone-100 dark:bg-stone-900">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Body */}
      <article className="prose prose-lg prose-stone dark:prose-invert max-w-none mb-24">
        <p className="lead text-xl text-stone-600 dark:text-stone-400 font-medium mb-8">
          {post.excerpt}
        </p>
        
        <h2>The Basics</h2>
        <p>Diamond painting is a combination of cross-stitch and paint-by-numbers. You use an applicator to apply hundreds of sparkling resin rhinestones, one-by-one, on an adhesive color-coded canvas painting. The end result is a vivid, shimmering work of art.</p>
        
        <h3>Why People Love It</h3>
        <ul>
          <li><strong>Relaxing and Therapeutic</strong>: The process is incredibly calming and helps reduce stress and anxiety.</li>
          <li><strong>Easy to Learn</strong>: Unlike cross-stitch which requires some skill, diamond painting is foolproof.</li>
          <li><strong>Stunning Results</strong>: Even beginners can create museum-quality, sparkling pieces.</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>We hope this guide has given you a better understanding of what to look for and how to get started. Don't be afraid to make mistakes—the joy is in the journey to creating something beautiful.</p>
      </article>

      {/* Related Reading */}
      {related.length > 0 && (
        <div className="pt-16 border-t border-stone-200 dark:border-stone-800">
          <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8">
            {t('blog.relatedReadings') || 'Related Reading'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map(rel => (
              <Link key={rel.id} to={`/blog/${rel.id}`} className="group group-hover:block space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 relative">
                  <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm text-[10px] font-bold rounded-full uppercase">
                    {rel.category}
                  </div>
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {rel.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
