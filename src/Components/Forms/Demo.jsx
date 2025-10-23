import React, { useState } from "react";

const Demo = () => {
// https://script.google.com/macros/s/AKfycbwEn34mGBpqdjtY4xNT2rmXHGTSPzrynrPvsPJgFhLPCeDj9sthYlDtfyRsnH5Vrw850A/exec


function doPost(e) {
  const sheet = SpreadsheetApp.openByUrl(
    "https://docs.google.com/spreadsheets/d/1gEbbq2NNPzAd9ex8OJO20Li1YFXCvkOnC5Q9EuzMV3Y/edit#gid=0"
  ).getSheetByName("Sheet1");

  const data = e.parameter;
  const category = data.category || "Unknown";

  if (category === "merchant") {
    // Append merchant data
    sheet.appendRow([
      "Merchant",
      data.business,
      data.diffrent_business,
      data.city,
      data.mobile,
      data.gmail,
      data.taxId,
      new Date(),
    ]);
  } else if (category === "agent") {
    // Append agent data
    sheet.appendRow([
      "Agent",
      data.fristname,
      data.lastname,
      data.email,
      data.phone,
      data.city,
      data.state,
      data.description,
      data.exprience,
      new Date(),
    ]);
  } else {
    sheet.appendRow(["Unknown", JSON.stringify(data), new Date()]);
  }

  return ContentService.createTextOutput("Added successfully!");


  const handleSubmit = (e)=>{
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycbwEn34mGBpqdjtY4xNT2rmXHGTSPzrynrPvsPJgFhLPCeDj9sthYlDtfyRsnH5Vrw850A/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&mobile=${e.target.mobile.value}`)

    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
  }

   

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Simple Form</h2>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"

            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"

            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Mobile</label>
          <input
            type="tel"
            name="mobile"

            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Demo;
