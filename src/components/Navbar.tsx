
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-primary">AadishAIwebsites</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
          <a href="#testimonials" className="text-white hover:text-primary transition-colors">Testimonials</a>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </div>
      </div>
    </nav>
  );
}
