import React from "react";
import { motion } from "framer-motion";

export default function GetStartedSection() {
  return (
    <section className="bg-[#0057A6] text-white py-28">
      <div className="max-w-5xl mx-auto text-center px-6 font-[Inter]">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight"
        >
          Ready to Get Started?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-blue-100 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Whether you're a merchant looking for better payment solutions or an
          agent ready to build your career, we're here to help you succeed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center gap-5 mt-12 flex-wrap"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59,130,246,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => alert("Merchant application clicked!")}
            className="bg-[#003aa6] hover:bg-blue-800 text-white font-semibold px-10 py-3.5 rounded-full transition-all duration-300"
          >
            Apply as Merchant
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => alert("Agent join clicked!")}
            className="border border-blue-400 text-blue-100 font-semibold px-10 py-3.5 rounded-full transition-all duration-300"
          >
            Join as Agent
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
