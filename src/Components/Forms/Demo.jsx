import React, { useState } from "react";

const Demo = () => {
// https://script.google.com/macros/s/AKfycbwEn34mGBpqdjtY4xNT2rmXHGTSPzrynrPvsPJgFhLPCeDj9sthYlDtfyRsnH5Vrw850A/exec


// function doPost(e) {
//   const sheet = SpreadsheetApp.openByUrl(
//     "https://docs.google.com/spreadsheets/d/1gEbbq2NNPzAd9ex8OJO20Li1YFXCvkOnC5Q9EuzMV3Y/edit#gid=0"
//   ).getSheetByName("Sheet1");

//   const data = e.parameter;
//   const category = data.category || "Unknown";

//   if (category === "merchant") {
//     // Append merchant data
//     sheet.appendRow([
//       "Merchant",
//       data.business,
//       data.diffrent_business,
//       data.city,
//       data.mobile,
//       data.gmail,
//       data.taxId,
//       new Date(),
//     ]);
//   } else if (category === "agent") {
//     // Append agent data
//     sheet.appendRow([
//       "Agent",
//       data.fristname,
//       data.lastname,
//       data.email,
//       data.phone,
//       data.city,
//       data.state,
//       data.description,
//       data.exprience,
//       new Date(),
//     ]);
//   } else {
//     sheet.appendRow(["Unknown", JSON.stringify(data), new Date()]);
//   }

//   return ContentService.createTextOutput("Added successfully!");


  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   const url = "https://script.google.com/macros/s/AKfycbwEn34mGBpqdjtY4xNT2rmXHGTSPzrynrPvsPJgFhLPCeDj9sthYlDtfyRsnH5Vrw850A/exec"
  //   fetch(url,{
  //     method:"POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&mobile=${e.target.mobile.value}`)

  //   }).then(res=>res.text()).then(data=>{
  //     alert(data)
  //   }).catch(error=>console.log(error))
  // }

   

 const [formData, setFormData] = useState({
    legalName: "",
    dbaName: "",
    establishedDate: "",
    taxId: "",
    businessPhone: "",
    businessType: "",
    otherBusiness: "",
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
    website: "",
    principalName: "",
    principalPosition: "",
    lastName: "",
    firstName: "",
    middleName: "",
    title: "",
    ownership: "",
    dob: "",
    ssn: "",
    homePhone: "",
    ownerAddress: "",
    ownerUnit: "",
    ownerCity: "",
    ownerState: "",
    ownerZip: "",
    driverLicense: "",
    driverLicenseState: "",
    licenseExpiry: "",
    ownerEmail: "",
    ownerCell: "",
    fnsNumber: "",
    bankName: "",
    bankAddress: "",
    bankContact: "",
    bankPhone: "",
    accountNumber: "",
    routingNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Merchant form submitted!");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-2xl">



 <form className="space-y-8">
        {/* Business Information */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold text-pink-500">Business Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <input type="text" placeholder="Legal Name of Business" className="input" />
            <input type="text" placeholder="DBA Name" className="input" />
            <input type="text" placeholder="Business Phone Number" className="input" />
            <input type="text" placeholder="Taxpayer Identification Number" className="input" />
            <select className="input">
              <option value="">Type of Business</option>
              <option>Liquor Store</option>
              <option>Grocery Store</option>
              <option>Convenience Store</option>
              <option>Hotel</option>
              <option>Other</option>
            </select>
            <input type="email" placeholder="Business Email" className="input" />
          </div>
        </fieldset>

        {/* Principal Information */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold text-pink-500">Principal Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <input type="text" placeholder="Owner Full Name" className="input" />
            <input type="text" placeholder="Title / Position" className="input" />
            <input type="email" placeholder="Owner Email" className="input" />
            <input type="text" placeholder="Phone Number" className="input" />
          </div>
        </fieldset>

        {/* Banking Information */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold text-pink-500">Banking Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <input type="text" placeholder="Bank Name" className="input" />
            <input type="text" placeholder="Account Number" className="input" />
            <input type="text" placeholder="Routing Number" className="input" />
          </div>
        </fieldset>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Demo;
