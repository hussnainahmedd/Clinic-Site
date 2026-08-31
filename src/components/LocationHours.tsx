import { MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LocationHours() {
  return (
    <section id="location" className="bg-[#F6F1EB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <span className="text-[#2A7D6F] uppercase tracking-widest text-sm font-semibold block mb-3">
            Find Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B2E3C]">
            Visit us any evening
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Map */}
          <div className="space-y-4">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d74.35!3d31.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjAiTiA3NMKwMjEnMDAuMCJF!5e0!3m2!1sen!2spk!4v1"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sadiq Clinic Location Map"
              ></iframe>
            </div>
            <Link 
              href="https://maps.google.com/?q=H9W2%2B9C9+Scheme+No+2+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2A7D6F] hover:text-[#1B2E3C] transition-colors font-medium"
            >
              <MapPin className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </Link>
          </div>

          {/* Right Column: Info Cards */}
          <div className="space-y-6">
            <div className="bg-[#FFFFFF] rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="bg-[#F6F1EB] p-3 rounded-full text-[#2A7D6F] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1B2E3C] mb-2">Location</h3>
                <p className="text-[#3D4A52]">Sadiq Medical & Gynae Clinic</p>
                <p className="text-[#3D4A52]">Scheme No. 2, Lahore</p>
                <p className="text-sm text-gray-400 mt-2">H9W2+9C9</p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="bg-[#F6F1EB] p-3 rounded-full text-[#2A7D6F] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="font-serif text-xl text-[#1B2E3C] mb-4">Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between text-[#3D4A52] border-b border-gray-100 pb-2">
                    <span>Monday – Saturday</span>
                    <span className="font-medium text-right">7:30 PM – 12:00 AM</span>
                  </li>
                  <li className="flex justify-between text-[#C9A0A0] pt-1">
                    <span>Sunday</span>
                    <span className="font-medium text-right">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
