import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold-600 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-900 opacity-5 rounded-full blur-3xl"></div>

      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight tracking-wider mb-6 text-gray-900">
              Timeless Elegance
            </h1>
          </div>

          {/* Divider */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
            <div className="divider-luxury"></div>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-2xl text-gray-600 mb-12 font-light tracking-wide">
              Bespoke luxury fashion designs crafted for the discerning individual
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/gallery" className="luxury-button group">
              <span className="flex items-center justify-center gap-2">
                Explore Collections
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/book" className="luxury-button-outline">
              Book Consultation
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs tracking-widest uppercase text-gray-500">Scroll to explore</p>
              <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
