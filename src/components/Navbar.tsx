
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-400 to-purple-600 text-transparent bg-clip-text">
          AadishAIwebsites
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('features')} 
            className="text-white hover:text-primary transition-colors">Features</button>
          <button onClick={() => scrollToSection('templates')} 
            className="text-white hover:text-primary transition-colors">Templates</button>
          <button onClick={() => scrollToSection('testimonials')} 
            className="text-white hover:text-primary transition-colors">Testimonials</button>
          <a href="https://github.com/aadishweb" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
