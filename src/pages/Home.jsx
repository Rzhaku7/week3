import React from 'react';
import { Hero } from '../components/Hero';
import { DressCard } from '../components/DressCard';
import { Link } from 'react-router-dom';
import { Sparkles, Award, Heart } from 'lucide-react';

export const Home = () => {
  const featuredDresses = [
    {
      id: 1,
      name: 'Midnight Elegance',
      category: 'Evening',
      price: '2,500',
      description: 'A stunning black gown with intricate beading and flowing silhouette',
      designer: 'Élégance Studio',
    },
    {
      id: 2,
      name: 'Ethereal Blush',
      category: 'Wedding',
      price: '3,800',
      description: 'Romantic rose gold evening gown with hand-sewn details',
      designer: 'Élégance Studio',
    },
    {
      id: 3,
      name: 'Classic Noir',
      category: 'Cocktail',
      price: '1,800',
      description: 'Timeless black cocktail dress with modern minimalist design',
      designer: 'Élégance Studio',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Collections Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase font-semibold text-gold-600 mb-4">
              Curated Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide mb-6">
              Featured Designs
            </h2>
            <div className="divider-luxury"></div>
          </div>

          {/* Featured Dresses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredDresses.map((dress) => (
              <DressCard key={dress.id} dress={dress} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link to="/gallery" className="luxury-button">
              Explore Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 border-y border-gray-200">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide mb-6">
              Why Choose Élégance
            </h2>
            <div className="divider-luxury"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Bespoke Design */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
                <Sparkles className="text-gold-600" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-light tracking-wide mb-4">
                Bespoke Designs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each piece is individually tailored to match your unique style and preferences.
              </p>
            </div>

            {/* Expert Craftsmanship */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
                <Award className="text-gold-600" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-light tracking-wide mb-4">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Handcrafted by master designers with decades of luxury fashion experience.
              </p>
            </div>

            {/* Premium Materials */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
                <Heart className="text-gold-600" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-light tracking-wide mb-4">
                Premium Materials
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Only the finest fabrics and materials sourced from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide mb-6">
            Ready to Find Your Perfect Dress?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a personal consultation with our design experts to create your dream dress.
          </p>
          <Link to="/book" className="luxury-button-gold">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
