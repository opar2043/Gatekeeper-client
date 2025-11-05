import React, { useState } from "react";
import {
  Store,
  User,
  Mail,
  Eye,
  Search,
  Filter,
  CheckCircle,
  Clock,
  X,
  Phone,
  Calendar,
  Building,
  CreditCard,
  FileText,
} from "lucide-react";
import useMarchent from "../../Hooks/useMarchent";


const MerchantData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedMerchant, setSelectedMerchant] = useState(null);

  const [marchants] = useMarchent() || [];

  const merchants = Array.isArray(marchants) ? marchants : [];

 
  const filteredMerchants = merchants.filter((merchant) => {
    const matchesSearch =
      merchant.logoName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.businessEmail?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || merchant.status === filterStatus;

    return matchesSearch && matchesFilter;
  });
  console.log(filteredMerchants);
  const confirmedCount = merchants.filter(
    (m) => m.status === "confirmed"
  ).length;
  const pendingCount = merchants.filter((m) => m.status === "pending").length;

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
          <h1 className="text-4xl font-bold text-blue-600 mb-2 flex items-center gap-3">
            <Store className="w-10 h-10" />
            Merchant Management
          </h1>
          <p className="text-gray-600 text-lg">
            Monitor and manage all merchant accounts
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">
                  Total Merchants
                </p>
                <p className="text-3xl font-bold text-gray-800">
                  {merchants.length}
                </p>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <Store className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">
                  Confirmed
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {confirmedCount}
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">
                  Pending
                </p>
                <p className="text-3xl font-bold text-yellow-600">
                  {pendingCount}
                </p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-full">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by business name, owner, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Merchant Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    #
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Store className="w-4 h-4" />
                      Business Name
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Owner
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
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
                {filteredMerchants.length > 0 ? (
                  filteredMerchants.map((m, index) => (
                    <tr
                      key={m._id || index}
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
                            {m.logoName?.charAt(0) || "M"}
                          </div>
                          <span className="text-sm font-semibold text-gray-800">
                            {m.logoName || "N/A"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {m.firstName} {m.lastName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {m.businessEmail}
                      </td>
                      <td className="px-6 py-4">
                        {m.status === "confirmed" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Confirmed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">
                            <Clock className="w-3.5 h-3.5" />
                            Pending
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => setSelectedMerchant(m)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                          <Store className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium">
                          No merchants found
                        </p>
                        <p className="text-gray-400 text-sm">
                          Try adjusting your search or filter
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
        {filteredMerchants.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-blue-600">
                {filteredMerchants.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-blue-600">
                {merchants.length}
              </span>{" "}
              merchants
            </p>
          </div>
        )}
      </div>

      {/* Merchant Details Modal */}
      {selectedMerchant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white flex items-center justify-between sticky top-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Merchant Details</h2>
                  <p className="text-blue-100 text-sm">
                    {selectedMerchant.logoName}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMerchant(null)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-lg font-semibold text-gray-700">
                  Account Status
                </span>
                {selectedMerchant.status === "confirmed" ? (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">
                    <CheckCircle className="w-5 h-5" />
                    Confirmed
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">
                    <Clock className="w-5 h-5" />
                    Pending
                  </span>
                )}
              </div>

              {/* Business Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Business Name</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.logoName || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Date Established
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {formatDate(selectedMerchant.dateEstablished)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Business Type</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.businessType || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Taxpayer ID</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.taxpayerId || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Business Email</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.businessEmail || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Business Website
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.businessWebsite || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Owner Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Full Name</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.firstName} {selectedMerchant.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Title</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.titleName || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Owner Email</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.ownerEmail || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Cell Phone</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.cellPhone || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Banking Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  Banking Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.bankName || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Number</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.accountNumber || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Routing Number</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.routingNumber || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  Emergency Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Contact Name</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.contactName || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Contact Phone</p>
                    <p className="text-base font-medium text-gray-900">
                      {selectedMerchant.contactPhone || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents Status */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Document Verification
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    {selectedMerchant.hasDriversLicense ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <span className="text-sm text-gray-700">
                      Driver's License
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedMerchant.hasVoidedCheck ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <span className="text-sm text-gray-700">Voided Check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedMerchant.hasFnsProvider ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <span className="text-sm text-gray-700">FNS Provider</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Image Provided
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <img src={selectedMerchant.driversLicenseLink} alt="" />
                  </div>
                  <div>
                    <img src={selectedMerchant.voidedCheckLink} alt="" />
                  </div>
                  <div>
                    <img src={selectedMerchant.fnsProviderLink} alt="" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  onClick={() => setSelectedMerchant(null)}
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

export default MerchantData;
