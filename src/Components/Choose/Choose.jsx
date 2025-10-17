import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Handshake,
  GraduationCap,
  ClipboardCheck,
  Zap,
  MessageCircle,
} from "lucide-react";

const Choose = () => {
  const cards = [
    {
      title: "Accuracy",
      icon: ShieldCheck,
      iconColor: "text-red-600",
      bg: "bg-red-100",
      border: "border-gray-200",
      text: "Every detail matters. From setup to settlements, we ensure precision in every transaction and account management.",
      button: true,
    },
    {
      title: "Personal Support",
      icon: Users,
      iconColor: "text-cyan-600",
      bg: "bg-cyan-100",
      border: "border-gray-200",
      text: "Direct access to our team. No call centers, no runaround — just real people who care.",
      button: true,
    },
    {
      title: "Honesty",
      icon: Handshake,
      iconColor: "text-green-600",
      bg: "bg-green-100",
      border: "border-gray-200",
      text: "Transparent pricing with no hidden fees. What you see is what you get — always.",
      button: true,
    },
    {
      title: "Training",
      icon: GraduationCap,
      iconColor: "text-indigo-600",
      bg: "bg-indigo-100",
      border: "border-gray-200",
      text: "Comprehensive training for merchants and agents, backed by our AI-powered chatbot support system.",
      button: true,
    },
    {
      title: "Accountability",
      icon: ClipboardCheck,
      iconColor: "text-orange-600",
      bg: "bg-orange-100",
      border: "border-gray-200",
      text: "We stand behind every account. Personal attention from funding to settlements, every single day.",
      button: true,
    },
    {
      title: "Fast Setup",
      icon: Zap,
      iconColor: "text-yellow-600",
      bg: "bg-yellow-100",
      button: true,
      border: "border-cyan-500",
      text: "Quick onboarding and activation so you can start accepting payments faster than ever.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
          >
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Gatekeeper</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/40 -z-0"
                style={{ originX: 0 }}
              />
            </span>
            ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We bridge the gap between merchants and the complex world of merchant services with
            accuracy, honesty, and personalized support.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`border ${card.border} hover:border-[#003092] duration-300 rounded-lg p-8 hover:shadow-2xl transition-all bg-white relative overflow-hidden group`}
              >
                {/* Card hover gradient effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"
                />

                <div className="flex justify-center mb-6 relative z-10">
                  <motion.div 
                    variants={iconVariants}
                    whileHover="hover"
                    className={`w-16 h-16 ${card.bg} rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
                  >
                    <Icon className={`w-8 h-8 ${card.iconColor}`} />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#003092] mb-4 text-center relative z-10">
                  {card.title}
                </h3>
                
                <p className="text-gray-500/90 text-center leading-relaxed mb-4 relative z-10">
                  {card.text}
                </p>
                
                {card.button && (
                  <div className="text-left relative z-10">
                    <motion.button 
                      variants={buttonVariants}
                      whileHover="hover"
                      className="text-[#20aaeb] text-lg hover:text-cyan-700 font-medium inline-flex items-center group"
                    >
                      Learn more 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="ml-1"
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Chat Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 1.5, 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 10px 25px rgba(250, 204, 21, 0.3)",
              "0 10px 35px rgba(250, 204, 21, 0.5)",
              "0 10px 25px rgba(250, 204, 21, 0.3)",
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors relative"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <MessageCircle className="w-7 h-7 text-gray-800" />
          </motion.div>
          
          {/* Notification pulse */}
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute inset-0 bg-yellow-400 rounded-full"
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Choose;