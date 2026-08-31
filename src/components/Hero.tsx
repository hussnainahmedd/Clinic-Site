'use client';

import { Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F6F1EB] to-[#1B2E3C]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side (Text content) */}
        <div className="w-full md:w-[60%] flex flex-col items-start z-10">
          
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#2A7D6F]/20">
            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2A7D6F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2A7D6F]"></span>
            </div>
            <Clock size={14} className="text-[#3D4A52]" />
            <span className="font-sans text-xs sm:text-sm font-medium text-[#3D4A52]">
              Mon–Sat · 7:30 PM – 12:00 AM
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1B2E3C] leading-[1.1] mb-6">
            Your family&apos;s health,<br />
            <span className="text-[#2A7D6F] italic">our only concern</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#3D4A52] mb-10 max-w-2xl leading-relaxed">
            Trusted general physician and gynae specialist care in Scheme No. 2, Lahore. 
            Walk in any evening — no appointment needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="tel:03015015106"
              className="flex items-center justify-center space-x-2 bg-[#2A7D6F] hover:bg-[#1B2E3C] text-white px-8 py-4 rounded-full transition-all duration-300 font-sans font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            
            <a 
              href="https://maps.google.com/?q=H9W2%2B9C9+Scheme+No+2+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-transparent border-2 border-[#2A7D6F] text-[#2A7D6F] hover:bg-[#2A7D6F] hover:text-white px-8 py-4 rounded-full transition-all duration-300 font-sans font-medium"
            >
              <MapPin size={20} />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

        {/* Right Side (Image Placeholder) */}
        <div className="w-full md:w-[40%] mt-12 md:mt-0 relative z-10">
          <div className="aspect-[4/5] sm:aspect-square md:aspect-[3/4] rounded-3xl bg-[#F6F1EB] border-2 border-[#C9A0A0]/60 flex items-center justify-center shadow-inner relative overflow-hidden group">
            <Image 
              src="/images/clinic-main.jpg" 
              alt="Sadiq Medical & Gynae Clinic Entrance & Signboard" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          
          {/* Decorative elements behind placeholder */}
          <div className="absolute -z-10 top-1/2 -right-12 w-64 h-64 bg-[#2A7D6F]/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute -z-10 -bottom-12 -left-12 w-48 h-48 bg-[#C9A0A0]/20 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
  );
}
