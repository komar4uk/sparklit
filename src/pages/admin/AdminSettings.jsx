import React from 'react';

export default function AdminSettings() {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <header>
        <h1 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-50">Settings</h1>
        <p className="text-sm text-stone-500 mt-1">Manage global site configurations and affiliate links.</p>
      </header>

      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 shadow-sm space-y-8">
        <div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4 border-b border-stone-200 dark:border-stone-800 pb-2">General Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Site Name</label>
              <input type="text" defaultValue="Sparklit" className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Contact Email</label>
              <input type="email" defaultValue="hello@sparklit.com" className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4 border-b border-stone-200 dark:border-stone-800 pb-2">Affiliate Program Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Default Tracking ID</label>
              <input type="text" defaultValue="sparklit_official" className="w-full md:w-1/2 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="autoAppend" defaultChecked className="w-4 h-4 text-teal-600 border-stone-300 rounded focus:ring-teal-500" />
              <label htmlFor="autoAppend" className="text-sm text-stone-600 dark:text-stone-400">Auto-append tracking ID to all external links</label>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-bold shadow-sm transition-colors text-sm">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
