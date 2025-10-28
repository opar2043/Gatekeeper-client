import React, { useState } from "react";
import CompanyForm from "./CompanyForm";
import PaymentAuthorizationForm from "./PaymentAuthorizationForm";
import RecurringChargeForm from "./RecurringChargeForm";
import { motion, AnimatePresence } from "framer-motion";
const AllForms = () => {
  const [activeTab, setActiveTab] = useState("paymentForm");

    const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const renderForm = () => {
    switch (activeTab) {
      case "companyForm":
        return <CompanyForm />;
      case "paymentForm":
        return <PaymentAuthorizationForm />;
      case "recurringForm":
        return <RecurringChargeForm />;
      default:
        return null;
    }
  };

  return (
    <div id="forms" className="max-w-7xl mx-auto bg-white rounded-2xl   mt-10 p-4">
        <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
        >
          Get Started Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Fill out the form below and we'll get back to you within 24 hours.
        </motion.p>
      </motion.div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 pb-3">
        <button
          onClick={() => setActiveTab("companyForm")}
          className={`px-6 sm:px-8 py-2.5 sm:py-3 border rounded-full font-medium text-sm sm:text-base transition-all ${
            activeTab === "companyForm"
              ? "bg-[#2563EB] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Company Form
        </button>
        <button
          onClick={() => setActiveTab("paymentForm")}
          className={`px-6 sm:px-8 py-2.5 sm:py-3 border rounded-full font-medium text-sm sm:text-base transition-all ${
            activeTab === "paymentForm"
              ? "bg-[#2563EB] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Payment Authorization
        </button>
        <button
          onClick={() => setActiveTab("recurringForm")}
          className={`px-6 sm:px-8 py-2.5 sm:py-3 border rounded-full font-medium text-sm sm:text-base transition-all ${
            activeTab === "recurringForm"
              ? "bg-[#2563EB] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Recurring Charge
        </button>
      </div>

      {/* Form Display */}
      <div className="mt-8">{renderForm()}</div>
    </div>
  );
};

export default AllForms;
