import React from "react";

import starterImg from "../assets/ai10.jpg";
import creatorImg from "../assets/ai11.jpg";
import enterpriseImg from "../assets/ai3.jpg";

const plans = [
  {
    name: "Starter Plan",
    price: "$18.00",
    duration: "/ monthly",
    description:
      "Beginners who want to explore Synthesia without any commitment.",
    buttonText: "Upgrade",
    buttonType: "default",
    limits: ["1 editor, 3 guest commenters", "120 video minutes per year"],
    features: [
      "125+ AI avatars",
      "3 personal avatars",
      "AI assistant",
      "Sharing and commenting",
      "Studio avatars (paid add-on)",
      "Download videos",
    ],
    image: starterImg, // imported image
    theme: "blue",
  },
  {
    name: "Creator Plan",
    price: "$64.00",
    duration: "/ monthly",
    description:
      "Freelancers or small teams that need more flexibility and downloadable content.",
    buttonText: "Upgrade",
    buttonType: "highlight",
    limits: ["1 editor, 5 guest commenters", "360 video minutes per year"],
    features: [
      "Everything in Starter Plus...",
      "Selected industry avatars",
      "5 personal avatars",
      "Premium voices",
      "Custom fonts",
      "Branded share page",
      "Synthesia API",
    ],
    image: creatorImg, // imported image
    theme: "purple",
    badge: "Save 25%",
  },
  {
    name: "Enterprise Plan",
    price: "$112.00",
    duration: "/ monthly",
    description:
      "Content creators, marketers, and small businesses producing video content regularly.",
    buttonText: "Book Demo",
    buttonType: "default",
    limits: ["Custom no. of editors and guests", "Unlimited video minutes"],
    features: [
      "Everything in Creator Plus...",
      "All industry avatars",
      "Unlimited personal avatars",
      "Branded AI avatars (paid add-on)",
      "Voice cloning",
      "Shared workspace",
      "SAML/SSO",
    ],
    image: enterpriseImg, // imported image
    theme: "green",
  },
];

const themeColors: Record<string, string> = {
  blue: "bg-gradient-to-b from-blue-900 via-blue-800 to-black",
  purple: "bg-gradient-to-b from-purple-900 via-purple-800 to-black",
  green: "bg-gradient-to-b from-emerald-900 via-emerald-700 to-black",
};

const PricingPlans: React.FC = () => {
  return (
    <section className="min-h-screen text-white flex flex-col  justify-center px-6 py-16">
  
  <div className="mb-14">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
      Pricing
    </h2>
   
  </div>

  {/* Pricing Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
    {plans.map((plan, idx) => (
      <div
        key={idx}
        className={`relative rounded-2xl overflow-hidden shadow-lg ${themeColors[plan.theme]}`}
      >
        {/* Top image */}
        <div className="h-24 w-full overflow-hidden">
          <img
            src={plan.image}
            alt={plan.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 h-full flex flex-col justify-between">
          {plan.badge && (
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              {plan.badge}
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
            <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
            <div className="flex items-baseline space-x-2 mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-400 text-sm">{plan.duration}</span>
            </div>
            <button
              className={`w-full py-3 rounded-xl font-semibold transition mb-6 ${
                plan.buttonType === "highlight"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {plan.buttonText}
            </button>

            <h4 className="text-lg font-semibold mb-3">Plan Limits</h4>
            <ul className="space-y-2 text-gray-300 mb-6">
              {plan.limits.map((limit, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span>✔️</span>
                  <span>{limit}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-3">Features</h4>
            <ul className="space-y-2 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span>✔️</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default PricingPlans;
