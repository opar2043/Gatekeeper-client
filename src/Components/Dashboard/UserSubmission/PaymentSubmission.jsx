import React, { useState } from "react";
import {
  Store,
  User,
  Mail,
  Eye,
  CheckCircle,
  Clock,
  X,
  Phone,
  CreditCard,
  Calendar,
  FileText,
} from "lucide-react";
import useAuth from "../../Hooks/useAuth";
import usePayment from "../../Hooks/usePayment";

const PaymentSubmission = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [payment] = usePayment();
  const { user } = useAuth();

  const userPayments = payment?.filter((p) => p.email === user?.email) || [];

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            Payments Authorization — {user?.email || "N/A"}
          </h1>
          <p className="text-gray-600 text-lg">
            All Payment Submissions for this account
          </p>
        </div>

        {/* Payment Table */}
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
                {userPayments.length > 0 ? (
                  userPayments.map((p, index) => (
                    <tr
                      key={p._id || index}
                      className="hover:bg-blue-50 transition-all duration-200"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                        {p.companyName || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {p.fullName || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {p.email || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-700">
                        ${p.amount || "0"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(p.date)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => setSelectedPayment(p)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition-all"
                        >
                          <Eye className="w-4 h-4" />
                          View
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
                        <p className="text-gray-500 font-medium">No payments found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Count */}
        {userPayments.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-blue-600">
                {userPayments.length}
              </span>{" "}
              records
            </p>
          </div>
        )}
      </div>

      {/* Fixed Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white flex justify-between items-center sticky top-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Payment Details</h2>
                  <p className="text-blue-100 text-sm">
                    Transaction ID: {selectedPayment._id}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPayment(null)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Status */}
              <div className="flex justify-between pb-4 border-b">
                <span className="text-lg font-semibold text-gray-700">
                  Payment Status
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">
                  <CheckCircle className="w-4 h-4" />
                  Paid
                </span>
              </div>

              {/* General Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" /> Personal Info
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p><strong>Name:</strong> {selectedPayment.fullName}</p>
                  <p><strong>Email:</strong> {selectedPayment.billingEmail}</p>
                  <p><strong>Phone:</strong> {selectedPayment.billingPhone}</p>
                  <p><strong>City:</strong> {selectedPayment.billingCity}</p>
                </div>
              </div>

              {/* Bank Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" /> Banking Info
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p><strong>Bank Name:</strong> {selectedPayment.bankName}</p>
                  <p><strong>Account No:</strong> {selectedPayment.accountNumber}</p>
                  <p><strong>Routing No:</strong> {selectedPayment.routingNumber}</p>
                  <p><strong>Amount:</strong> ${selectedPayment.amount}</p>
                </div>
              </div>

              {/* Card Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" /> Card Info
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p><strong>Card Holder:</strong> {selectedPayment.cardHolder}</p>
                  <p><strong>Card Number:</strong> {selectedPayment.cardNumber}</p>
                  <p><strong>Exp Date:</strong> {selectedPayment.expDate}</p>
                  <p><strong>CVV:</strong> {selectedPayment.cvv}</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" /> Description
                </h3>
                <p className="text-gray-700">{selectedPayment.description}</p>
              </div>

              {/* Close Button */}
              <div className="flex justify-end pt-4 border-t">
                <button
                  onClick={() => setSelectedPayment(null)}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition"
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

export default PaymentSubmission;
