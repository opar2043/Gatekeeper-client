import React, { useState } from "react";
import {
  CreditCard,
  Building2,
  DollarSign,
  Calendar,
  Eye,
  Search,
  Filter,
  CheckCircle,
  Clock,
  TrendingUp,
  X,
  User,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import usePayment from "../../Hooks/usePayment";

const PaymentData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterChargeType, setFilterChargeType] = useState("all");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [paymentData] = usePayment() || [];
  const payment = Array.isArray(paymentData) ? paymentData : [];

  const filteredpayment = payment.filter((charge) => {
    const matchesSearch =
      charge.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      charge.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      charge.chargeType?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || charge.status === filterStatus;
    const matchesChargeType =
      filterChargeType === "all" || charge.chargeType === filterChargeType;

    return matchesSearch && matchesStatus && matchesChargeType;
  });

  const confirmedCount = payment.filter((c) => c.status === "confirmed").length;
  const pendingCount = payment.filter((c) => c.status === "pending").length;
  const totalAmount = payment.reduce(
    (sum, c) => sum + parseFloat(c.amount || 0),
    0
  );
  const chargeTypes = [...new Set(payment.map((c) => c.chargeType))];

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const maskCardNumber = (number) => {
    if (!number) return '****';
    return '**** **** **** ' + number.slice(-4);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1562B1] rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            Payment Management
          </h1>
          <p className="text-gray-600">
            Track and manage all payment transactions
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#1562B1]" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Payments</p>
            <p className="text-3xl font-bold text-gray-900">{payment.length}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Confirmed</p>
            <p className="text-3xl font-bold text-emerald-600">
              {confirmedCount}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-3xl font-bold text-amber-600">{pendingCount}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#1562B1]" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Amount</p>
            <p className="text-3xl font-bold text-[#1562B1]">
              ${totalAmount.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, company, or charge type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1562B1] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1562B1] focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer min-w-[160px]"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterChargeType}
                onChange={(e) => setFilterChargeType(e.target.value)}
                className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1562B1] focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer min-w-[160px]"
              >
                <option value="all">All Types</option>
                {chargeTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type?.charAt(0).toUpperCase() + type?.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1562B1] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    #
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Full Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Charge Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredpayment.length > 0 ? (
                  filteredpayment.map((item, index) => (
                    <tr
                      key={item._id || index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-900">
                            {item.fullName || "N/A"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.companyName || "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-[#1562B1] border border-blue-100">
                          {item.chargeType?.charAt(0).toUpperCase() +
                            item.chargeType?.slice(1) || "N/A"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#1562B1]">
                        ${parseFloat(item.amount || 0).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(item.date)}
                      </td>
                      <td className="px-6 py-4">
                        {item.status === "confirmed" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Confirmed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                            <Clock className="w-3.5 h-3.5" />
                            Pending
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => setSelectedPayment(item)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1562B1] hover:bg-[#0d4a8a] text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                          <CreditCard className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-600 font-medium">
                          No payments found
                        </p>
                        <p className="text-gray-500 text-sm">
                          Try adjusting your search or filters
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Results Counter */}
        {filteredpayment.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Showing{" "}
              <span className="font-semibold text-[#1562B1]">
                {filteredpayment.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-[#1562B1]">
                {payment.length}
              </span>{" "}
              payments
            </p>
          </div>
        )}
      </div>

      {/* Payment Details Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-[#1562B1] to-[#0d4a8a] p-6 text-white flex items-center justify-between sticky top-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Payment Details</h2>
                  <p className="text-blue-100 text-sm">{selectedPayment.companyName}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPayment(null)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-lg font-semibold text-gray-700">Payment Status</span>
                {selectedPayment.status === "confirmed" ? (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                    <CheckCircle className="w-5 h-5" />
                    Confirmed
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                    <Clock className="w-5 h-5" />
                    Pending
                  </span>
                )}
              </div>

              {/* Personal Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#1562B1]" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Full Name</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.fullName || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Company Name</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.companyName || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Charge Type</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-[#1562B1]">
                      {selectedPayment.chargeType?.charAt(0).toUpperCase() + selectedPayment.chargeType?.slice(1) || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#1562B1]" />
                  Payment Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Amount</p>
                    <p className="text-3xl font-bold text-[#1562B1]">${parseFloat(selectedPayment.amount || 0).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Payment Date</p>
                    <p className="text-base font-medium text-gray-900">{formatDate(selectedPayment.date)}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600 mb-1">Description</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.description || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Bank Account Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#1562B1]" />
                  Bank Account Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Name on Account</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.nameOnAccount || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.bankName || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Number</p>
                    <p className="text-base font-medium text-gray-900">{maskCardNumber(selectedPayment.accountNumber)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Routing Number</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.routingNumber || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Credit Card Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#1562B1]" />
                  Credit Card Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Card Holder</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.cardHolder || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Card Number</p>
                    <p className="text-base font-medium text-gray-900">{maskCardNumber(selectedPayment.cardNumber)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Expiry Date</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.expDate || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">CVV</p>
                    <p className="text-base font-medium text-gray-900">***</p>
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#1562B1]" />
                  Billing Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600 mb-1">Billing Address</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.billingAddress || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">City</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.billingCity || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.billingPhone || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.billingEmail || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t">
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

export default PaymentData;