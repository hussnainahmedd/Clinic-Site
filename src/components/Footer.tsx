'use client';

import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B2E3C] text-[#F6F1EB] py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 text-center md:text-left">
          {/* Left */}
          <div>
            <h2 className="font-serif text-2xl font-medium mb-1">Sadiq Clinic</h2>
            <p className="text-sm text-[#F6F1EB]/60">Medical & Gynae</p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="#about" className="text-sm text-[#F6F1EB]/60 hover:text-[#F6F1EB] transition-colors">About</Link>
            <Link href="#services" className="text-sm text-[#F6F1EB]/60 hover:text-[#F6F1EB] transition-colors">Services</Link>
            <Link href="#doctors" className="text-sm text-[#F6F1EB]/60 hover:text-[#F6F1EB] transition-colors">Doctors</Link>
            <Link href="#location" className="text-sm text-[#F6F1EB]/60 hover:text-[#F6F1EB] transition-colors">Location</Link>
            <Link href="#contact" className="text-sm text-[#F6F1EB]/60 hover:text-[#F6F1EB] transition-colors">Contact</Link>
          </div>

          {/* Right */}
          <div className="text-sm text-[#F6F1EB]/60 space-y-1">
            <p>0300 4393220</p>
            <p>Scheme No. 2, Lahore</p>
          </div>
        </div>

        <div className="border-t border-[#F6F1EB]/10 pt-8 text-center">
          <p className="text-xs text-[#F6F1EB]/40">
            © {new Date().getFullYear()} Sadiq Medical & Gynae Clinic. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-10 h-10 bg-[#2A7D6F] hover:bg-[#1f5e53] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
