import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Store, User, Mail, Eye, Search, Filter, CheckCircle, Clock } from "lucide-react";

const MerchantData = () => {
  const [merchants, setMerchants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    fetch("/marchent.json")
      .then((res) => res.json())
      .then((data) => setMerchants(data))
      .catch((err) => console.error("Error loading merchant data:", err));
  }, []);

  const filteredMerchants = merchants.filter((merchant) => {
    const matchesSearch = 
      merchant.logoName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.businessEmail?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || merchant.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const confirmedCount = merchants.filter(m => m.status === "confirmed").length;
  const pendingCount = merchants.filter(m => m.status === "pending").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1562B1] mb-2 flex items-center gap-3">
            <Store className="w-10 h-10" />
            Merchant Management
          </h1>
          <p className="text-gray-600 text-lg">Monitor and manage all merchant accounts</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1562B1] hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Total Merchants</p>
                <p className="text-3xl font-bold text-gray-800">{merchants.length}</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <Store className="w-8 h-8 text-[#1562B1]" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Confirmed</p>
                <p className="text-3xl font-bold text-green-600">{confirmedCount}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{pendingCount}</p>
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
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by business name, owner, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1562B1] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1562B1] focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
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
                <tr className="bg-gradient-to-r from-[#1562B1] to-[#0d4a8a] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">#</th>
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
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMerchants.length > 0 ? (
                  filteredMerchants.map((m, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#1562B1] to-[#0d4a8a] rounded-lg flex items-center justify-center text-white font-bold">
                            {m.logoName?.charAt(0) || "M"}
                          </div>
                          <span className="text-sm font-semibold text-gray-800">
                            {m.logoName}
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
                        <Link
                          to={`/dashboard/merchant/${index}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1562B1] hover:bg-[#0d4a8a] text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </Link>
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
                        <p className="text-gray-500 font-medium">No merchants found</p>
                        <p className="text-gray-400 text-sm">Try adjusting your search or filter</p>
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
              Showing <span className="font-semibold text-[#1562B1]">{filteredMerchants.length}</span> of{" "}
              <span className="font-semibold text-[#1562B1]">{merchants.length}</span> merchants
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchantData;