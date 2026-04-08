import React, { useState } from 'react';
import initialBlogData from '../../data/blog.json';

export default function AdminBlog() {
  const [blogs, setBlogs] = useState(initialBlogData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentPost({
      id: Date.now().toString(),
      title: '',
      category: '',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      readTime: '5 min read',
      image: '',
      excerpt: '',
      status: 'Draft'
    });
    setIsEditing(true);
  };

  const handleSave = (e, status = null) => {
    e?.preventDefault?.();
    const postToSave = { ...currentPost };
    if (status) postToSave.status = status;

    if (blogs.find(b => b.id === currentPost.id)) {
      setBlogs(blogs.map(b => b.id === currentPost.id ? postToSave : b));
    } else {
      setBlogs([postToSave, ...blogs]);
    }
    setIsEditing(false);
    setCurrentPost(null);
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this article?")) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  if (isEditing) {
    return (
      <div className="animate-fade-in max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setIsEditing(false)} className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-2 font-semibold transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Articles
          </button>
          <div className="flex space-x-3">
            <button onClick={() => setIsEditing(false)} className="px-5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 font-bold hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors text-sm">Cancel</button>
            <button onClick={(e) => handleSave(e, 'Draft')} className="px-5 py-2.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 text-stone-800 dark:text-stone-200 rounded-xl font-bold transition-colors text-sm">Save Draft</button>
            <button onClick={(e) => handleSave(e, 'Published')} className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition-colors text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">publish</span> Publish
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 shadow-sm">
              <input required type="text" value={currentPost.title} onChange={e => setCurrentPost({...currentPost, title: e.target.value})} className="w-full text-3xl font-serif font-bold bg-transparent border-none focus:outline-none focus:ring-0 placeholder-stone-300 dark:placeholder-stone-700 mb-6" placeholder="Article Title" />
              
              <textarea required rows="10" value={currentPost.excerpt} onChange={e => setCurrentPost({...currentPost, excerpt: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow resize-none" placeholder="Write your article content here... For this demo, this is the excerpt text."></textarea>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
                <span className="material-symbols-outlined text-[18px] text-teal-600">settings</span> Article Settings
              </h3>
              
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Status</label>
                <div className={`px-3 py-1.5 rounded-lg text-sm font-bold inline-block ${currentPost.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {currentPost.status}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Category</label>
                <input type="text" value={currentPost.category} onChange={e => setCurrentPost({...currentPost, category: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. Tips & Tricks" />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Featured Image URL</label>
                <input type="url" value={currentPost.image} onChange={e => setCurrentPost({...currentPost, image: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="https://" />
                {currentPost.image && (
                  <div className="mt-2 aspect-video rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                    <img src={currentPost.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-50">Blog Hub</h1>
          <p className="text-sm text-stone-500 mt-1">Manage articles, guides, and inspiration.</p>
        </div>
        <button onClick={handleAddNew} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-bold shadow-sm transition-colors text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">edit_document</span> Write Article
        </button>
      </header>

      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden shadow-sm">
        <ul className="divide-y divide-stone-200 dark:divide-stone-800">
          {blogs.map(post => (
            <li key={post.id} className="p-4 sm:px-6 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-12 rounded overflow-hidden bg-stone-100 shrink-0 border border-stone-200 dark:border-stone-700">
                  <img src={post.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base">{post.title}</h3>
                  <div className="text-xs text-stone-500 flex items-center gap-2 mt-0.5">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`hidden sm:inline-block px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-stone-200 text-stone-600'}`}>
                  {post.status}
                </span>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(post)} className="text-stone-400 hover:text-teal-600 p-2 rounded-lg hover:bg-teal-50 transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                  <button onClick={() => handleDelete(post.id)} className="text-stone-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                </div>
              </div>
            </li>
          ))}
          {blogs.length === 0 && (
            <li className="p-8 text-center text-stone-500">No articles yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
