import React, { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
const CompanyForm = () => {
  const [formData, setFormData] = useState({
    // Business Information
    logoName: "",
    dateEstablished: "",
    titleName: "",
    taxpayerId: "",
    businessPrivateNumber: "",
    businessType: "",
    otherBusinessType: "",
    physicalAddress: "",
    physicalUnit: "",
    physicalCity: "",
    physicalState: "",
    physicalZip: "",
    billingAddress: "",
    billingUnit: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    businessEmail: "",
    businessWebsite: "",
    
    // Principal Information
    firstName: "",
    lastName: "",
    position: "",
    dateOfBirth: "",
    ssn: "",
    homePhone: "",
    homeAddress: "",
    homeUnit: "",
    homeCity: "",
    homeState: "",
    homeZip: "",
    driversLicense: "",
    licenseState: "",
    licenseExpiration: "",
    ownerEmail: "",
    cellPhone: "",
    
    // Business Requirements
    hasDriversLicense: false,
    hasVoidedCheck: false,
    hasFnsProvider: false,
    
    // Banking Information
    bankName: "",
    bankAddress: "",
    accountNumber: "",
    contactName: "",
    contactPhone: "",
    routingNumber: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const frm = e.target;

  // Collect all form data, including checkboxes from state
  const collectedData = {
    logoName: frm.logoName?.value || "",
    dateEstablished: frm.dateEstablished?.value || "",
    titleName: frm.titleName?.value || "",
    taxpayerId: frm.taxpayerId?.value || "",
    businessType: frm.businessType?.value || "",
    businessEmail: frm.businessEmail?.value || "",
    businessWebsite: frm.businessWebsite?.value || "",
    firstName: frm.firstName?.value || "",
    lastName: frm.lastName?.value || "",
    ownerEmail: frm.ownerEmail?.value || "",
    cellPhone: frm.cellPhone?.value || "",
    bankName: frm.bankName?.value || "",
    accountNumber: frm.accountNumber?.value || "",
    routingNumber: frm.routingNumber?.value || "",
    contactName: frm.contactName?.value || "",
    contactPhone: frm.contactPhone?.value || "",

    // ✅ Add checkbox values from state
    hasDriversLicense: formData.hasDriversLicense,
    hasVoidedCheck: formData.hasVoidedCheck,
    hasFnsProvider: formData.hasFnsProvider,
  };

  const message = `
📢 NEW MERCHANT APPLICATION RECEIVED

🏢 BUSINESS INFORMATION
Business Name: ${collectedData.logoName}
Date Established: ${collectedData.dateEstablished}
Title: ${collectedData.titleName}
Taxpayer ID: ${collectedData.taxpayerId}
Business Type: ${collectedData.businessType}
Business Email: ${collectedData.businessEmail}
Website: ${collectedData.businessWebsite || "N/A"}

👤 OWNER INFORMATION
Full Name: ${collectedData.firstName} ${collectedData.lastName}
Owner Email: ${collectedData.ownerEmail}
Cell Phone: ${collectedData.cellPhone}

📃 BUSINESS REQUIREMENTS
Driver's License Provided: ${collectedData.hasDriversLicense ? "Yes" : "No"}
Voided Check/Bank Letter Provided: ${collectedData.hasVoidedCheck ? "Yes" : "No"}
FNS Provider (EAT/Proof Storage): ${collectedData.hasFnsProvider ? "Yes" : "No"}

🏦 BANK DETAILS
Bank Name: ${collectedData.bankName}
Account Number: ${collectedData.accountNumber}
Routing Number: ${collectedData.routingNumber}
Contact Name: ${collectedData.contactName}
Contact Phone: ${collectedData.contactPhone}

📅 Submitted On: ${new Date().toLocaleString()}
──────────────────────────────
📨 This email was sent via PTECHPOS Merchant Form.
`;

  const formDataToSend = {
    access_key: "de8473ac-47a9-419a-917a-1021807f0439",
    from_name: "PTECHPOS Merchant Application",
    subject: `New Merchant Application - ${collectedData.logoName}`,
    message,
    replyto: collectedData.ownerEmail,
    emails: ["rezoanbids@gmail.com", collectedData.ownerEmail],
  };

  try {
    const res = await axios.post("https://api.web3forms.com/submit", formDataToSend, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.data.success) {
      Swal.fire({
        title: "Application Submitted ",
        text: "Your merchant application has been sent successfully!",
        icon: "success",
      });
      frm.reset();
    }
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "Failed to send your application. Please try again.",
      icon: "error",
    });
  }
};



  return (
    <div className="min-h-screen py-5 px-2 md:py-8 md:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">PTECHPOS</h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">MERCHANT APPLICATION</h2>
          <p className="text-gray-600">Complete the form below to apply for a merchant account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Business Information Section * */}
          <section className="md:p-8 p-4 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-blue-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Business Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Logo Name of Business
                  </label>
                  <input
                    type="text"
                    name="logoName"
                    value={formData.logoName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date Established
                    </label>
                    <input
                      type="date"
                      name="dateEstablished"
                      value={formData.dateEstablished}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title Name
                    </label>
                    <input
                      type="text"
                      name="titleName"
                      value={formData.titleName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Taxpayer Identification Number
                  </label>
                  <input
                    type="text"
                    name="taxpayerId"
                    value={formData.taxpayerId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="legal">Legal Seller</option>
                    <option value="country">Country Store</option>
                    <option value="committees">Committees Store</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {formData.businessType === 'other' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Please describe your business
                    </label>
                    <input
                      type="text"
                      name="otherBusinessType"
                      value={formData.otherBusinessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="bg-blue-50 md:p-4 p-2 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Physical Address</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="physicalAddress"
                      placeholder="Street Address"
                      value={formData.physicalAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="physicalUnit"
                        placeholder="Unit"
                        value={formData.physicalUnit}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="physicalCity"
                        placeholder="City"
                        value={formData.physicalCity}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="physicalState"
                        placeholder="State"
                        value={formData.physicalState}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <input
                        type="text"
                        name="physicalZip"
                        placeholder="ZIP"
                        value={formData.physicalZip}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 md:p-4 p-2 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Billing Address</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="billingAddress"
                      placeholder="Street Address"
                      value={formData.billingAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="billingUnit"
                        placeholder="Unit"
                        value={formData.billingUnit}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="billingCity"
                        placeholder="City"
                        value={formData.billingCity}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="billingState"
                        placeholder="State"
                        value={formData.billingState}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <input
                        type="text"
                        name="billingZip"
                        placeholder="ZIP"
                        value={formData.billingZip}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:gap-4 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Website
                    </label>
                    <input
                      type="url"
                      name="businessWebsite"
                      value={formData.businessWebsite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Principal Information Section */}
          <section className="md:p-8 p-4 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-green-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Principal Owner Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position Held
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      SSN
                    </label>
                    <input
                      type="text"
                      name="ssn"
                      value={formData.ssn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Home Phone
                  </label>
                  <input
                    type="tel"
                    name="homePhone"
                    value={formData.homePhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Home Address</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="homeAddress"
                      placeholder="Street Address"
                      value={formData.homeAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="homeUnit"
                        placeholder="Unit"
                        value={formData.homeUnit}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="homeCity"
                        placeholder="City"
                        value={formData.homeCity}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="homeState"
                        placeholder="State"
                        value={formData.homeState}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <input
                        type="text"
                        name="homeZip"
                        placeholder="ZIP"
                        value={formData.homeZip}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      License Number
                    </label>
                    <input
                      type="text"
                      name="driversLicense"
                      value={formData.driversLicense}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      License State
                    </label>
                    <input
                      type="text"
                      name="licenseState"
                      value={formData.licenseState}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      License Expiration
                    </label>
                    <input
                      type="date"
                      name="licenseExpiration"
                      value={formData.licenseExpiration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cell Phone
                    </label>
                    <input
                      type="tel"
                      name="cellPhone"
                      value={formData.cellPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Owner Email Address
                  </label>
                  <input
                    type="email"
                    name="ownerEmail"
                    value={formData.ownerEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Business Requirements Section */}
          <section className="md:p-8 p-4 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-purple-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Business Requirements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4">
              <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  name="hasDriversLicense"
                  checked={formData.hasDriversLicense}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 font-medium">Driver's License</span>
              </label>

              <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  name="hasVoidedCheck"
                  checked={formData.hasVoidedCheck}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 font-medium">Voided Check or Bank Letter</span>
              </label>

              <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  name="hasFnsProvider"
                  checked={formData.hasFnsProvider}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 font-medium">FNS Provider (EAT/Proof Storage)</span>
              </label>
            </div>
          </section>

          {/* Banking Information Section */}
          <section className="md:p-8 p-4">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-orange-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Banking Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Address
                  </label>
                  <input
                    type="text"
                    name="bankAddress"
                    value={formData.bankAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Checking Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Checking Routing Number
                  </label>
                  <input
                    type="text"
                    name="routingNumber"
                    value={formData.routingNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="px-8 pb-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-800 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition-all transform hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm;