import React from "react";
import { Shield, Diamond, GraduationCap, MessageCircle } from "lucide-react";

const Choose = () => {
  const cards = [
    {
      title: "Accuracy",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      bg: "bg-red-100",
      border: "border-gray-200",
      text: "Every detail matters. From setup to settlements, we ensure precision in every transaction and account management.",
    },
    {
      title: "Personal Support",
      icon: <Diamond className="w-8 h-8 text-cyan-600" />,
      bg: "bg-cyan-100",
      border: "border-gray-200",
      text: "Direct access to our team. No call centers, no runaround — just real people who care",
      button: true,
    },
    {
      title: "Honesty",
      icon: <Diamond className="w-8 h-8 text-cyan-600" />,
      bg: "bg-cyan-100",
      border: "border-gray-200",
      text: "Transparent pricing with no hidden fees. What you see is what you get — always.",
      button: true,
    },
    {
      title: "Training",
      icon: <Diamond className="w-8 h-8 text-cyan-600" />,
      bg: "bg-cyan-100",
      border: "border-gray-200",
      text: "Transparent pricing with no hidden fees. What you see is what you get — always.",
      button: true,
    },
    {
      title: "Accountability",
      icon: <Diamond className="w-8 h-8 text-cyan-600" />,
      bg: "bg-cyan-100",
      border: "border-gray-200",
      text: "We stand behind every account. Personal attention from funding to settlements, every single da",
      button: true,
    },
    {
      title: "Fast Setup",
      icon: <GraduationCap className="w-8 h-8 text-gray-700" />,
      bg: "bg-yellow-100",
      border: "border-cyan-500",
      text: "Comprehensive training for merchants and agents, backed by our AI-powered chatbot support system.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Choose Gatekeeper?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between merchants and the complex world of merchant services with
            accuracy, honesty, and personalized support.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border ${card.border} rounded-lg p-8 hover:shadow-lg transition-shadow`}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 ${card.bg} rounded-full flex items-center justify-center`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed mb-4">{card.text}</p>
              {card.button && (
                <div className="text-center">
                  <button className="text-cyan-600 hover:text-cyan-700 font-medium inline-flex items-center">
                    Learn more →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-8 right-8">
        <button className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors">
          <MessageCircle className="w-7 h-7 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default Choose;
