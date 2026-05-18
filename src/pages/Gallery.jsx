import React, { useState, useEffect } from 'react';
import { DressCard } from '../components/DressCard';
import { Filter } from 'lucide-react';

export const Gallery = () => {
  const [dresses, setDresses] = useState([]);
  const [filteredDresses, setFilteredDresses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['All', 'Wedding', 'Evening', 'Cocktail', 'Casual'];

  // Mock data for dresses
  const mockDresses = [
    { id: 1, name: 'Midnight Elegance', category: 'Evening', price: '2,500', designer: 'Élégance Studio', description: 'A stunning black gown with intricate beading' },
    { id: 2, name: 'Ethereal Blush', category: 'Wedding', price: '3,800', designer: 'Élégance Studio', description: 'Romantic rose gold evening gown' },
    { id: 3, name: 'Classic Noir', category: 'Cocktail', price: '1,800', designer: 'Élégance Studio', description: 'Timeless black cocktail dress' },
    { id: 4, name: 'Ivory Dream', category: 'Wedding', price: '4,200', designer: 'Élégance Studio', description: 'Exquisite white wedding gown' },
    { id: 5, name: 'Sapphire Night', category: 'Evening', price: '2,800', designer: 'Élégance Studio', description: 'Deep blue evening dress with dramatic train' },
    { id: 6, name: 'Emerald Radiance', category: 'Cocktail', price: '2,200', designer: 'Élégance Studio', description: 'Emerald green cocktail dress' },
    { id: 7, name: 'Rose Garden', category: 'Casual', price: '1,500', designer: 'Élégance Studio', description: 'Soft pink casual day dress' },
    { id: 8, name: 'Sunset Glow', category: 'Evening', price: '3,000', designer: 'Élégance Studio', description: 'Warm sunset-inspired gown' },
    { id: 9, name: 'Pearl Essence', category: 'Wedding', price: '4,500', designer: 'Élégance Studio', description: 'Pearl-detailed bridal dress' },
  ];

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setDresses(mockDresses);
      setFilteredDresses(mockDresses);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredDresses(dresses);
    } else {
      setFilteredDresses(dresses.filter(dress => dress.category === selectedCategory));
    }
  }, [selectedCategory, dresses]);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide mb-4">
            Dress Gallery
          </h1>
          <div className="divider-luxury"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl">
            Browse our complete collection of luxury dresses. Each design is crafted with meticulous attention to detail.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding border-b border-gray-200">
        <div className="container-max">
          <div className="flex items-center gap-4 mb-8">
            <Filter size={20} className="text-gray-900" />
            <h3 className="text-sm tracking-widest uppercase font-semibold text-gray-900">
              Filter by Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 transition-all duration-300 text-sm tracking-widest uppercase font-semibold ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-max">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-100 animate-pulse h-[600px] rounded"></div>
              ))}
            </div>
          ) : (
            <>
              {filteredDresses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {filteredDresses.map((dress) => (
                    <DressCard key={dress.id} dress={dress} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-gray-600">
                    No dresses found in this category.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Results Count */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Showing {filteredDresses.length} of {dresses.length} designs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
