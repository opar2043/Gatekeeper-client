import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
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

  const contactItems = [
    {
      icon: MapPin,
      iconColor: "text-blue-600",
      title: "Location",
      content: "New Orleans, Louisiana",
      isLink: false
    },
    {
      icon: Phone,
      iconColor: "text-red-600",
      title: "Phone",
      content: "504-577-0377",
      isLink: false
    },
    {
      icon: Mail,
      iconColor: "text-gray-600",
      title: "Email",
      content: "info@gatekeeperprocessing.com",
      isLink: true,
      href: "mailto:info@gatekeeperprocessing.com"
    },
    {
      icon: Globe,
      iconColor: "text-orange-600",
      title: "Website",
      content: "www.gatekeeperprocessing.com",
      isLink: true,
      href: "https://www.gatekeeperprocessing.com"
    }
  ];

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#FFFFFF] shadow-xl rounded-2xl p-6 sm:p-8 w-11/12 mb-12 mx-auto text-center lg:p-16"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl font-bold text-gray-800 mb-6 md:mb-12"
      >
        Contact Information
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 text-base"
      >
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center shadow p-6 rounded-lg hover:shadow-2xl transition-all bg-gradient-to-br from-white to-gray-50 relative overflow-hidden group"
            >
              {/* Hover gradient effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"
              />

              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="relative z-10"
              >
                <Icon className={`${item.iconColor} w-6 h-6 mb-2`} />
              </motion.div>

              <p className="font-bold text-slate-900 relative z-10">{item.title}</p>

              {item.isLink ? (
                <motion.a
                  href={item.href}
                  target={item.title === "Website" ? "_blank" : undefined}
                  rel={item.title === "Website" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-600 hover:underline relative z-10"
                >
                  {item.content}
                </motion.a>
              ) : (
                <p className="text-gray-600 relative z-10">{item.content}</p>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;