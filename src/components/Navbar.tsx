'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FFFFFF] shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col z-50">
            <Link href="#hero" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-[#1B2E3C]">Sadiq Clinic</span>
              <span className="font-sans text-xs tracking-wider text-[#2A7D6F] uppercase font-semibold">Medical & Gynae</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-[#3D4A52] hover:text-[#2A7D6F] transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <a
              href="tel:03004393220"
              className="flex items-center space-x-2 bg-[#2A7D6F] hover:bg-[#1B2E3C] text-[#FFFFFF] px-5 py-2.5 rounded-full transition-colors font-sans text-sm font-medium"
            >
              <Phone size={16} />
              <span>0300 4393220</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled || isMobileMenuOpen ? 'text-[#1B2E3C]' : 'text-[#1B2E3C]'} hover:text-[#2A7D6F] focus:outline-none transition-colors`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#FFFFFF] transition-transform duration-300 ease-in-out pt-24 px-6 flex flex-col space-y-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-2xl font-medium text-[#3D4A52] hover:text-[#2A7D6F] py-3 border-b border-gray-100 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="mt-8">
          <a
            href="tel:03004393220"
            className="flex items-center justify-center space-x-3 bg-[#2A7D6F] active:bg-[#1B2E3C] text-[#FFFFFF] px-6 py-4 rounded-full font-sans font-medium text-lg w-full transition-colors"
          >
            <Phone size={20} />
            <span>0300 4393220</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
