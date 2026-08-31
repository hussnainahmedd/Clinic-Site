import React from 'react';
import Image from 'next/image';

export default function Doctors() {
  return (
    <section id="doctors" className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="uppercase tracking-widest text-sm text-[#2A7D6F] font-semibold">
            OUR PHYSICIANS
          </h2>
          <p className="font-serif text-3xl md:text-4xl text-[#1B2E3C]">
            Experienced hands you can trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Doctor 1 */}
          <div className="max-w-sm mx-auto w-full">
            <div className="relative w-full aspect-[3/4] rounded-2xl bg-[#F6F1EB] overflow-hidden shadow-md">
              <Image 
                src="/images/dr-rizwan.jpg" 
                alt="Dr. M. Rizwan Sadiq" 
                fill 
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                priority 
              />
            </div>
            <div className="pt-6 space-y-2">
              <h3 className="font-serif text-xl text-[#1B2E3C]">Dr. M. Rizwan Sadiq</h3>
              <div className="inline-block text-xs bg-[#2A7D6F]/10 text-[#2A7D6F] rounded-full px-3 py-1 font-medium">
                MBBS · PMDC · RMP
              </div>
              <p className="text-[#3D4A52] font-medium pt-1">General Physician</p>
              <p className="text-sm text-gray-500">Registrar, Govt. Nawaz Sharif Hospital</p>
              <p className="text-sm text-gray-500 pt-2">Checkup · Drip/Injection</p>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="max-w-sm mx-auto w-full">
            <div className="relative w-full aspect-[3/4] rounded-2xl bg-[#F6F1EB] overflow-hidden shadow-md">
              <Image 
                src="/images/clinic-main.jpg" 
                alt="Dr. Ayesha Rizwan Clinic Signboard" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
            <div className="pt-6 space-y-2">
              <h3 className="font-serif text-xl text-[#1B2E3C]">Dr. Ayesha Rizwan</h3>
              <div className="inline-block text-xs bg-[#2A7D6F]/10 text-[#2A7D6F] rounded-full px-3 py-1 font-medium">
                MBBS · MCPS
              </div>
              <p className="text-[#3D4A52] font-medium pt-1">Gynae Specialist & Consultant</p>
              <p className="text-sm text-gray-500">Registrar, Govt. Nawaz Sharif Hospital</p>
              <p className="text-sm text-gray-500 pt-2">Gynae Consultation · General Clinic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
