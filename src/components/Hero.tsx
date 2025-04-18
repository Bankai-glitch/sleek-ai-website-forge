
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary pt-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Create Stunning Websites with
          <span className="text-primary block mt-2">AI-Powered Generation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Transform your ideas into beautiful, responsive websites in minutes using our advanced AI technology. No coding required.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View Templates
          </Button>
        </div>
      </div>
    </section>
  );
}
