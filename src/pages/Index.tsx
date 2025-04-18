
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Features } from "@/components/Features";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Newsletter />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
