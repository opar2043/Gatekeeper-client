import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
// import toast from "react-hot-toast";
// import Swal from "sweetalert2";
// import Lottie from "lottie-react";
// import registerAnimation from "../../assets/register_animation.json";

const Register = () => {
//   const { handleRegister } = useAuth();

//   const navigate = useNavigate();
//   const axiosSecure = useAxios()

//   function handleSignUp(e) {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const pass = e.target.pass.value;

//     const userObj = {
//       name,
//       email,
//       pass,
//       role: "customer",
//     };

    // handleRegister(email, pass)
    //   .then((userCredential) => {
    //     axiosSecure.post("/users", userObj).then(() => {
    //       toast.success("You have Created an Account");
    //       navigate("/");
    //     });
    //   })
    //   .catch(() => {
    //     Swal.fire({ title: "Something went wrong", icon: "error" });
    //   });
//   }

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side - Animation + Branding */}
        <div className="hidden md:flex flex-col items-center justify-center bg-[#EAB308] p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
          <div className="relative z-10 text-center text-black">
            {/* <Lottie animationData={registerAnimation} className="w-full h-80 mb-6" /> */}
            <h2 className="text-3xl font-bold mb-3">Join Gatekeeper</h2>
            <p className="text-gray-800 max-w-sm mx-auto">
              Start managing your business securely and efficiently.
            </p>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-[#EAB308] mb-2">
            Create an Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Join us and start your journey!
          </p>

          <form onSubmit={'handleSignUp'} className="space-y-5">
            {/* Full Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#EAB308] outline-none text-gray-800"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#EAB308] outline-none text-gray-800"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#EAB308] outline-none text-gray-800"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#EAB308] hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition-all shadow-md hover:shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-5">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 text-[#EAB308] hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
