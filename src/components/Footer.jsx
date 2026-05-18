import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="section-padding container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          {/* About */}
          <div>
            <h4 className="text-sm tracking-widest uppercase font-semibold mb-6">About</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Élégance brings timeless luxury fashion designs to those who appreciate true craftsmanship and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest uppercase font-semibold mb-6">Links</h4>
            <ul className="space-y-3">
              <li><a href="#gallery" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Gallery</a></li>
              <li><a href="#book" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest uppercase font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>hello@elegance.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8"></div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-gray-600">
            © {currentYear} Élégance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gold-600 transition-colors" title="Follow us on Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1"/><path d="M9 2h6a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7V9a7 7 0 0 1 7-7z"/><circle cx="12" cy="12" r="5"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gold-600 transition-colors" title="Find us on Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
