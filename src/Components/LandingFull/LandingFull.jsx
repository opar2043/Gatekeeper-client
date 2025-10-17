import React, { useState } from "react";
import {
  FaCashRegister,
  FaDesktop,
  FaStore,
  FaLightbulb,
  FaReceipt,
  FaBuilding,
  FaTools,
  FaCogs,
  FaChalkboardTeacher,
  FaLifeRing,
  FaBan,
  FaMoneyBillWave,
  FaSign,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function LandingFull() {
  const [activeBtn, setActiveBtn] = useState("order");

  const posCards = [
    {
      title: "RetailzPOS",
      subtitle: "Full-Featured Retail Solution",
      description:
        "Powerful POS system designed for retail businesses with advanced inventory and reporting capabilities.",
      bullets: [
        "Inventory tracking & management",
        "Dual pricing capability",
        "Scan data & EBT options",
        "Remote back-office access",
        "Custom setup & training",
      ],
      icon: <FaDesktop size={36} />,
    },
    {
      title: "P-TECH POS",
      subtitle: "Simple & Dependable",
      description:
        "Easy-to-use system perfect for small to medium businesses transitioning to modern POS technology.",
      bullets: [
        "Intuitive interface",
        "Quick employee training",
        "Reliable performance",
        "Cost-effective solution",
        "Full support included",
      ],
      icon: <FaCashRegister size={36} />,
    },
    {
      title: "Clover",
      subtitle: "Smart & Modern",
      description:
        "Cloud-based terminals for restaurants, salons, and retail with powerful app integrations.",
      bullets: [
        "Cloud-based platform",
        "App marketplace access",
        "Inventory & staff management",
        "Customer loyalty programs",
        "Real-time reporting",
      ],
      icon: <FaStore size={36} />,
    },
    {
      title: "Valor",
      subtitle: "Customer-Friendly Interface",
      description:
        "Modern terminals featuring dual pricing display and simple navigation for seamless transactions.",
      bullets: [
        "Dual pricing display",
        "Simple menu navigation",
        "Fast transaction speed",
        "Secure processing",
        "Easy for customers",
      ],
      icon: <FaLightbulb size={36} />,
    },
    {
      title: "PAX",
      subtitle: "Industry-Trusted",
      description:
        "Durable and secure devices trusted by businesses of all sizes for reliable payment processing.",
      bullets: [
        "Lightning-fast processing",
        "POS system compatible",
        "Enterprise-grade security",
        "Multiple connectivity options",
        "Proven reliability",
      ],
      icon: <FaReceipt size={36} />,
    },
    {
      title: "FD150",
      subtitle: "Classic & Reliable",
      description:
        "Traditional wired terminal offering plug-and-play simplicity with consistent performance.",
      bullets: [
        "Plug-and-play setup",
        "Rock-solid reliability",
        "Cost-effective option",
        "No connectivity issues",
        "Time-tested technology",
      ],
      icon: <FaBuilding size={36} />,
    },
  ];

  const supportItems = [
    { icon: <FaTools size={24} />, title: "Pre-Programming", desc: "Ready to use out of the box" },
    { icon: <FaCogs size={24} />, title: "Auto-Close", desc: "Automated processes configured" },
    { icon: <FaChalkboardTeacher size={24} />, title: "Complete Training", desc: "Remote or on-site instruction" },
    { icon: <FaLifeRing size={24} />, title: "Ongoing Support", desc: "Updates and assistance anytime" },
  ];

  const ctaItems = [
    { icon: <FaBan size={24} />, title: "Zero Hidden Fees", desc: "Complete transparency in all pricing and statements" },
    { icon: <FaMoneyBillWave size={24} />, title: "Next-Day Funding", desc: "Fast, reliable deposits to keep your cash flowing" },
    { icon: <FaSign size={24} />, title: "Signage Included", desc: "Professional materials to inform your customers" },
    { icon: <FaCheck size={24} />, title: "Visa Compliant", desc: "Fully compliant with all card network regulations" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* === Hero Section === */}
      <section className="max-w-6xl mx-auto px-6 text-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800"
        >
          Professional POS Systems & <br /> Terminals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-sm md:text-base text-slate-500"
        >
          Industry-leading equipment with complete setup, training, and ongoing support included.
        </motion.p>
      </section>

      {/* === POS Cards === */}
      <section className="max-w-6xl mx-auto px-6 mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posCards.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ y: -6 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300"
          >
            <div className="bg-gradient-to-br from-[#0057A6] to-[#2338c2] text-white text-center py-8 px-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white/10 rounded-md flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="font-bold text-lg tracking-tight">{c.title}</h3>
                <p className="text-sm text-blue-100 mt-1">{c.subtitle}</p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-slate-500 leading-relaxed">{c.description}</p>
              <ul className="mt-4 bg-white rounded-b-lg">
                {c.bullets.map((b, idx) => (
                  <li
                    key={b}
                    className={`flex items-start gap-3 py-3 ${idx > 0 ? "border-t border-slate-100" : ""}`}
                  >
                    <span className="flex-shrink-0 mt-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                    </span>
                    <span className="text-sm text-slate-600">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      
    </div>
  );
}
