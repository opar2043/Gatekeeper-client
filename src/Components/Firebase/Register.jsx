import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

// Using your provided imgbb endpoint with key
const IMGBB_UPLOAD_URL = "https://api.imgbb.com/1/upload?key=188918a9c4dee4bd0453f7ec15042a27";

const Register = () => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.currentTarget;

      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      const city = form.city?.value;
      const mobile = form.mobile?.value;
      const company = form.company?.value;

      const gender = form.gender?.value;
      const dob = form.dob?.value;

      // File input
      const photoFile = form.photo?.files?.[0];

      // minimal client validation
      if (!photoFile) {
        throw new Error("Please upload a profile photo.");
      }
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters.");
      }

      // 1) Upload photo to imgbb
      const data = new FormData();
      data.append("image", photoFile);

      const uploadRes = await fetch(IMGBB_UPLOAD_URL, {
        method: "POST",
        body: data,
      });
      const uploadJson = await uploadRes.json();

      if (!uploadJson?.success) {
        throw new Error(uploadJson?.error?.message || "Image upload failed.");
      }

      // imgbb returns display_url and url; either works, prefer display_url if available
      const uploadedPhotoURL = uploadJson?.data?.display_url || uploadJson?.data?.url;

      // 2) Build the user object to persist in your DB
      const userObj = {
        name,
        email,
        role: "customer",
        city,
        mobile,
        company,
        gender,
        dob,                 // yyyy-mm-dd
        photoURL: uploadedPhotoURL,
        status: "active",
        createdAt: new Date().toISOString(),
        lastLoginAt: null,
      };

      // 3) Create auth user, then save to /users
      await handleRegister(email, password);
      await axiosSecure.post("/users", userObj);

      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Registration Failed",
        text: error?.response?.data?.message || error.message || "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#EAB308",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const leftPanelVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, delay: 0.2 },
    },
  };

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-4 py-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Left Side - Branding / Illustration */}
        <motion.div
          variants={leftPanelVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-[#EAB308] to-[#FCD34D] p-12 relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
          />

          <div className="relative z-10 text-center text-black">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                <FaLock className="text-5xl text-black" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-4xl font-bold mb-4 drop-shadow-lg"
            >
              Join Gatekeeper
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gray-900 max-w-sm mx-auto text-lg leading-relaxed"
            >
              Start managing your business securely and efficiently with our
              powerful tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-8 space-y-3"
            >
              {["Secure Access", "Easy Management", "24/7 Support"].map(
                (feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex items-center justify-center gap-2 text-black"
                  >
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Register Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-8 md:p-12 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#EAB308] to-[#FCD34D] bg-clip-text text-transparent mb-2">
              Create Account
            </h2>
            <p className="text-center text-gray-500">
              Join us and start your journey today!
            </p>
          </motion.div>

          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Full Name + City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="relative group">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#EAB308] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none text-gray-800 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="relative group">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#EAB308] transition-colors" />
                <input
                  type="text"
                  name="city"
                  placeholder="Enter Your City"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none text-gray-800 transition-all"
                />
              </motion.div>
            </div>

            {/* Mobile + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="relative group">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#EAB308] transition-colors" />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none text-gray-800 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="relative group">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#EAB308] transition-colors" />
                <input
                  type="text"
                  name="company"
                  placeholder="Enter Your company Name"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none text-gray-800 transition-all"
                />
              </motion.div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Gender */}
              <motion.div variants={itemVariants} className="relative group">
                <select
                  name="gender"
                  required
                  className="w-full pl-4 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none text-gray-800 transition-all"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Date of Birth */}
              <motion.div variants={itemVariants} className="relative group">
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  required
                  className="w-full pl-4 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none text-gray-800 transition-all"
                />
              </motion.div>
            </div>

            {/* Photo Upload */}
            <motion.div variants={itemVariants} className="relative group">
              <label className="block text-sm font-semibold text-gray-700">
                Upload Photo
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                required
                className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="relative group">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#EAB308] transition-colors" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none text-gray-800 transition-all"
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants} className="relative group">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#EAB308] transition-colors" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="w-full pl-11 pr-12 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none text-gray-800 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#EAB308] transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </motion.div>

            {/* Terms */}
            <motion.label
              variants={itemVariants}
              className="flex items-start gap-3 text-sm text-gray-600"
            >
              <input type="checkbox" name="accept" required className="mt-1" />
              <span>
                I agree to the <span className="text-[#EAB308]">Terms</span> and{" "}
                <span className="text-[#EAB308]">Privacy Policy</span>.
              </span>
            </motion.label>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#EAB308] to-[#FCD34D] hover:from-[#FCD34D] hover:to-[#EAB308] text-black font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                  Creating Account...
                </span>
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>

          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-gray-600 mt-6"
          >
            Already have an account?
            <Link
              to="/login"
              className="ml-1 text-[#EAB308] hover:text-[#FCD34D] font-semibold transition-colors"
            >
              Sign In
            </Link>
          </motion.p>

          {/* Mobile Branding */}
          <motion.div
            variants={itemVariants}
            className="md:hidden mt-8 pt-8 border-t border-gray-200 text-center"
          >
            <p className="text-gray-500 text-sm">
              Trusted by thousands of businesses worldwide
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
