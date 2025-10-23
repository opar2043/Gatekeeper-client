import {
  FaCheckCircle,
  FaHeadset,
  FaDollarSign,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#0057A6] via-[#0066BB] to-[#003087] mt-28 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-between px-4 py-12 md:py-20 relative z-10">
        {/* Left Side - Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
          >
            We Are the{" "}
            <span className="relative">
              <span className="relative z-10">Gatekeeper</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/30 -z-0"
                style={{ originX: 0 }}
              />
            </span>{" "}
            Between Merchants and Merchant Services
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl leading-relaxed mb-8 text-white/90"
          >
            Protecting merchants, simplifying payments, and training agents to
            succeed — the right way. Experience personalized support with every
            account handled from setup to success.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0057A6] px-8 py-4 rounded-full font-semibold text-md transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <a href="#agents">Get Started →</a>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-md transition-all duration-300 hover:bg-white hover:text-[#0057A6]"
            >
              <a href="#agents">Join the Team</a>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            x: { duration: 0.8, delay: 0.2 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="bg-white rounded-3xl w-full md:w-4/5 shadow-2xl p-6 md:p-10 relative overflow-hidden"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#0057A6]/10 to-transparent rounded-full blur-2xl" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl font-bold text-[#0057A6] mb-3 relative z-10"
          >
            Trusted Payment Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-600/80 text-md mb-10 leading-relaxed font-semibold relative z-10"
          >
            Industry-leading POS systems, terminals, and merchant services with
            unmatched support.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-6 relative z-10"
          >
            {/* Stat 1 */}
            <motion.div
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#F5F7FA] to-[#E8EDF3] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold text-[#0057A6] mb-3"
              >
                100%
              </motion.div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <span className="font-medium text-sm text-gray-500">
                  Personalized Service
                </span>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#F5F7FA] to-[#E8EDF3] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold text-[#0057A6] mb-3"
              >
                24/7
              </motion.div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <span className="font-medium text-md text-gray-500">
                  Support Available
                </span>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#F5F7FA] to-[#E8EDF3] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold text-[#0057A6] mb-3"
              >
                0%
              </motion.div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <span className="font-medium text-md text-gray-500">
                  Processing Fees*
                </span>
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#F5F7FA] to-[#E8EDF3] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                className="text-3xl font-bold text-[#0057A6] mb-3"
              >
                Next Day
              </motion.div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <span className="font-medium text-md text-gray-500">
                  Funding
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Optional Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-xs text-gray-500 mt-6 text-center relative z-10"
          >
            *Terms and conditions apply
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
