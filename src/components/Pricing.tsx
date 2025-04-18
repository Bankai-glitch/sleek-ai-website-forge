
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: { monthly: 29, yearly: 290 },
      features: [
        "1 website generation per month",
        "Basic template selection",
        "Standard response time",
        "Email support",
        "7-day revision window"
      ],
      cta: "Get Started",
      popular: false,
      ctaColor: "bg-gray-700 hover:bg-gray-600"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and multiple projects",
      price: { monthly: 79, yearly: 790 },
      features: [
        "5 website generations per month",
        "All templates included",
        "Priority response time",
        "Email & chat support",
        "14-day revision window",
        "Custom domain setup",
        "SEO optimization"
      ],
      cta: "Get Started",
      popular: true,
      ctaColor: "bg-[#3B82F6] hover:bg-[#2563EB]"
    },
    {
      name: "Enterprise",
      description: "Advanced options for larger organizations",
      price: { monthly: 199, yearly: 1990 },
      features: [
        "Unlimited website generations",
        "All templates + priority access to new ones",
        "Dedicated support team",
        "Phone, email & chat support",
        "30-day revision window",
        "Custom domain setup",
        "Advanced SEO optimization",
        "Analytics integration",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false,
      ctaColor: "bg-gray-700 hover:bg-gray-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black to-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include core features like AI-powered generation and responsive designs.
          </p>
          
          <div className="flex items-center justify-center mt-8 mb-12">
            <div className="bg-gray-800 p-1 rounded-full flex items-center">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`py-2 px-4 rounded-full text-sm ${
                  billingPeriod === 'monthly' 
                    ? 'bg-[#3B82F6] text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`py-2 px-4 rounded-full text-sm ${
                  billingPeriod === 'yearly' 
                    ? 'bg-[#3B82F6] text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly <span className="text-xs opacity-75">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border ${
                plan.popular ? 'border-[#3B82F6]' : 'border-gray-700'
              } relative overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#3B82F6] text-xs font-bold text-white px-3 py-1 transform rotate-0 origin-top-right">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly}</span>
                <span className="text-gray-400 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#3B82F6] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className={`w-full ${plan.ctaColor} text-white`}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
