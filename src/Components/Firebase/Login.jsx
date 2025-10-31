import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, googleLogin } = useAuth();
  const axiosSecure = useAxios();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const leftSideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 🔹 Handle login form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      toast.error("Please fill out all fields!");
      return;
    }

    handleLogin(email, password)
      .then((res) => {
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error.message || "Invalid credentials.",
          icon: "error",
          confirmButtonColor: "#0761b5",
        });
      });
  };

  // 🔹 Handle Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userObj = {
          name: user.displayName,
          email: user.email,
          role: "customer",
        };

        axiosSecure.post("/users", userObj).then(() => {
          toast.success("Logged in with Google!");
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Login Failed",
          text: error.message || "Please try again.",
          icon: "error",
          confirmButtonColor: "#0761b5",
        });
      });
  };

  return (
    <div
      className="min-h-screen mt-20 flex items-center justify-center px-4 py-10"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10"
      >
        {/* Left Section */}
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center p-6 rounded-xl"
          style={{
            background: "linear-gradient(135deg, #0761b5 0%, #054a8a 100%)",
          }}
        >
          <div className="text-center text-white">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Gatekeeper
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-white mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.6 }}
              className="text-xl mb-8"
            >
              Your Complete POS Solution
            </motion.p>

            <div className="space-y-4 text-left max-w-sm">
              {[
                {
                  title: "Real-time Analytics",
                  desc: "Track your business performance",
                },
                {
                  title: "Inventory Management",
                  desc: "Never run out of stock",
                },
                {
                  title: "Secure Payments",
                  desc: "Bank-level encryption",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 
                        0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 
                        1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.form
          onSubmit={handleSignIn}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-2"
          >
            Welcome Back
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-500 mb-8"
          >
            Sign in to continue to your dashboard
          </motion.p>

          <div className="space-y-5">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                style={{ "--tw-ring-color": "#0761b5" }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all pr-12"
                  style={{ "--tw-ring-color": "#0761b5" }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between text-sm"
            >
              <span
                className="font-semibold hover:underline cursor-pointer"
                style={{ color: "#0761b5" }}
              >
                Forgot password?
              </span>
            </motion.div>

            <motion.button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-white font-semibold py-3 rounded-lg transition-all"
              style={{ backgroundColor: "#0761b5" }}
            >
              Sign In
            </motion.button>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </motion.div>

            <motion.button
              onClick={handleGoogleLogin}
              type="button"
              variants={itemVariants}
              whileHover={{ scale: 1.02, borderColor: "#0761b5" }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 border-2 border-gray-300 hover:bg-gray-50 py-3 rounded-lg transition-all font-medium"
            >
              <FaGoogle className="text-red-500 text-xl" />
              <span>Continue with Google</span>
            </motion.button>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-gray-600 mt-6"
          >
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </motion.p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;
