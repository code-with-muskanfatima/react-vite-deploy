import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <div className="flex-1 text-center md:text-left">
            <a href="/" className="text-xl font-light text-gray-900">
              PURE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/shop" className="text-sm text-gray-600 hover:text-gray-900">
              SHOP
            </a>
            <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">
              ABOUT
            </a>
            <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              CONTACT
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="/shop" className="text-sm text-gray-600 hover:text-gray-900">
                SHOP
              </a>
              <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                ABOUT
              </a>
              <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
