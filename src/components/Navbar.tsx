
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-white">
          AadishAIWebsites
        </div>
        <div className="flex items-center gap-4">
          <input 
            type="text" 
            className="hidden md:block bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Search..."
          />
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
