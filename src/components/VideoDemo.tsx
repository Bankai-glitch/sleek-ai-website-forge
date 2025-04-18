
import { Play } from "lucide-react";

export function VideoDemo() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-4">
            AadishAIWebsites Demo
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-16">
            Discover how our AI system works with a real-time walkthrough and secure website generation flow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden border border-white/10">
            <div className="aspect-video bg-gray-800 relative">
              <img 
                src="public/lovable-uploads/058ae820-a6af-4670-90d6-eb7a8bcd156e.png" 
                alt="Video thumbnail" 
                className="w-full h-full object-cover opacity-75" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Play className="h-7 w-7 ml-1" />
                </button>
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-4 absolute bottom-0 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="text-white">
                    <Play className="h-5 w-5" />
                  </button>
                  <span className="text-sm text-white">0:00 / 1:23</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 18H16M16 18L10 12M16 18L10 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6H8M8 6L14 0M8 6L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 19.1005C18.3923 17.4668 21 13.7776 21 9C21 4.02944 16.9706 0 12 0C7.02944 0 3 4.02944 3 9C3 13.7776 5.60769 17.4668 9 19.1005V19C9 16.7909 10.7909 15 13 15C15.2091 15 17 16.7909 17 19C17 21.2091 15.2091 23 13 23C10.7909 23 9 21.2091 9 19V19.1005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-[#3B82F6] mb-3">Interactive Walkthrough</h3>
              <p className="text-gray-300">
                Explore how you can chat with the AI, report your requirements, and receive instant website design insights in seconds.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-[#3B82F6] mb-3">Smart & Secure</h3>
              <p className="text-gray-300">
                AadishAIWebsites protects your data while delivering personalized website recommendations using intelligent, privacy-first design.
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mt-8">
            This demo shows a real-time session with AadishAIWebsites in action.
          </p>
        </div>
      </div>
    </section>
  );
}
