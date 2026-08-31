import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Content - 60% */}
        <div className="w-full lg:w-[60%] space-y-6">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#2A7D6F]">
            About the clinic
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B2E3C] leading-tight">
            A neighborhood clinic that knows your name
          </h2>
          <div className="font-sans text-[#3D4A52] max-w-3xl leading-relaxed space-y-4 text-lg">
            <p>
              Sadiq Clinic has served the families of Scheme No. 2, Lahore for years — offering reliable, affordable medical care every evening. Whether it&apos;s a routine checkup, an injection, or a gynae consultation, our doors are open when you need them most.
            </p>
            <p>
              We believe good healthcare starts with trust. Our two experienced physicians see every patient personally, take the time to listen, and treat you like family — not a number.
            </p>
          </div>
        </div>

        {/* Right Content - 40% (Real Clinic Interior Photos) */}
        <div className="w-full lg:w-[40%] grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/clinic-interior.jpg"
              alt="Sadiq Clinic Official PMDC Registration Board & Interior"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md group mt-6">
            <Image
              src="/images/clinic-desk.jpg"
              alt="Sadiq Clinic Consultation Area"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
