import React, { useState } from 'react';
import { CreditCard, Calendar, DollarSign, Building2, CheckCircle2, Clock, XCircle, Eye, X } from 'lucide-react';

const RecurringData = () => {
  const [payments] = useState([
    {
      "id": 1,
      "fullName": "Rijoan Rashid",
      "companyName": "TechNova Ltd.",
      "amount": "4500",
      "date": "2025-10-28",
      "paymentFor": "Monthly Hosting Service",
      "cardType": "Visa",
      "cardholderName": "Rijoan Rashid",
      "accountNumber": "4111111111111111",
      "expDate": "2026-09",
      "cvv": "123",
      "signature": "R. Rashid",
      "signatureDate": "2025-10-28",
      "printName": "Rijoan Rashid",
      "status": "pending"
    },
    {
      "id": 2,
      "fullName": "Maisha Ahmed",
      "companyName": "UrbanStyle Fashions",
      "amount": "9000",
      "date": "2025-10-27",
      "paymentFor": "Website Maintenance",
      "cardType": "MasterCard",
      "cardholderName": "Maisha Ahmed",
      "accountNumber": "5500000000000004",
      "expDate": "2027-03",
      "cvv": "456",
      "signature": "M. Ahmed",
      "signatureDate": "2025-10-27",
      "printName": "Maisha Ahmed",
      "status": "confirm"
    },
    {
      "id": 3,
      "fullName": "Tanvir Hassan",
      "companyName": "GreenLeaf Organics",
      "amount": "12500",
      "date": "2025-10-26",
      "paymentFor": "Digital Marketing Package",
      "cardType": "Visa",
      "cardholderName": "Tanvir Hassan",
      "accountNumber": "4532015112830366",
      "expDate": "2026-12",
      "cvv": "789",
      "signature": "T. Hassan",
      "signatureDate": "2025-10-26",
      "printName": "Tanvir Hassan",
      "status": "confirm"
    },
    {
      "id": 4,
      "fullName": "Sabrina Karim",
      "companyName": "EduBright Academy",
      "amount": "6800",
      "date": "2025-10-28",
      "paymentFor": "Learning Management System",
      "cardType": "American Express",
      "cardholderName": "Sabrina Karim",
      "accountNumber": "378282246310005",
      "expDate": "2028-06",
      "cvv": "234",
      "signature": "S. Karim",
      "signatureDate": "2025-10-28",
      "printName": "Sabrina Karim",
      "status": "pending"
    },
    {
      "id": 5,
      "fullName": "Fahim Rahman",
      "companyName": "Apex Solutions Inc.",
      "amount": "15000",
      "date": "2025-10-25",
      "paymentFor": "Cloud Infrastructure",
      "cardType": "Visa",
      "cardholderName": "Fahim Rahman",
      "accountNumber": "4916338506082832",
      "expDate": "2027-11",
      "cvv": "567",
      "signature": "F. Rahman",
      "signatureDate": "2025-10-25",
      "printName": "Fahim Rahman",
      "status": "confirm"
    }
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const getStatusBadge = (status) => {
    if (status === 'confirm') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          <CheckCircle2 className="w-3 h-3" />
          Confirmed
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
          <Clock className="w-3 h-3" />
          Pending
        </span>
      );
    }
  };

  const maskCardNumber = (number) => {
    return '**** **** **** ' + number.slice(-4);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Payment Management</h1>
          <p className="text-gray-600">Track and manage recurring payment transactions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Total Payments</p>
            <p className="text-3xl font-bold text-gray-800">{payments.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Confirmed</p>
            <p className="text-3xl font-bold text-green-600">
              {payments.filter(p => p.status === 'confirm').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-600">
              {payments.filter(p => p.status === 'pending').length}
            </p>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Full Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Payment For</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      #{payment.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {payment.fullName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {payment.companyName}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-indigo-600">
                      ৳{parseInt(payment.amount).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {formatDate(payment.date)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {payment.paymentFor}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(payment.status)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => setSelectedPayment(payment)}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex items-center justify-between">
              <h2 className="text-2xl font-bold">Payment Details</h2>
              <button
                onClick={() => setSelectedPayment(null)}
                className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-700">Payment Status</span>
                {getStatusBadge(selectedPayment.status)}
              </div>

              {/* Personal Information */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Company Name</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.companyName}</p>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Amount</p>
                    <p className="text-2xl font-bold text-indigo-600">৳{parseInt(selectedPayment.amount).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payment Date</p>
                    <p className="text-base font-medium text-gray-900">{formatDate(selectedPayment.date)}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">Payment For</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.paymentFor}</p>
                  </div>
                </div>
              </div>

              {/* Card Information */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Card Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Card Type</p>
                    <div className="flex items-center gap-2 mt-1">
                      <CreditCard className="w-5 h-5 text-indigo-600" />
                      <p className="text-base font-medium text-gray-900">{selectedPayment.cardType}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cardholder Name</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.cardholderName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Card Number</p>
                    <p className="text-base font-medium text-gray-900">{maskCardNumber(selectedPayment.accountNumber)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Expiry Date</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.expDate}</p>
                  </div>
                </div>
              </div>

              {/* Signature Information */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Signature Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Signature</p>
                    <p className="text-xl font-cursive italic text-indigo-600">{selectedPayment.signature}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Signature Date</p>
                    <p className="text-base font-medium text-gray-900">{formatDate(selectedPayment.signatureDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Print Name</p>
                    <p className="text-base font-medium text-gray-900">{selectedPayment.printName}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t pt-4 flex justify-end gap-3">
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

export default RecurringData;