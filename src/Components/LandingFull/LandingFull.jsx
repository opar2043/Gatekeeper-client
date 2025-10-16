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
    {
      icon: <FaTools size={24} />,
      title: "Pre-Programming",
      desc: "Ready to use out of the box",
    },
    {
      icon: <FaCogs size={24} />,
      title: "Auto-Close",
      desc: "Automated processes configured",
    },
    {
      icon: <FaChalkboardTeacher size={24} />,
      title: "Complete Training",
      desc: "Remote or on-site instruction",
    },
    {
      icon: <FaLifeRing size={24} />,
      title: "Ongoing Support",
      desc: "Updates and assistance anytime",
    },
  ];

  const ctaItems = [
    {
      icon: <FaBan size={24} />,
      title: "Zero Hidden Fees",
      desc: "Complete transparency in all pricing and statements",
    },
    {
      icon: <FaMoneyBillWave size={24} />,
      title: "Next-Day Funding",
      desc: "Fast, reliable deposits to keep your cash flowing",
    },
    {
      icon: <FaSign size={24} />,
      title: "Signage Included",
      desc: "Professional materials to inform your customers",
    },
    {
      icon: <FaCheck size={24} />,
      title: "Visa Compliant",
      desc: "Fully compliant with all card network regulations",
    },
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
      {/* Hero Title */}
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
          Industry-leading equipment with complete setup, training, and ongoing
          support included.
        </motion.p>
      </section>

      {/* POS Cards */}
      <section className="max-w-6xl mx-auto px-6 mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posCards.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all"
          >
            <div className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white text-center py-6 px-5">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white/10 rounded-md flex items-center justify-center mb-3">
                  {c.icon}
                </div>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-sm opacity-90">{c.subtitle}</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="mt-2 space-y-3">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600">✔</span>
                    <span className="text-sm text-slate-600">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/*  Premium Support Section (with glowing buttons) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 mt-16"
      >
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-10">
            Every System Includes Premium Support
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-10">
            {supportItems.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center max-w-[150px]"
              >
                <div className="text-3xl mb-3 text-blue-700">{s.icon}</div>
                <div className="text-sm font-semibold">{s.title}</div>
                <div className="text-xs text-slate-500 mt-1">{s.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Buttons with glow */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveBtn("order")}
              className={`relative px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeBtn === "order"
                  ? "text-white bg-blue-700 shadow-[0_0_15px_3px_rgba(37,99,235,0.6)]"
                  : "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
            >
              {activeBtn === "order" && (
                <span className="absolute inset-0 rounded-full border-2 border-blue-400 blur-sm animate-pulse"></span>
              )}
              <span className="relative z-10">Order Equipment</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveBtn("quote")}
              className={`relative px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeBtn === "quote"
                  ? "text-white bg-blue-700 shadow-[0_0_15px_3px_rgba(37,99,235,0.6)]"
                  : "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
            >
              {activeBtn === "quote" && (
                <span className="absolute inset-0 rounded-full border-2 border-blue-400 blur-sm animate-pulse"></span>
              )}
              <span className="relative z-10">Get a Quote</span>
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Blue CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight">
              Stop Paying Fees — Keep 100% of Your Sales
            </h2>
            <p className="mt-4 text-blue-100 max-w-xl">
              Our Visa-compliant Dual Pricing and Cash Discount programs
              eliminate your credit card processing fees completely. No hidden
              costs, no surprises — just transparent, honest pricing that puts
              money back in your pocket.
            </p>

            <div className="mt-6 flex gap-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-900 px-5 py-2 rounded-full font-semibold shadow"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="border border-white/30 px-5 py-2 rounded-full"
              >
                Learn More
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ctaItems.map((i, idx) => (
              <motion.div
                key={i.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={idx}
                viewport={{ once: true }}
                className="bg-blue-800/60 p-5 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-blue-300">{i.icon}</div>
                  <div>
                    <div className="font-semibold">{i.title}</div>
                    <div className="text-sm text-blue-200">{i.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
