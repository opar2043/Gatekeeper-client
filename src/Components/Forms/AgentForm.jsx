import React, { useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const AgentForm = () => {
  const [activeTab, setActiveTab] = useState("merchant");

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
                {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
Fill out the form below and we'll get back to you within 24 hours..
          </p>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center ">
        {/* Tabs */}
        <div className=" flex gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center items-center sm:justify-start">
          <button
            onClick={() => setActiveTab("merchant")}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all ${
              activeTab === "merchant"
                ? "bg-[#0070BA] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Merchant Application
          </button>

          <button
            onClick={() => setActiveTab("agent")}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 border rounded-full font-medium text-sm sm:text-base transition-all ${
              activeTab === "agent"
                ? "bg-[#0070BA] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Agent Application
          </button>
        </div>

        {/* ================== Merchant Form ================== */}
        {activeTab === "merchant" && (
          <div className="bg-white w-3/5 rounded-xl sm:rounded-2xl  p-6 sm:p-8 lg:p-8 border shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Merchant Application Form
            </h2>

            {/* Business Name and DBA Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  DBA (Doing Business As)
                </label>
                <input
                  type="text"
                  placeholder="If different from business name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Business Address */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-800 mb-2">
                Business Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Street address, city, state, zip"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Tax ID */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-800 mb-2">
                Tax ID (EIN/SSN)
              </label>
              <input
                type="text"
                placeholder="12-3456789"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Upload Documents */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-800 mb-2">
                Upload SS-4 Form (if available)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
                <HiOutlineDocumentText className="mx-auto text-4xl text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-400 text-sm">
                  PDF, DOC, DOCX (max 10MB)
                </p>
              </div>
            </div>

            {/* License + Check */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {["Business License", "Voided Check"].map((label, idx) => (
                <div key={idx}>
                  <label className="block font-semibold text-gray-800 mb-2">
                    {label}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
                    <HiOutlineDocumentText className="mx-auto text-3xl text-gray-400 mb-2" />
                    <p className="text-gray-600 font-medium text-sm">
                      Upload {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit */}
            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md">
              Submit Application
            </button>
          </div>
        )}

        {/* ================== Agent Form ================== */}
        {activeTab === "agent" && (
          <div className="bg-white w-3/5 shadow-lg border rounded-xl sm:rounded-2xl  p-6 sm:p-8 lg:p-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Agent Application Form
            </h2>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* City + State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Why Join */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-800 mb-2">
                Why do you want to join Gatekeeper?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Share your motivation..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-800 mb-2">
                Previous Experience (if any)
              </label>
              <textarea
                rows={3}
                placeholder="Describe your previous experience (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Resume Upload */}
            <div className="mb-8">
              <label className="block font-semibold text-gray-800 mb-2">
                Resume (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
                <HiOutlineDocumentText className="mx-auto text-4xl text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium mb-1">
                  📄 Click to upload resume
                </p>
                <p className="text-gray-400 text-sm">
                  PDF, DOC, DOCX (max 10MB)
                </p>
              </div>
            </div>

            {/* Submit */}
            <button className="w-full bg-[#0070BA] text-white font-semibold py-3 rounded-full hover:bg-[#033196] active:bg-blue-800 transition-colors shadow-md duration-200">
              Submit Application
            </button>
          </div>
        )}


      </div>
    </div>
  );
};

export default AgentForm;
