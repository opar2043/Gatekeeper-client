import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";
const AgentForm = () => {
  const [activeTab, setActiveTab] = useState("merchant");
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const tabVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: activeTab === "merchant" ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: activeTab === "merchant" ? 50 : -50,
      transition: {
        duration: 0.3
      }
    }
  };

//  async function handleSubmit(e) {
//     e.preventDefault();
//     const frm = e.target;

//     // Conditional logic
//     if (activeTab === "merchant") {
//       const business = frm.business.value;
//       const diffrent_business = frm.diffrent_business.value;
//       const city = frm.city.value;
//       const mobile = frm.mobile.value;
//       const gmail = frm.gmail.value;
//       const taxId = frm.taxId.value;

//       const merchantData = {
//         business,
//         diffrent_business,
//         city,
//         mobile,
//         gmail,
//         taxId,
//         type: "merchant",
//       };

//       console.log("Merchant Data:", merchantData);
//       // 👉 You can now send to Google Sheets API here using fetch()
//     } 
    
//     else if (activeTab === "agent") {
//       const fristname = frm.fristname.value;
//       const lastname = frm.lastname.value;
//       const email = frm.email.value;
//       const phone = frm.phone.value;
//       const city = frm.city.value;
//       const state = frm.state.value;
//       const description = frm.description.value;
//       const exprience = frm.exprience.value;

//       const agentData = {
//         fristname,
//         lastname,
//         email,
//         phone,
//         city,
//         state,
//         description,
//         exprience,
//         type: "agent",
//       };

//       console.log("Agent Data:", agentData);
      
//       // 👉 Send to Google Sheets API here
//     }



//     const res = await fetch('https://v1.nocodeapi.com/opar2043/google_sheets/reTOfqBOpGydPNBD?tabId=Sheet1',{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({
//         data:[
//           activeTab === "merchant" ? [
//             frm.business.value,
//             frm.diffrent_business.value, ]   
//     })


//     // frm.reset(); // optional - uncomment to clear form after submit
//   }


async function handleSubmit(e) {
  e.preventDefault();
  const frm = e.target;

  // Merchant
  if (activeTab === "merchant") {
    const business = frm.business.value;
    const diffrent_business = frm.diffrent_business.value;
    const city = frm.city.value;
    const mobile = frm.mobile.value;
    const gmail = frm.gmail.value;
    const taxId = frm.taxId.value;

    const merchantData = {
      business,
      diffrent_business,
      city,
      mobile,
      gmail,
      taxId,
      type: "merchant",
    };
    console.log("Merchant Data:", merchantData);

    // ✅ Send to Google Sheet via NoCodeAPI
    const res = await fetch(
      "https://v1.nocodeapi.com/opar2043/google_sheets/reTOfqBOpGydPNBD?tabId=Sheet1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            [
              business,
              diffrent_business,
              city,
              mobile,
              gmail,
              taxId,
              "Merchant",
            ],
          ],
        }),
      }
    );

    const json = await res.json();
    console.log("✅ Merchant submitted:", json);
    // alert("Merchant data added successfully!");
  }

  // Agent
  else if (activeTab === "agent") {
    const fristname = frm.fristname.value;
    const lastname = frm.lastname.value;
    const email = frm.email.value;
    const phone = frm.phone.value;
    const city = frm.city.value;
    const state = frm.state.value;
    const description = frm.description.value;
    const exprience = frm.exprience.value;

    const agentData = {
      fristname,
      lastname,
      email,
      phone,
      city,
      state,
      description,
      exprience,
      type: "agent",
    };
    console.log("Agent Data:", agentData);

    // ✅ Send to Google Sheet via NoCodeAPI
    const res = await fetch(
      "https://v1.nocodeapi.com/opar2043/google_sheets/reTOfqBOpGydPNBD?tabId=Sheet1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            [
              fristname,
              lastname,
              email,
              phone,
              city,
              state,
              description,
              exprience,
              "Agent",
            ],
          ],
        }),
      }
    );

    const json = await res.json();
    console.log("✅ Agent submitted:", json);
    alert("Agent data added successfully!");
  }

  frm.reset(); 
}


  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
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

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* Tabs */}
        <motion.div
          variants={tabVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center items-center sm:justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("merchant")}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all ${
              activeTab === "merchant"
                ? "bg-[#0070BA] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Merchant Application
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("agent")}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 border rounded-full font-medium text-sm sm:text-base transition-all ${
              activeTab === "agent"
                ? "bg-[#0070BA] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Agent Application
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* ================== Merchant Form ================== */}
          {activeTab === "merchant" && (
            <motion.form
              onSubmit={handleSubmit}
              key="merchant"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white w-full md:w-3/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-8 border shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Merchant Application Form
              </h2>

              {/* Business Name and DBA Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Enter your business name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    DBA (Doing Business As)
                  </label>
                  <input
                    type="text"
                    name="diffrent_business"
                    placeholder="If different from business name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
              </div>

              {/* Business Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <label className="block font-semibold text-gray-800 mb-2">
                  Business Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Street address, city, state, zip"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </motion.div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="gmail"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
              </div>

              {/* Tax ID */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mb-6"
              >
                <label className="block font-semibold text-gray-800 mb-2">
                  Tax ID (EIN/SSN)
                </label>
                <input
                  type="text"
                  name="taxId"
                  placeholder="12-3456789"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </motion.div>

              {/* Upload Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <label className="block font-semibold text-gray-800 mb-2">
                  Upload SS-4 Form (if available)
                </label>
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: "#60a5fa" }}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <HiOutlineDocumentText className="mx-auto text-4xl text-gray-400 mb-2" />
                  <p className="text-gray-600 font-medium mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-400 text-sm">
                    PDF, DOC, DOCX (max 10MB)
                  </p>
                </motion.div>
              </motion.div>

              {/* License + Check */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {["Business License", "Voided Check"].map((label, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + idx * 0.05 }}
                  >
                    <label className="block font-semibold text-gray-800 mb-2">
                      {label}
                    </label>
                    <motion.div
                      whileHover={{ scale: 1.02, borderColor: "#60a5fa" }}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer"
                    >
                      <HiOutlineDocumentText className="mx-auto text-3xl text-gray-400 mb-2" />
                      <p className="text-gray-600 font-medium text-sm">
                        Upload {label}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Submit */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md"
              >
                Submit Application
              </motion.button>
            </motion.form>
          )}

          {/* ================== Agent Form ================== */}
          {activeTab === "agent" && (
            <motion.form
              key="agent"
              onSubmit={handleSubmit}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white w-full md:w-3/5 shadow-lg border rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Agent Application Form
              </h2>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fristname"
                    placeholder="Enter your first name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Enter your last name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
              </div>

              {/* City + State */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label className="block font-semibold text-gray-800 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    placeholder="Enter your state"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </motion.div>
              </div>

              {/* Why Join */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <label className="block font-semibold text-gray-800 mb-2">
                  Why do you want to join Gatekeeper?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="description"
                  placeholder="Share your motivation..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mb-6"
              >
                <label className="block font-semibold text-gray-800 mb-2">
                  Previous Experience (if any)
                </label>
                <textarea
                  rows={3}
                  name="exprience"
                  placeholder="Describe your previous experience (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </motion.div>

              {/* Resume Upload */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <label className="block font-semibold text-gray-800 mb-2">
                  Resume (Optional)
                </label>
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: "#60a5fa" }}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <HiOutlineDocumentText className="mx-auto text-4xl text-gray-400 mb-2" />
                  <p className="text-gray-600 font-medium mb-1">
                    📄 Click to upload resume
                  </p>
                  <p className="text-gray-400 text-sm">
                    PDF, DOC, DOCX (max 10MB)
                  </p>
                </motion.div>
              </motion.div>

              {/* Submit */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0070BA] text-white font-semibold py-3 rounded-full hover:bg-[#0438a8] active:bg-blue-800 transition-colors shadow-md duration-200"
              >
                Submit Application
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AgentForm;