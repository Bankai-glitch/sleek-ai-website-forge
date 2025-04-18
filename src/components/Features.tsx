
import { Code, Palette, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Generation",
      description: "Create complete websites in minutes using advanced AI technology"
    },
    {
      icon: Code,
      title: "Clean Code Output",
      description: "Get production-ready HTML, CSS, and JavaScript code"
    },
    {
      icon: Palette,
      title: "Custom Templates",
      description: "Choose from a variety of professional templates"
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-accent p-6 rounded-lg hover:scale-105 transition-transform">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
