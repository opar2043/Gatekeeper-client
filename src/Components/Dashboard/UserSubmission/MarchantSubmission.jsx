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
  Building,
  FileText,
  MapPin,
  Briefcase,
  Calendar,
  IdCard,
  Hash,
} from "lucide-react";
import useMarchent from "../../Hooks/useMarchent";
import useAuth from "../../Hooks/useAuth";

const MarchantSubmission = () => {
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [marchants] = useMarchent() || [];
  const merchants = Array.isArray(marchants) ? marchants : [];
  const { user } = useAuth();

  // Filter merchants for current user safely
  const findForm =
    user?.email && Array.isArray(marchants)
      ? marchants.filter((mar) => mar.email === user.email)
      : [];

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleCloseModal = (e) => {
    if (e.target.id === "modal-bg") {
      setSelectedMerchant(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            {user?.email || "No user email found"}
          </h1>
          <p className="text-gray-600 text-lg">
            All Merchant Submissions for this Login Email
          </p>
        </div>

        {/* Merchant Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Store className="w-4 h-4" />
                      Business Name
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <User className="w-4 h-4" />
                    Owner
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <Mail className="w-4 h-4" />
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {findForm?.length > 0 ? (
                  findForm.map((m, index) => (
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
                            {m.logoName?.charAt(0)?.toUpperCase() || "M"}
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
                        {m.businessEmail || "N/A"}
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
                        <p className="text-gray-500 font-medium">No merchants found</p>
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
        {findForm?.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-blue-600">{findForm.length}</span> of{" "}
              <span className="font-semibold text-blue-600">{merchants.length}</span>{" "}
              merchants
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedMerchant && (
        <div
          id="modal-bg"
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Merchant Details</h2>
                  <p className="text-blue-100 text-sm">{selectedMerchant.logoName}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMerchant(null)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Status */}
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-lg font-semibold text-gray-700">Account Status</span>
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

              {/* Business Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Info label="Business Name" value={selectedMerchant.logoName} />
                  <Info
                    label="Date Established"
                    value={formatDate(selectedMerchant.dateEstablished)}
                  />
                  <Info label="Title Name" value={selectedMerchant.titleName} />
                  <Info label="Taxpayer ID" value={selectedMerchant.taxpayerId} />
                  <Info
                    label="Private Business No."
                    value={selectedMerchant.businessPrivateNumber}
                  />
                  <Info label="Business Type" value={selectedMerchant.businessType} />
                  <Info
                    label="Other Business Type"
                    value={selectedMerchant.otherBusinessType}
                  />
                  <Info
                    label="Physical Address"
                    value={selectedMerchant.physicalAddress}
                  />
                </div>
              </div>

              {/* Owner Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Owner Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Info label="First Name" value={selectedMerchant.firstName} />
                  <Info label="Last Name" value={selectedMerchant.lastName} />
                  <Info label="Email" value={selectedMerchant.businessEmail} />
                  <Info label="Phone" value={selectedMerchant.businessPhone} />
                  <Info label="Role" value={selectedMerchant.role || "Merchant"} />
                </div>
              </div>

              {/* Close */}
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

// Small reusable info block
const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-600 mb-1">{label}</p>
    <p className="text-base font-medium text-gray-900">{value || "N/A"}</p>
  </div>
);

export default MarchantSubmission;
