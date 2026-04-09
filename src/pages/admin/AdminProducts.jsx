import React, { useState } from 'react';
import initialProducts from '../../data/products.json';

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All Categories');

  const categories = ['All Categories', ...new Set(initialProducts.map(p => {
    const cat = p.category || '';
    return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  }))];

  const filteredProducts = products.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const catMatch = filterCategory === 'All Categories' || (p.category || '').toLowerCase() === filterCategory.toLowerCase();
    return nameMatch && catMatch;
  });

  const getPriceValue = (price) => {
    if (typeof price === 'number') return price;
    return parseFloat(String(price || '0').replace(/[^0-9.]/g, '')) || 0;
  };

  const handleEdit = (product) => {
    setCurrentProduct({
      ...product,
      price: getPriceValue(product.price)
    });
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentProduct({
      id: Date.now().toString(),
      name: '',
      category: '',
      description: '',
      size: '',
      difficulty: 'Beginner',
      price: 0,
      image: '',
      affiliate_link: '',
      badge: ''
    });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (products.find(p => p.id === currentProduct.id)) {
      setProducts(products.map(p => p.id === currentProduct.id ? currentProduct : p));
    } else {
      setProducts([currentProduct, ...products]);
    }
    setIsEditing(false);
    setCurrentProduct(null);
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  if (isEditing) {
    return (
      <div className="animate-fade-in max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setIsEditing(false)} className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-2 font-semibold transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Products
          </button>
          <div className="flex space-x-3">
            <button onClick={() => setIsEditing(false)} className="px-5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 font-bold hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">Cancel</button>
            <button onClick={handleSave} className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition-colors">Save Product</button>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-8">
            {currentProduct.id.length > 5 ? 'Edit Product' : 'Add New Product'}
          </h2>
          
          <form className="space-y-6" onSubmit={handleSave}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Product Name</label>
                <input required type="text" value={currentProduct.name} onChange={e => setCurrentProduct({...currentProduct, name: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow" placeholder="e.g. Starry Night" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Category</label>
                <input required type="text" value={currentProduct.category} onChange={e => setCurrentProduct({...currentProduct, category: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow" placeholder="e.g. Landscapes" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Description</label>
              <textarea required rows="4" value={currentProduct.description} onChange={e => setCurrentProduct({...currentProduct, description: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow resize-none" placeholder="Product description..."></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Price (USD)</label>
                <input required type="number" step="0.01" value={currentProduct.price} onChange={e => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Size</label>
                <input required type="text" value={currentProduct.size} onChange={e => setCurrentProduct({...currentProduct, size: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow" placeholder="e.g. 30x40 cm" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Difficulty</label>
                <select value={currentProduct.difficulty} onChange={e => setCurrentProduct({...currentProduct, difficulty: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow">
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Image URL</label>
                <input required type="url" value={currentProduct.image} onChange={e => setCurrentProduct({...currentProduct, image: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow" placeholder="https://" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Affiliate Link</label>
                <input required type="url" value={currentProduct.affiliate_link} onChange={e => setCurrentProduct({...currentProduct, affiliate_link: e.target.value})} className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow" placeholder="https://" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-50">Products Manager</h1>
          <p className="text-sm text-stone-500 mt-1">Manage your diamond painting catalog.</p>
        </div>
        <button onClick={handleAddNew} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-bold shadow-sm transition-colors text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">add</span> Add New Kit
        </button>
      </header>

      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">search</span>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-stone-200 dark:border-stone-800 rounded-lg text-sm bg-stone-50 dark:bg-stone-950 focus:outline-none focus:border-teal-500 transition-colors" 
            />
          </div>
          <select 
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="border border-stone-200 dark:border-stone-800 rounded-lg px-4 py-2 text-sm bg-transparent outline-none cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 md:bg-transparent dark:bg-stone-950 font-semibold text-stone-500 uppercase tracking-wider text-xs">
              <tr>
                <th className="p-4 pl-6 w-16">Image</th>
                <th className="p-4 w-1/3">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="p-4 pl-6">
                    <img src={product.image} className="w-12 h-12 rounded object-cover shadow-sm bg-stone-100" alt="" />
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-stone-900 dark:text-stone-100 line-clamp-1">{product.name}</div>
                    <div className="text-xs text-stone-500">{product.size} &bull; {product.difficulty}</div>
                  </td>
                  <td className="p-4">
                    <span className="bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-2 py-1 rounded text-xs font-semibold">{product.category}</span>
                  </td>
                  <td className="p-4 font-semibold text-stone-900 dark:text-stone-200">
                    ${getPriceValue(product.price).toFixed(2)}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleEdit(product)} className="p-2 text-stone-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-stone-500">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
