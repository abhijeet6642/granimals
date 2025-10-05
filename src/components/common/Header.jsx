import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-background-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="The Last Recovery Method"
              className="h-8 md:h-10 w-auto"
            />
            <span className="ml-2 text-lg md:text-xl font-bold text-text-primary hidden sm:block">
              The Last Recovery Method
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#methodology"
              className="text-text-primary hover:text-primary-background transition-colors duration-200"
            >
              Methodology
            </a>
            <a
              href="#pricing"
              className="text-text-primary hover:text-primary-background transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-text-primary hover:text-primary-background transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-text-primary hover:text-primary-background transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              text="Book Now - 75% Off"
              className="bg-primary-background hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2"
              onClick={() => window.location.href = '#pricing'}
              layout_width="auto"
              padding="medium"
              margin="none"
              position="static"
              variant="primary"
              size="medium"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-text-primary hover:text-primary-background hover:bg-background-main transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 pb-4' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-border-accent-light-gray">
            <a
              href="#methodology"
              className="text-text-primary hover:text-primary-background transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Methodology
            </a>
            <a
              href="#pricing"
              className="text-text-primary hover:text-primary-background transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-text-primary hover:text-primary-background transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-text-primary hover:text-primary-background transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button
                text="Book Now - 75% Off"
                className="w-full bg-primary-background hover:bg-primary-dark text-primary-foreground font-semibold py-3"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = '#pricing';
                }}
                layout_width="full"
                padding="large"
                margin="none"
                position="static"
                variant="primary"
                size="large"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;