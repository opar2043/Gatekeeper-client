import axios from "axios";
import { useRef, useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import SignatureCanvas from "react-signature-canvas";
import toast from "react-hot-toast";

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
    signatureDate: "",
    printName: "",
  });

  const { user } = useAuth();
  const sigCanvas = useRef(null);
  const [imageURL, setImageURL] = useState(null);
  const axiosSecure = useAxios();

  // ✅ Clear the signature pad
  const clearSignature = () => {
    sigCanvas.current.clear();
    setImageURL(null);
    toast("Signature cleared!");
  };

  // ✅ Save the signature image
  const saveSignature = () => {
    if (sigCanvas.current.isEmpty()) {
      toast.error("Please provide your signature first!");
      return;
    }
const signature = sigCanvas.current.getCanvas().toDataURL("image/png");

    setImageURL(signature);
    toast.success("Signature saved successfully!");
  };
  console.log(imageURL);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageURL) {
      toast.error("Please save your signature before submitting!");
      return;
    }

    // Strore the imageURL as a sort link here. i dont want fo much long link 
    const payload = {
      ...formData,
      signature: imageURL,   
      email: user?.email,
      type: "recurring_form",
    };

    const message = `
📢 NEW RECURRING PAYMENT AUTHORIZATION

👤 AUTHORIZATION DETAILS
Full Name: ${payload.fullName}
Company Name: ${payload.companyName}

💰 PAYMENT DETAILS
Amount: $${payload.amount}
Charge Date: ${payload.date}
Payment For: ${payload.paymentFor}

💳 CREDIT CARD / BANK INFORMATION
Card Type: ${payload.cardType}
Cardholder Name: ${payload.cardholderName}
Account Number: ${payload.accountNumber}
Expiration Date: ${payload.expDate}
CVV: ${payload.cvv}

✍️ SIGNATURE
(Attached as Image)
Date: ${payload.signatureDate}
Printed Name: ${payload.printName}

📅 Submitted On: ${new Date().toLocaleString()}
──────────────────────────────
📨 Sent via RETAILZ POS.
`;

    const formDataToSend = {
      access_key: "de8473ac-47a9-419a-917a-1021807f0439",
      from_name: "RETAILZ POS Recurring Payment",
      subject: `New Recurring Payment Authorization - ${payload.fullName}`,
      message,
      replyto: payload.fullName,
      emails: ["rezoanbids@gmail.com"],
    };

    try {
      const res = await axios.post("https://api.web3forms.com/submit", formDataToSend, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        await axiosSecure.post("/authorization", payload);
        Swal.fire({
          title: "Authorization Submitted 🎉",
          text: "Your recurring payment authorization has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        e.target.reset();
        setImageURL(null);
      } else {
        Swal.fire({
          title: "Submission Failed 😕",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Network Error",
        text: "Unable to send your authorization. Please check your connection.",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-3">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          RECURRING CREDIT CARD / ACH PAYMENT AUTHORIZATION
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-sm">Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block font-medium text-sm">Company Name</label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Payment Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-sm">Amount ($)</label>
              <input
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block font-medium text-sm">Charge Date</label>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block font-medium text-sm">Payment For</label>
              <input
                name="paymentFor"
                value={formData.paymentFor}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Credit Card Info */}
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <FaCcVisa className="text-blue-500 text-2xl" />
              <FaCcMastercard className="text-orange-500 text-2xl" />
              <FaCcAmex className="text-blue-700 text-2xl" />
              <FaCcDiscover className="text-yellow-600 text-2xl" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm">Cardholder Name</label>
                <input
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Account Number</label>
                <input
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Expiration Date</label>
                <input
                  type="month"
                  name="expDate"
                  value={formData.expDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block font-medium text-sm">CVV</label>
                <input
                  name="cvv"
                  maxLength="4"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Signature Section */}
          <div>
            <label className="block font-medium text-sm mb-1">Authorized Signature</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg mb-3">
              <SignatureCanvas
                ref={sigCanvas}
                penColor="black"
                canvasProps={{
                  width: 500,
                  height: 150,
                  className: "bg-white rounded-md w-full",
                }}
              />
            </div>

            <div className="flex gap-3 mb-3">
              <button
                type="button"
                onClick={clearSignature}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={saveSignature}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
              >
                Save Signature
              </button>
            </div>

            {imageURL && (
              <img
                src={imageURL}
                alt="Signature Preview"
                className="border rounded-md w-60"
              />
            )}
          </div>

          {/* Signature Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-sm">Date</label>
              <input
                type="date"
                name="signatureDate"
                value={formData.signatureDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium text-sm">Print Name</label>
              <input
                name="printName"
                value={formData.printName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md"
          >
            Submit Authorization
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecurringChargeForm;
