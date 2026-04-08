import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

export default function AdminLayout() {
  const { t } = useLanguage();
  
  const navClass = ({ isActive }) =>
    isActive
      ? "flex items-center space-x-3 px-4 py-3 bg-teal-600 text-white rounded-xl font-bold tracking-wide transition-colors"
      : "flex items-center space-x-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 rounded-xl font-bold tracking-wide transition-colors";

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 flex selection:bg-teal-200 dark:selection:bg-teal-900 selection:text-teal-900 dark:selection:text-teal-50">
      <Helmet>
        <title>Admin Dashboard - Sparklit</title>
      </Helmet>

      {/* Sidebar Navigation */}
      <aside className="w-64 fixed top-0 left-0 h-screen bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 z-40 hidden lg:flex flex-col">
        <div className="p-6">
          <Link to="/" className="text-2xl font-serif font-bold text-teal-700 dark:text-teal-300">Sparklit</Link>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-bold mt-1">Admin Portal</div>
        </div>

        <nav className="flex-grow px-4 py-6 space-y-2">
          <NavLink to="/admin" end className={navClass}>
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/admin/products" className={navClass}>
            <span className="material-symbols-outlined">shopping_bag</span>
            <span>Products</span>
          </NavLink>
          <NavLink to="/admin/blog" className={navClass}>
            <span className="material-symbols-outlined">article</span>
            <span>Blog Editor</span>
          </NavLink>
          <NavLink to="/admin/categories" className={navClass}>
            <span className="material-symbols-outlined">category</span>
            <span>Categories</span>
          </NavLink>
          <NavLink to="/admin/settings" className={navClass}>
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className="p-4 border-t border-stone-200 dark:border-stone-800">
          <Link to="/" className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-bold transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 lg:ml-64 relative min-h-screen">
        {/* Top Header Mobile */}
        <header className="lg:hidden bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 h-16 flex items-center justify-between px-4 sticky top-0 z-30">
          <Link to="/" className="text-xl font-serif font-bold text-teal-700 dark:text-teal-300">Sparklit Admin</Link>
          {/* A simple mobile nav overlay could go here, but for brevity we rely on desktop admin view mostly */}
          <Link to="/" className="text-sm font-semibold text-stone-500">Exit</Link>
        </header>

        {/* Content Outlet */}
        <div className="p-4 sm:p-8 md:p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
