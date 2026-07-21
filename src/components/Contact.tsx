import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-[#2A7D6F] uppercase tracking-widest text-sm font-semibold block mb-3">
          Get in Touch
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1B2E3C] mb-6">
          We're here to help
        </h2>
        <p className="text-[#3D4A52] text-lg mb-10 leading-relaxed">
          Call us directly or send a message on WhatsApp — we'll get back to you promptly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a 
            href="tel:03004393220"
            className="flex items-center gap-3 bg-[#2A7D6F] hover:bg-[#1f5e53] text-white rounded-full px-8 py-4 text-lg font-medium transition-colors w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <a 
            href="https://wa.me/923004393220"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-8 py-4 text-lg font-medium transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-lg text-[#3D4A52]">
          <Phone className="w-5 h-5 text-[#2A7D6F]" />
          <span className="font-medium">0300 4393220</span>
        </div>
      </div>
    </section>
  );
}
