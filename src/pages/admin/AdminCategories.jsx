import React from 'react';

export default function AdminCategories() {
  const categories = [
    { name: 'Animals & Birds', count: 4, status: 'Active' },
    { name: 'Landscapes & Nature', count: 6, status: 'Active' },
    { name: 'Fantasy & Magic', count: 3, status: 'Active' },
    { name: 'Abstract & Patterns', count: 2, status: 'Active' },
    { name: 'Fine Art Replicas', count: 1, status: 'Active' }
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      <header className="flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-50">Categories</h1>
          <p className="text-sm text-stone-500 mt-1">Organize your shop structure.</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-bold shadow-sm transition-colors text-sm">
          Add Category
        </button>
      </header>

      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950 font-semibold text-stone-500 uppercase tracking-wider text-xs">
            <tr>
              <th className="p-4 pl-6">Category Name</th>
              <th className="p-4 text-center">Products</th>
              <th className="p-4 text-right pr-6">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
            {categories.map((cat, idx) => (
              <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/50">
                <td className="p-4 pl-6 font-bold text-stone-900 dark:text-stone-100">{cat.name}</td>
                <td className="p-4 text-center text-stone-600 dark:text-stone-400">{cat.count}</td>
                <td className="p-4 text-right pr-6 text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
