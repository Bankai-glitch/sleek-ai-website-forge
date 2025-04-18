
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Features } from "@/components/Features";
import { VideoDemo } from "@/components/VideoDemo";
import { Pricing } from "@/components/Pricing";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <Marquee />
        <VideoDemo />
        <Features />
        <Pricing />
        <Newsletter />
        <Testimonials />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
