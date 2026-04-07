import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sparklit</title>
        <meta name="description" content="Get in touch with the Sparklit team. We're here to help you find your flow." />
      </Helmet>
      
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-8 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="uppercase tracking-widest text-[10px] font-bold text-primary mb-4 block">Inquiries</span>
            <h2 className="text-5xl font-serif mb-6 text-on-surface">Get in touch.</h2>
            <p className="text-on-surface-variant mb-12 max-w-md">Whether you're a seasoned artist or just starting your sparkle journey, we're here to help you find your flow.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-primary">Email Us</p>
                  <p className="text-on-surface font-medium">hello@sparklit.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-primary">Our Studio</p>
                  <p className="text-on-surface font-medium">124 Creative Lane, Portland, OR</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-10 lg:p-16 rounded-3xl shadow-sm border border-outline-variant/10">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary pt-6 pb-2 text-on-surface placeholder-transparent" 
                  placeholder="Your Name" 
                />
                <label className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs transition-all duration-300">Your Name</label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary pt-6 pb-2 text-on-surface placeholder-transparent" 
                  placeholder="Email Address" 
                />
                <label className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs transition-all duration-300">Email Address</label>
              </div>
              
              <div className="relative">
                <textarea 
                  rows="3" 
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary pt-6 pb-2 text-on-surface placeholder-transparent resize-none" 
                  placeholder="Message" 
                ></textarea>
                <label className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs transition-all duration-300">Message</label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-on-surface text-surface py-5 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-on-surface/5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
