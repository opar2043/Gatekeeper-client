import React, { useState } from "react";
import {
  Store,
  User,
  Mail,
  Eye,
  CheckCircle,
  Clock,
  X,
  Calendar,
  CreditCard,
  DollarSign,
} from "lucide-react";
import useAuth from "../../Hooks/useAuth";
import usePayment from "../../Hooks/usePayment";

const RecuringSubmission = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [payment] = usePayment();
  const { user } = useAuth();

  // Filter recurring payments for logged-in user
  const recurringPayments =
    Array.isArray(payment) &&
    payment.filter((p) => p.type === "recuring_form" && p.email === user?.email);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const maskCardNumber = (number) => {
    if (!number) return "N/A";
    return number.slice(0, 4) + " **** **** " + number.slice(-4);
  };

  const getStatusBadge = (status) => {
    const isConfirmed = status === "confirmed";
    return (
      <span
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
          isConfirmed
            ? "bg-green-100 text-green-700 border border-green-200"
            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
        }`}
      >
        {isConfirmed ? <CheckCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
        {isConfirmed ? "Confirmed" : "Pending"}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            Recurring Payments — {user?.email || "N/A"}
          </h1>
          <p className="text-gray-600 text-lg">
            All recurring payment submissions for this login email
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Store className="w-4 h-4" /> Company
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" /> Full Name
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {recurringPayments?.length > 0 ? (
                  recurringPayments.map((p, index) => (
                    <tr
                      key={p._id || index}
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                        {p.companyName || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">{p.fullName || "N/A"}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{p.email || "N/A"}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">${p.amount || 0}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{formatDate(p.date)}</td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => setSelectedPayment(p)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <Eye className="w-4 h-4" /> View Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                          <Store className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium">No recurring payments found</p>
                        <p className="text-gray-400 text-sm">Try submitting a new recurring payment form</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Count */}
        {recurringPayments?.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-blue-600">{recurringPayments.length}</span> total recurring payments
            </p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex items-center justify-between">
              <h2 className="text-2xl font-bold">Payment Details</h2>
              <button onClick={() => setSelectedPayment(null)} className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Payment Status */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-700">Payment Status</span>
                {getStatusBadge(selectedPayment.status || "pending")}
              </div>

              {/* Personal Info */}
              <InfoBlock label="Full Name" value={selectedPayment.fullName} />
              <InfoBlock label="Company Name" value={selectedPayment.companyName} />

              {/* Payment Info */}
              <InfoBlock label="Amount" value={`$ ${selectedPayment.amount}`} />
              <InfoBlock label="Payment Date" value={formatDate(selectedPayment.date)} />
              <InfoBlock label="Payment For" value={selectedPayment.paymentFor} />

              {/* Card Info */}
              <InfoBlock label="Card Type" value={selectedPayment.cardType} />
              <InfoBlock label="Cardholder Name" value={selectedPayment.cardholderName} />
              <InfoBlock label="Card Number" value={maskCardNumber(selectedPayment.accountNumber)} />
              <InfoBlock label="Expiry Date" value={selectedPayment.expDate} />

              {/* Signature Info */}
              <InfoBlock label="Signature" value={selectedPayment.signature} />
              <InfoBlock label="Signature Date" value={formatDate(selectedPayment.signatureDate)} />
              <InfoBlock label="Print Name" value={selectedPayment.printName} />

              {/* Close Button */}
              <div className="flex justify-end pt-4 border-t">
                <button
                  onClick={() => setSelectedPayment(null)}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Info Block
const InfoBlock = ({ label, value }) => (
  <div className="border-t pt-4">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-base font-medium text-gray-900">{value || "N/A"}</p>
  </div>
);

export default RecuringSubmission;
