
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Please enter your email address");
      return;
    }
    
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates, features, and templates.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-secondary border-primary text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
