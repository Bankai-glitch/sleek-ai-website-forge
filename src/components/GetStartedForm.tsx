
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

export function GetStartedForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  const businessTypes = [
    "E-commerce", 
    "Professional Services",
    "Restaurant/Food",
    "Healthcare",
    "Education",
    "Technology",
    "Travel & Hospitality",
    "Real Estate",
    "Fitness & Wellness",
    "Creative & Design"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-2">
        <label htmlFor="businessType" className="text-sm font-medium text-white">
          Business Type
        </label>
        <Select required>
          <SelectTrigger className="bg-[#262b44] border-gray-700 text-white">
            <SelectValue placeholder="Select a business type" />
          </SelectTrigger>
          <SelectContent className="bg-[#262b44] border-gray-700 text-white">
            {businessTypes.map((type) => (
              <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="businessName" className="text-sm font-medium text-white">
          Business Name
        </label>
        <Input 
          id="businessName" 
          placeholder="Enter your business name" 
          required
          className="bg-[#262b44] border-gray-700 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="businessDescription" className="text-sm font-medium text-white">
          Business Description
        </label>
        <Textarea 
          id="businessDescription" 
          placeholder="Describe your business, products, or services" 
          required
          className="bg-[#262b44] border-gray-700 text-white placeholder:text-gray-400 min-h-[120px]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="stylePreferences" className="text-sm font-medium text-white">
          Style Preferences
        </label>
        <Input 
          id="stylePreferences" 
          placeholder="e.g., modern, colorful, minimalist, etc." 
          className="bg-[#262b44] border-gray-700 text-white placeholder:text-gray-400"
        />
        <p className="text-xs text-gray-400">
          Describe your preferred style, color scheme, or any design preferences.
        </p>
      </div>

      <Button 
        type="submit"
        className="w-full bg-[#3B82F6] text-white hover:bg-[#2563EB]"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Website"}
      </Button>
    </form>
  );
}
