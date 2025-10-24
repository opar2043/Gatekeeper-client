import axios from "axios";
import { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from "react-icons/fa";
import Swal from "sweetalert2";

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
    replyto: formData.fullName, // or email if you collect it
    emails: ["rezoanbids@gmail.com"], // Add other recipients if needed
  };

  try {
    const res = await axios.post("https://api.web3forms.com/submit", formDataToSend, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.data.success) {
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
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8  my-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-black">RETAILZ</span>
          <span className="text-red-600">POS</span>
        </h1>
        <h2 className="text-lg font-semibold mt-2">
          RECURRING CREDIT CARD / ACH PAYMENT AUTHORIZATION
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recurring Checkbox */}
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 w-5 h-5 accent-red-500" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">RECURRING CHARGE</span> — You authorize
            regularly scheduled charges to your credit card or bank account. You will be charged the amount indicated below
            until you cancel in writing.
          </p>
        </div>

        {/* Authorization Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Company Name</label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Payment Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Amount ($)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Charge Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Payment For</label>
            <input
              name="paymentFor"
              value={formData.paymentFor}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Credit Card Section */}
        <div className="border border-gray-300 rounded-lg p-4 mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">CREDIT CARD INFORMATION</h3>
          <div className="flex items-center gap-4 mb-3">
            <FaCcVisa className="text-blue-500 text-2xl" />
            <FaCcMastercard className="text-orange-500 text-2xl" />
            <FaCcAmex className="text-blue-700 text-2xl" />
            <FaCcDiscover className="text-yellow-600 text-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Cardholder Name</label>
              <input
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Account Number</label>
              <input
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Expiration Date</label>
              <input
                type="month"
                name="expDate"
                value={formData.expDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">CVV</label>
              <input
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Authorized Signature</label>
            <input
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              name="signatureDate"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecurringChargeForm;
