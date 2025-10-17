import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaGraduationCap,
  FaUserFriends,
  FaMoneyBillWave,
  FaTag,
  FaBoxes,
  FaBullseye,
} from "react-icons/fa";

export default function JoinGatekeeper() {
  const leftItems = [
    {
      icon: <FaRobot className="text-[#0057A6]" size={22} />,
      title: "AI Training Chatbot",
      desc: "24/7 access to “Ask the Gatekeeper” for instant answers, troubleshooting, and sales guidance.",
    },
    {
      icon: <FaGraduationCap className="text-[#0057A6]" size={22} />,
      title: "Comprehensive Training",
      desc: "Step-by-step equipment guides, sales scripts, and complete onboarding programs.",
    },
    {
      icon: <FaUserFriends className="text-[#0057A6]" size={22} />,
      title: "Personal Mentorship",
      desc: "One-on-one support from experienced professionals and a collaborative team environment.",
    },
    {
      icon: <FaMoneyBillWave className="text-[#0057A6]" size={22} />,
      title: "Residual Income",
      desc: "Build long-term wealth with ongoing commissions and recurring revenue streams.",
    },
    {
      icon: <FaTag className="text-[#0057A6]" size={22} />,
      title: "White-Label Options",
      desc: "Build your own brand while leveraging our infrastructure and support systems.",
    },
    {
      icon: <FaBoxes className="text-[#0057A6]" size={22} />,
      title: "Full Product Training",
      desc: "Master RetailzPOS, P-TECH, Clover, Valor, PAX, FD150, and all merchant services.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* ===== HEADER Section ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44] tracking-tight">
            Join the Gatekeeper Network
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-3 leading-relaxed">
            Build a rewarding career as a payment solutions agent with
            comprehensive training, AI-powered support, and unlimited earning
            potential.
          </p>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* ===== LEFT COLUMN ===== */}
          <div className="space-y-4">
            {leftItems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-4 bg-[#F9FAFB] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#0A1F44] text-base md:text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#F8FAFC] rounded-2xl shadow-lg p-10 relative top-6"
          >
            <h3 className="text-xl md:text-2xl font-extrabold text-[#0A1F44] text-center">
              Start Your Journey
            </h3>
            <p className="text-gray-500 text-sm md:text-base text-center mt-3 leading-relaxed max-w-sm mx-auto">
              Join a network of successful agents who are changing the merchant
              services industry. No experience required — we’ll train you from
              day one.
            </p>

            {/* Inner White Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-10 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <FaBullseye className="text-indigo-600" size={18} />
                <h4 className="font-semibold text-[#0A1F44] text-base md:text-lg">
                  What You’ll Learn
                </h4>
              </div>
              <ul className="text-gray-600 text-sm md:text-base space-y-2 leading-relaxed">
                <li>✓ Equipment installation & programming</li>
                <li>✓ Merchant account setup & funding</li>
                <li>✓ Dual pricing & cash discount programs</li>
                <li>✓ Sales techniques & customer service</li>
                <li>✓ Ongoing support & troubleshooting</li>
              </ul>
            </div>

            {/* Button */}
            <div className="mt-10 flex justify-center">
              <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#0057A6] to-[#0056a6d8] hover:from-[#015fb8] hover:to-[#1d60dd] text-white font-semibold px-7 py-3 rounded-full shadow-md transition-all duration-300"
              >
                Apply to Join
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
