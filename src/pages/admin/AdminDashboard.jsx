import React from 'react';
import productsData from '../../data/products.json';
import blogData from '../../data/blog.json';

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-50">Dashboard Overview</h1>
          <p className="text-sm text-stone-500 mt-1">Welcome back. Here's what's happening today.</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-bold shadow-sm transition-colors text-sm">
          Generate Report
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
            <span className="material-symbols-outlined">inventory_2</span>
          </div>
          <div>
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Total Products</div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">{productsData.length}</div>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <span className="material-symbols-outlined">call_made</span>
          </div>
          <div>
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Affiliate Clicks</div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">1,248</div>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <span className="material-symbols-outlined">article</span>
          </div>
          <div>
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Published Posts</div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">{blogData.filter(b=>b.status==='Published').length}</div>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <span className="material-symbols-outlined">visibility</span>
          </div>
          <div>
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Page Views</div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">45.2K</div>
          </div>
        </div>
      </div>

      {/* Popular Products Mock Table */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex justify-between items-center">
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">Top Performing Kits</h2>
          <button className="text-teal-600 hover:text-teal-700 text-sm font-semibold">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 md:bg-transparent dark:bg-stone-950 font-semibold text-stone-500 uppercase tracking-wider text-xs">
              <tr>
                <th className="p-4 pl-6">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Clicks</th>
                <th className="p-4 pr-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              {productsData.slice(0, 4).map((product, idx) => (
                <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <img src={product.image} className="w-10 h-10 rounded shadow-sm object-cover" alt="" />
                    <span className="font-semibold text-stone-900 dark:text-stone-100 line-clamp-1">{product.name}</span>
                  </td>
                  <td className="p-4 text-stone-600 dark:text-stone-400">{product.category}</td>
                  <td className="p-4 text-stone-600 dark:text-stone-400">{300 - idx*45}</td>
                  <td className="p-4 pr-6 text-right">
                    <span className="px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-lg text-xs font-bold">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
