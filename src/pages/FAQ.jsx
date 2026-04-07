import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const faqs = [
    {
      q: "International Shipping & Customs",
      a: "We ship our curated kits globally from our workshops in Europe and Asia. Shipping times typically range from 7-14 business days. Please note that external customs fees may apply depending on your region's trade regulations."
    },
    {
      q: "Our Philosophy on Returns",
      a: "If your kit arrives with any defects or missing drills, we offer a 30-day 'Brilliance Guarantee.' We will replace any missing components or provide a full refund if the canvas is compromised."
    },
    {
      q: "The Diamond Painting Ritual",
      a: "Diamond painting is the process of applying tiny resin 'diamonds' to a coded adhesive canvas. It blends the logic of cross-stitch with the brilliance of paint-by-numbers, resulting in a shimmering mosaic of light."
    },
    {
      q: "Which kit is right for me?",
      a: "Beginners often find 'Round Drill' kits more forgiving, as the circular shape requires less precision alignment. Advanced crafters prefer 'Square Drills' for the satisfying edge-to-edge 'click' and fuller mosaic finish."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ | Sparklit</title>
        <meta name="description" content="Frequently Asked Questions about our diamond painting kits, shipping, and return policies." />
      </Helmet>

      <section className="bg-surface-container-low py-32 min-h-screen">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4 block">Inquiries</span>
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6">Common Questions</h2>
            <div className="w-16 h-1 bg-tertiary-container mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group border-b border-outline-variant/20 py-6">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center cursor-pointer text-left focus:outline-none"
                >
                  <h4 className="text-lg font-bold text-on-surface">{faq.q}</h4>
                  <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>add</span>
                </button>
                <div className={`mt-4 text-on-surface-variant leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-on-surface-variant mb-6">Still curious? Our curators are here to help.</p>
            <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:underline underline-offset-8 transition-all">
              Contact Support <span className="material-symbols-outlined ml-2">mail</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
