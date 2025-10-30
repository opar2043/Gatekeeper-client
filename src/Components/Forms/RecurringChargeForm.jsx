import axios from "axios";
import { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const RecurringChargeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    amount: "",
    date: "",
    paymentFor: "",
    cardType: "",
    cardholderName: "",
    accountNumber: "",
    expDate: "",
    cvv: "",
    signature: "",
    printName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const axiosSecure = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const frm = e.target;

    // Collect all form data
    const formData = {
      fullName: frm.fullName?.value || "",
      companyName: frm.companyName?.value || "",
      amount: frm.amount?.value || "",
      date: frm.date?.value || "",
      paymentFor: frm.paymentFor?.value || "",
      cardType: frm.cardType?.value || "",
      cardholderName: frm.cardholderName?.value || "",
      accountNumber: frm.accountNumber?.value || "",
      expDate: frm.expDate?.value || "",
      cvv: frm.cvv?.value || "",
      signature: frm.signature?.value || "",
      signatureDate: frm.signatureDate?.value || "",
      printName: frm.printName?.value || "",
      email: 'rijoanrashidopar@gmail.com',
      type: "recuring_form"
    };

    // Plain text email message
    const message = `
📢 NEW RECURRING PAYMENT AUTHORIZATION

👤 AUTHORIZATION DETAILS
Full Name: ${formData.fullName}
Company Name: ${formData.companyName}

💰 PAYMENT DETAILS
Amount: $${formData.amount}
Charge Date: ${formData.date}
Payment For: ${formData.paymentFor}

💳 CREDIT CARD / BANK INFORMATION
Card Type: ${formData.cardType}
Cardholder Name: ${formData.cardholderName}
Account Number: ${formData.accountNumber}
Expiration Date: ${formData.expDate}
CVV: ${formData.cvv}

✍️ SIGNATURE
Authorized Signature: ${formData.signature}
Date: ${formData.signatureDate}
Printed Name: ${formData.printName}

📅 Submitted On: ${new Date().toLocaleString()}

──────────────────────────────
📨 This email was sent via RETAILZ POS .
`;

    // Web3Forms payload
    const formDataToSend = {
      access_key: "de8473ac-47a9-419a-917a-1021807f0439",
      from_name: "RETAILZ POS Recurring Payment",
      subject: `New Recurring Payment Authorization - ${formData.fullName}`,
      message,
      replyto: formData.fullName,
      emails: ["rezoanbids@gmail.com"],
    };

    try {
      const res = await axios.post(
        "https://api.web3forms.com/submit",
        formDataToSend,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.success) {
        axiosSecure.post("/authorization" , formData);
        Swal.fire({
          title: "Authorization Submitted 🎉",
          text: "Your recurring payment authorization has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        frm.reset();
      } else {
        Swal.fire({
          title: "Submission Failed 😕",
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
    <div className="min-h-screen py-4 sm:py-8 px-3 md:px-6">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          opacity: 0;
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          opacity: 0;
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .section-animate {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .section-animate:nth-child(1) { animation-delay: 0.1s; }
        .section-animate:nth-child(2) { animation-delay: 0.2s; }
        .section-animate:nth-child(3) { animation-delay: 0.3s; }
        .section-animate:nth-child(4) { animation-delay: 0.4s; }
        .section-animate:nth-child(5) { animation-delay: 0.5s; }
        .section-animate:nth-child(6) { animation-delay: 0.6s; }
        .section-animate:nth-child(7) { animation-delay: 0.7s; }
        
        .input-focus {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
        }
        
        .input-focus:hover {
          border-color: #dc2626;
        }
        
        .card-animate {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-animate:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        
        .icon-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .icon-bounce:nth-child(1) { animation-delay: 0s; }
        .icon-bounce:nth-child(2) { animation-delay: 0.2s; }
        .icon-bounce:nth-child(3) { animation-delay: 0.4s; }
        .icon-bounce:nth-child(4) { animation-delay: 0.6s; }
        
        .submit-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .submit-button:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .submit-button:hover:before {
          width: 300px;
          height: 300px;
        }
        
        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(220, 38, 38, 0.3);
        }
        
        .submit-button:active {
          transform: translateY(0);
        }
        
        .checkbox-animate {
          transition: all 0.3s ease;
        }
        
        .checkbox-animate:hover {
          transform: scale(1.1);
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-8 my-6 sm:my-10 card-animate animate-fade-in-up">
        <div className="text-center mb-4 sm:mb-6 animate-scale-in">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            <span className="text-black">RETAILZ</span>
            <span className="text-red-600">POS</span>
          </h1>
          <h2 className="text-base sm:text-lg font-semibold mt-2 px-4">
            RECURRING CREDIT CARD / ACH PAYMENT AUTHORIZATION
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Recurring Checkbox */}
          <div className="flex items-start gap-3 section-animate">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 accent-red-500 checkbox-animate cursor-pointer"
            />
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-semibold">RECURRING CHARGE</span> — You
              authorize regularly scheduled charges to your credit card or bank
              account. You will be charged the amount indicated below until you
              cancel in writing.
            </p>
          </div>

          {/* Authorization Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 section-animate">
            <div className="animate-slide-in-left">
              <label className="text-xs sm:text-sm font-medium">
                Full Name
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 focus:ring-2 focus:ring-red-500 input-focus text-sm sm:text-base"
                required
              />
            </div>
            <div className="animate-slide-in-right">
              <label className="text-xs sm:text-sm font-medium">
                Company Name
              </label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 focus:ring-2 focus:ring-red-500 input-focus text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Payment Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4 section-animate">
            <div>
              <label className="text-xs sm:text-sm font-medium">
                Amount ($)
              </label>
              <input
                type="number"
                step="0.01"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 focus:ring-2 focus:ring-red-500 input-focus text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium">
                Charge Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 focus:ring-2 focus:ring-red-500 input-focus text-sm sm:text-base"
                required
              />
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <label className="text-xs sm:text-sm font-medium">
                Payment For
              </label>
              <input
                name="paymentFor"
                value={formData.paymentFor}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 focus:ring-2 focus:ring-red-500 input-focus text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Credit Card Section */}
          <div className="border border-gray-300 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6 section-animate card-animate">
            <h3 className="font-semibold text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">
              CREDIT CARD INFORMATION
            </h3>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <FaCcVisa className="text-blue-500 text-xl sm:text-2xl icon-bounce cursor-pointer" />
              <FaCcMastercard className="text-orange-500 text-xl sm:text-2xl icon-bounce cursor-pointer" />
              <FaCcAmex className="text-blue-700 text-xl sm:text-2xl icon-bounce cursor-pointer" />
              <FaCcDiscover className="text-yellow-600 text-xl sm:text-2xl icon-bounce cursor-pointer" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-xs sm:text-sm font-medium">
                  Cardholder Name
                </label>
                <input
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 input-focus text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium">
                  Account Number
                </label>
                <input
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 input-focus text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium">
                  Expiration Date
                </label>
                <input
                  type="month"
                  name="expDate"
                  value={formData.expDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 input-focus text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium">CVV</label>
                <input
                  name="cvv"
                  maxLength="4"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 input-focus text-sm sm:text-base"
                  required
                />
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4 section-animate">
            <div className="animate-slide-in-left">
              <label className="text-xs sm:text-sm font-medium">
                Authorized Signature
              </label>
              <input
                name="signature"
                value={formData.signature}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 input-focus text-sm sm:text-base"
                required
              />
            </div>
            <div className="animate-slide-in-right">
              <label className="text-xs sm:text-sm font-medium">Date</label>
              <input
                type="date"
                name="signatureDate"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-2.5 mt-1 input-focus text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="mt-4 sm:mt-6 flex justify-end section-animate">
            <button
              type="submit"
              className="submit-button bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-red-700 transition-all text-sm sm:text-base relative"
            >
              <span className="relative z-10">Submit Authorization</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecurringChargeForm;
