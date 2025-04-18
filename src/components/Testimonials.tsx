
export function Testimonials() {
  const testimonials = [
    {
      text: "The AI-powered website generation saved us weeks of development time. Incredible tool!",
      author: "Sarah Johnson",
      role: "Marketing Director"
    },
    {
      text: "Clean code output and professional templates. Exactly what we needed for our startup.",
      author: "Michael Chen",
      role: "Tech Founder"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-accent p-6 rounded-lg">
              <p className="text-gray-400 mb-4">{testimonial.text}</p>
              <div className="font-semibold text-white">{testimonial.author}</div>
              <div className="text-primary text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
