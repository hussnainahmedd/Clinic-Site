import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Tribute from "@/components/Tribute";
import LocationHours from "@/components/LocationHours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Tribute />
      <LocationHours />
      <Contact />
      <Footer />
    </main>
  );
}
