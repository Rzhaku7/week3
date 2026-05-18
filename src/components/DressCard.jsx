import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

export const DressCard = ({ dress, onLike, onSelect }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(dress.id, !isLiked);
  };

  return (
    <div 
      className="group card-luxury overflow-hidden cursor-pointer"
      onClick={() => onSelect?.(dress)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-96 md:h-[500px]">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-500">
          {dress.imageUrl ? (
            <img 
              src={dress.imageUrl} 
              alt={dress.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-gray-400 text-center">
              <ShoppingBag size={48} className="mx-auto mb-4" />
              <p>No image</p>
            </div>
          )}
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleLike();
            }}
            className={`p-3 rounded-full transition-all ${isLiked ? 'bg-red-500' : 'bg-white hover:bg-gold-600'}`}
          >
            <Heart 
              size={24} 
              className={isLiked ? 'text-white fill-white' : 'text-gray-900'}
            />
          </button>
        </div>

        {/* Category Badge */}
        {dress.category && (
          <div className="absolute top-4 left-4 bg-white px-4 py-2">
            <p className="text-xs tracking-widest uppercase font-semibold text-gray-900">
              {dress.category}
            </p>
          </div>
        )}

        {/* Price */}
        {dress.price && (
          <div className="absolute bottom-4 right-4 bg-white px-4 py-2">
            <p className="text-sm font-semibold text-gray-900">
              ${dress.price}
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide mb-2 text-gray-900 group-hover:text-gold-600 transition-colors">
          {dress.name}
        </h3>
        
        {dress.description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {dress.description}
          </p>
        )}

        {dress.designer && (
          <p className="text-xs tracking-widest uppercase text-gray-500 font-semibold">
            By {dress.designer}
          </p>
        )}

        {/* View Details Button */}
        <button className="mt-4 w-full luxury-button-outline text-sm py-2">
          View Details
        </button>
      </div>
    </div>
  );
};
