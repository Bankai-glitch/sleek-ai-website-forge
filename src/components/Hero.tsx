
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GetStartedForm } from "@/components/GetStartedForm";

export function Hero() {
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
  
  const templates = [
    { id: 1, name: "Business Website", image: "public/lovable-uploads/1fd922e9-789b-4a68-bc9e-cdee589ecd18.png" },
    { id: 2, name: "E-commerce Store", image: "public/lovable-uploads/1fd922e9-789b-4a68-bc9e-cdee589ecd18.png" },
    { id: 3, name: "Portfolio", image: "public/lovable-uploads/1fd922e9-789b-4a68-bc9e-cdee589ecd18.png" },
    { id: 4, name: "Blog", image: "public/lovable-uploads/1fd922e9-789b-4a68-bc9e-cdee589ecd18.png" },
    { id: 5, name: "Landing Page", image: "public/lovable-uploads/1fd922e9-789b-4a68-bc9e-cdee589ecd18.png" },
    { id: 6, name: "Restaurant Site", image: "public/lovable-uploads/1fd922e9-789b-4a68-bc9e-cdee589ecd18.png" },
  ];

  const nextTemplate = () => {
    setCurrentTemplateIndex((prev) => 
      prev >= templates.length - 4 ? 0 : prev + 1
    );
  };

  const prevTemplate = () => {
    setCurrentTemplateIndex((prev) => 
      prev <= 0 ? templates.length - 4 : prev - 1
    );
  };

  const displayedTemplates = templates.slice(currentTemplateIndex, currentTemplateIndex + 4);
  
  return (
    <section className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Let AI Code Your Website
          </h1>
          
          <div className="relative inline-block">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-[#3B82F6] text-white text-xl px-8 py-6 rounded-full hover:bg-[#2563EB] transition-all transform hover:scale-105"
                >
                  GET STARTED
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-[#1a1e37] border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-white">Generate Your Website</DialogTitle>
                  <DialogDescription className="text-gray-300">
                    Fill in the details below to generate a custom website.
                  </DialogDescription>
                </DialogHeader>
                <GetStartedForm />
              </DialogContent>
            </Dialog>
            <div className="absolute -bottom-6 left-0 text-sm text-blue-300">
              Coded from Scratch
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full transform rotate-12">
              Original
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">OR</h2>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Choose an Advanced Template
            </h3>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {displayedTemplates.map((template) => (
                  <div 
                    key={template.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg aspect-[3/4] transition-transform hover:scale-105 p-2"
                  >
                    <h4 className="text-white mb-2">{template.name}</h4>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-4 mt-6">
                <Button 
                  onClick={prevTemplate} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button 
                  onClick={nextTemplate} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
