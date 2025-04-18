
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

// Template data
const templates = [
  {
    id: 1,
    name: "Business Professional",
    description: "Clean and professional template for corporate websites",
    image: "https://i.imgur.com/7Xycs1v.png", // Replace with your actual image URL
  },
  {
    id: 2,
    name: "E-commerce Store",
    description: "Ready-to-use template for online stores",
    image: "https://i.imgur.com/PnMFXft.png", // Replace with your actual image URL
  },
  {
    id: 3,
    name: "Portfolio Showcase",
    description: "Showcase your work with this elegant portfolio template",
    image: "https://i.imgur.com/VZFdE9U.png", // Replace with your actual image URL
  },
  {
    id: 4,
    name: "Blog & Magazine",
    description: "Perfect template for content creators and publishers",
    image: "https://i.imgur.com/KCSIAGX.png", // Replace with your actual image URL
  },
];

export function Templates() {
  const handleSelectTemplate = (id: number) => {
    toast.success(`Template ${id} selected! Starting setup process...`);
  };

  return (
    <section id="templates" className="py-20 bg-gradient-to-b from-black to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Template</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started quickly with one of our professionally designed templates,
            or scroll down to code a website from scratch with AI.
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {templates.map((template) => (
              <CarouselItem key={template.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{template.description}</p>
                    <Button
                      onClick={() => handleSelectTemplate(template.id)}
                      className="bg-primary hover:bg-primary/90 text-white mt-auto"
                    >
                      Use This Template
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static left-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative static right-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Want Something Unique?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our AI can create a custom website coded from scratch based on your specific needs.
          </p>
          <Button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary hover:bg-primary/90 text-white">
            Code From Scratch
          </Button>
        </div>
      </div>
    </section>
  );
}
