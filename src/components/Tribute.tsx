import Image from 'next/image';

export default function Tribute() {
  return (
    <section id="tribute" className="bg-[#1B2E3C] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="w-16 h-px bg-[#2A7D6F] mx-auto"></div>
        
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src="/images/muhammad-sadiq.png"
            alt="Muhammad Sadiq"
            fill
            className="rounded-full object-cover border-4 border-[#2A7D6F]/30 ring-2 ring-[#F6F1EB]/10 ring-offset-2 ring-offset-[#1B2E3C]"
          />
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-[#F6F1EB]">Muhammad Sadiq</h2>
          <p className="text-[#F6F1EB]/80 leading-relaxed font-light text-lg">
            This clinic carries his name and his values — compassion, honesty, and service to the community. Everything we do honors his memory.
          </p>
        </div>

        <div className="w-16 h-px bg-[#2A7D6F] mx-auto"></div>
      </div>
    </section>
  );
}
