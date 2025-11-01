import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import toast from "react-hot-toast";

const DigitalSignature = () => {
  const sigCanvas = useRef({});
  const [imageURL, setImageURL] = useState(null);

  // ✅ Clear the signature
  const clearSignature = () => {
    sigCanvas.current.clear();
    setImageURL(null);
  };

  // ✅ Save the signature as a data URL
  const saveSignature = () => {
    if (sigCanvas.current.isEmpty()) {
      toast.error("Please provide a signature first!");
      return;
    }
    const signature = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setImageURL(signature);
    toast.success("Signature saved successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Digital Signature
        </h2>

        {/* Signature Pad */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg mb-4">
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            canvasProps={{
              width: 500,
              height: 200,
              className: "signature-canvas bg-white rounded-md",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-3">
          <button
            onClick={clearSignature}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Clear
          </button>
          <button
            onClick={saveSignature}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Save
          </button>
        </div>

        {/* Display Saved Signature */}
        {imageURL && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Saved Signature:</h3>
            <img
              src={imageURL}
              alt="signature"
              className="border rounded-lg mx-auto w-64"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalSignature;
