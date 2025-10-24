import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineCreditCard, HiOutlineBanknotes, HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi2";
import Swal from "sweetalert2";
import axios from "axios";

const PaymentAuthorizationForm = () => {
  // Massage should be this exact format as required
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    chargeType: "oneTime",
    nameOnAccount: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    cardHolder: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    amount: "",
    date: "",
    description: "",
    billingAddress: "",
    billingPhone: "",
    billingCity: "",
    billingZip: "",
    billingEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const frm = e.target;

  // Collect all form data from inputs
  const formData = {
    fullName: frm.fullName?.value || "",
    companyName: frm.companyName?.value || "",
    chargeType: frm.chargeType?.value || "oneTime",
    nameOnAccount: frm.nameOnAccount?.value || "",
    bankName: frm.bankName?.value || "",
    accountNumber: frm.accountNumber?.value || "",
    routingNumber: frm.routingNumber?.value || "",
    cardHolder: frm.cardHolder?.value || "",
    cardNumber: frm.cardNumber?.value || "",
    expDate: frm.expDate?.value || "",
    cvv: frm.cvv?.value || "",
    amount: frm.amount?.value || "",
    date: frm.date?.value || "",
    description: frm.description?.value || "",
    billingAddress: frm.billingAddress?.value || "",
    billingPhone: frm.billingPhone?.value || "",
    billingCity: frm.billingCity?.value || "",
    billingEmail: frm.billingEmail?.value || "",
  };

  // Formatted plain text message
  const message = `
📢 NEW PAYMENT AUTHORIZATION RECEIVED

👤 AUTHORIZATION DETAILS
Full Name: ${formData.fullName}
Company Name: ${formData.companyName}
Charge Type: ${formData.chargeType}

🏦 BANK DETAILS (ACH)
Name on Account: ${formData.nameOnAccount}
Bank Name: ${formData.bankName}
Account Number: ${formData.accountNumber}
Routing Number: ${formData.routingNumber}

💳 CREDIT CARD DETAILS
Cardholder Name: ${formData.cardHolder}
Card Number: ${formData.cardNumber}
Expiration Date: ${formData.expDate}
CVV: ${formData.cvv}

💰 PAYMENT DETAILS
Amount: $${formData.amount}
Date: ${formData.date}
Description: ${formData.description}

🏠 BILLING INFORMATION
Billing Address: ${formData.billingAddress}
Phone: ${formData.billingPhone}
City/ZIP: ${formData.billingCity}
Email: ${formData.billingEmail}

📅 Submitted On: ${new Date().toLocaleString()}

──────────────────────────────
📨 This email was sent via PTECHPOS Payment Authorization Form.
`;

  // Web3Forms payload remains same
  const formDataToSend = {
    access_key: "de8473ac-47a9-419a-917a-1021807f0439",
    from_name: "PTECHPOS Payment Authorization",
    subject: `New Payment Authorization - ${formData.fullName}`,
    message,
    replyto: formData.billingEmail,
    emails: `rezoanbids@gmail.com, ${formData.billingEmail}`,
  };

  try {
    const res = await axios.post("https://api.web3forms.com/submit", formDataToSend, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.data.success) {
      Swal.fire({
        title: "Authorization Submitted ",
        text: "Your payment authorization has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
      // frm.reset();
    } else {
      Swal.fire({
        title: "Submission Failed ",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Network Error",
      text: "Unable to send your authorization. Please check your connection.",
      icon: "error",
      confirmButtonColor: "#d33",
    });
  }
};

  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6 uppercase">
        Credit Card / ACH Payment Authorization
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Authorization Section */}
        <section className="bg-gray-50 p-5 rounded-xl border">
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineUserCircle className="text-pink-500 text-2xl" />
            <h2 className="text-lg font-semibold text-gray-800">
              Authorization Details
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="fullName" placeholder="Full Name" onChange={handleChange} className="input" />
            <input name="companyName" placeholder="Company Name" onChange={handleChange} className="input" />
          </div>
        </section>

        {/* Payment Method Section */}
        <section className="bg-gray-50 p-5 rounded-xl border">
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineBanknotes className="text-green-500 text-2xl" />
            <h2 className="text-lg font-semibold text-gray-800">
              Payment Method
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Bank Info */}
            <div className="flex-1 border p-4 rounded-lg bg-white shadow-sm">
              <h3 className="flex items-center gap-2 font-semibold text-gray-700 mb-3">
                <HiOutlineBanknotes className="text-green-500" /> Bank (ACH)
              </h3>
              <div className="grid gap-3">
                <input name="nameOnAccount" placeholder="Name on Account" onChange={handleChange} className="input" />
                <input name="bankName" placeholder="Bank Name" onChange={handleChange} className="input" />
                <input name="accountNumber" placeholder="Account Number" onChange={handleChange} className="input" />
                <input name="routingNumber" placeholder="Routing Number" onChange={handleChange} className="input" />
              </div>
            </div>

            {/* Credit Card Info */}
            <div className="flex-1 border p-4 rounded-lg bg-white shadow-sm">
              <h3 className="flex items-center gap-2 font-semibold text-gray-700 mb-3">
                <HiOutlineCreditCard className="text-pink-500" /> Credit Card
              </h3>
              <div className="grid gap-3">
                <input name="cardHolder" placeholder="Cardholder Name" onChange={handleChange} className="input" />
                <input name="cardNumber" placeholder="Card Number" onChange={handleChange} className="input" />
                <div className="grid grid-cols-2 gap-3">
                  <input name="expDate" type="month" onChange={handleChange} className="input" />
                  <input name="cvv" placeholder="CVV" onChange={handleChange} className="input" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Details */}
        <section className="bg-gray-50 p-5 rounded-xl border">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input name="amount" placeholder="Amount ($)" onChange={handleChange} className="input" />
            <input name="date" type="date" onChange={handleChange} className="input" />
            <input name="description" placeholder="Description" onChange={handleChange} className="input" />
          </div>
        </section>

        {/* Billing Info */}
        <section className="bg-gray-50 p-5 rounded-xl border">
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineHome className="text-blue-500 text-2xl" />
            <h2 className="text-lg font-semibold text-gray-800">
              Billing Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="billingAddress" placeholder="Billing Address" onChange={handleChange} className="input" />
            <input name="billingPhone" placeholder="Phone" onChange={handleChange} className="input" />
            <input name="billingCity" placeholder="City, State, ZIP" onChange={handleChange} className="input" />
            <input name="billingEmail" type="email" placeholder="Email" onChange={handleChange} className="input" />
          </div>
        </section>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-200"
          >
            Submit Authorization
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default PaymentAuthorizationForm;

