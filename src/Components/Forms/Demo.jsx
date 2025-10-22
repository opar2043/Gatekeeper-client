import React, { useState } from "react";

const Demo = () => {
// https://script.google.com/macros/s/AKfycbwEn34mGBpqdjtY4xNT2rmXHGTSPzrynrPvsPJgFhLPCeDj9sthYlDtfyRsnH5Vrw850A/exec
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const Name = e.target.name.value;
//     const Email = e.target.email.value;
//     const mobile = e.target.mobile.value;

//     const data = {
//         Name,
//         Email,
//         mobile
//     }


//         const res = await fetch(
//       "https://script.google.com/macros/s/AKfycbwEn34mGBpqdjtY4xNT2rmXHGTSPzrynrPvsPJgFhLPCeDj9sthYlDtfyRsnH5Vrw850A/exec",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           data: [
//             [
//                data
//             ],
//           ],
//         }),
//       }
//     );

//     console.log("Form Data:",data );
//   };



  const handleSubmit = (e)=>{
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycbwEn34mGBpqdjtY4xNT2rmXHGTSPzrynrPvsPJgFhLPCeDj9sthYlDtfyRsnH5Vrw850A/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&mobile=${e.target.mobile.value}`)
    // body: (`name=${e.target.name.value}&email=${e.target.email.value}&mobile=${e.target.mobile.value}`)

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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.mobile}
            onChange={handleChange}
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
