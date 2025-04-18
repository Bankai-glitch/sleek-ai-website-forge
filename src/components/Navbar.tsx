
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#60a5fa]">
            AadishAIWebsites
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#templates" className="text-gray-300 hover:text-white transition-colors">
            Templates
          </a>
          <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}
