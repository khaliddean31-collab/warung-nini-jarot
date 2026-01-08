import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { Hero } from "@/components/features/Hero";
import { About } from "@/components/features/About";
import { Products } from "@/components/features/Products";
import { WhyUs } from "@/components/features/WhyUs";
import { Contact } from "@/components/features/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <Hero />
      <About />
      <WhyUs />
      <Products />
      <Contact />

      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
