import React from 'react';
import { Stethoscope, Syringe, Heart, Activity } from 'lucide-react';

const services = [
  {
    title: 'General Checkup',
    icon: Stethoscope,
    description: 'Comprehensive consultations with our experienced general physician. Walk in for anything from a routine visit to an ongoing concern.',
  },
  {
    title: 'Drip & Injection',
    icon: Syringe,
    description: 'IV drip therapy and injections administered with care in a comfortable clinical setting.',
  },
  {
    title: 'Gynae Consultation',
    icon: Heart,
    description: "Dedicated women's health consultations with Dr. Ayesha Rizwan — MBBS, MCPS. A safe, private space for your care.",
  },
  {
    title: 'General Clinic',
    icon: Activity,
    description: 'Walk-in medical care for everyday health needs. No appointment required.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F6F1EB] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Intro Side */}
        <div className="lg:w-1/3 space-y-6">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#2A7D6F]">
            What we offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B2E3C] leading-tight">
            Care tailored to your needs
          </h2>
          <p className="font-sans text-[#3D4A52] text-lg leading-relaxed">
            From routine checkups to specialist consultations — all under one roof, every evening.
          </p>
        </div>

        {/* Cards Side */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${
                  index % 2 === 1 ? 'md:mt-16' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#2A7D6F]/10 text-[#2A7D6F] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#1B2E3C] mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-[#3D4A52] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
