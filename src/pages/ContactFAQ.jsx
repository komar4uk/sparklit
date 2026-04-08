import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

export default function ContactFAQ() {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Are your kits suitable for beginners?",
      answer: "Absolutely! We label our kits with difficulty levels. Look for the 'Beginner Friendly' badge which features clear, distinct colors and manageable canvas sizes."
    },
    {
      question: "Do they come with all necessary tools?",
      answer: "When purchasing via our partner links, the standard kits typically include the canvas, resin diamonds, applicator pen, wax pad, and a basic sorting tray."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping is handled by AliExpress. Typically, it takes 2-4 weeks depending on your location. We recommend checking the estimated delivery date on the product page before purchasing."
    },
    {
      question: "What is the difference between round and square drills?",
      answer: "Round drills are easier and faster to place, making them great for beginners. Square drills fit together seamlessly without gaps, creating a more 'mosaic' look that many advanced users prefer."
    }
  ];

  const handleToggle = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <Helmet>
        <title>Contact & FAQ - Sparklit</title>
        <meta name="description" content="Get in touch with us or browse our frequently asked questions about diamond painting." />
      </Helmet>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-6">
          We're Here to Help
        </h1>
        <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400">
          Have a question about diamond painting, our curated selections, or an order? Check our FAQ below or send us a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <section className="bg-stone-50 dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800">
          <h2 className="text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold shadow-sm transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* FAQ Accordion */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden bg-white dark:bg-stone-950 cursor-pointer transition-all duration-300"
                onClick={() => handleToggle(index)}
              >
                <div className="px-6 py-4 flex justify-between items-center bg-stone-50/50 dark:bg-stone-900/50 hover:bg-stone-100 dark:hover:bg-stone-800/80 transition-colors">
                  <h3 className="font-semibold text-stone-800 dark:text-stone-200 pr-8">
                    {faq.question}
                  </h3>
                  <span className={`material-symbols-outlined text-stone-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </div>
                <div 
                  className={`px-6 text-stone-600 dark:text-stone-400 text-sm leading-relaxed transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-teal-50 dark:bg-teal-900/20 rounded-2xl border border-teal-100 dark:border-teal-900/50">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-teal-600 dark:text-teal-400 mt-1">info</span>
              <div>
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-1">Affiliate Disclosure</h4>
                <p className="text-sm text-teal-800/80 dark:text-teal-200/80">
                  Sparklit is a curation platform. We link to high-quality products on AliExpress and may earn a commission on purchases made through our links, supporting our site.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
