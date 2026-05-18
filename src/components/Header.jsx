import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, LogOut } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="border-b border-gray-200">
      <nav className="container-max section-padding py-6 md:py-8 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
        >
          <div className="text-2xl md:text-3xl font-serif font-light tracking-wider text-gray-900">
            ÉLÉGANCE
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link 
            to="/gallery" 
            className="text-sm tracking-widest uppercase font-semibold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Gallery
          </Link>
          <Link 
            to="/book" 
            className="text-sm tracking-widest uppercase font-semibold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Book
          </Link>
          
          {user ? (
            <>
              <Link 
                to="/admin" 
                className="text-sm tracking-widest uppercase font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm tracking-widest uppercase font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="luxury-button"
            >
              Admin
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link 
                to="/gallery" 
                className="text-sm tracking-widest uppercase font-semibold text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/book" 
                className="text-sm tracking-widest uppercase font-semibold text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Book
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to="/admin" 
                    className="text-sm tracking-widest uppercase font-semibold text-gray-700 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-sm tracking-widest uppercase font-semibold text-red-600 hover:text-red-700 justify-start"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="luxury-button w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
