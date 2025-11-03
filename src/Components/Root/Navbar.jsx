import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMail, FiClock, FiMessageCircle, FiMenu, FiX, FiHome, FiUser } from "react-icons/fi";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    handleLogout()
      .then(() => {
        toast.success("Logout Success");
        navigate("/");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = `before:w-0 mx-4 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] text-black hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize font-semibold text-gray-800`;

  const location = useLocation();
  const hide = ["/login", "/register"];
  const hideRoute = hide.includes(location.pathname);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Upper Navbar */}
      <div
        className={`bg-[#003087] text-white/90 px-4 md:px-8 transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto py-2 opacity-100"
        }`}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-7 text-xs font-bold md:text-sm py-1">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={16} className="text-red-500" />
            <span>504-577-0377</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail size={16} />
            <span>info@gatekeeperprocessing.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock size={16} />
            <span>Mon-Fri: 9AM-6PM | Sat: 9AM-3PM</span>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="bg-white shadow-md px-4 md:px-10 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#003DA5] rounded flex items-center justify-center">
              <FiHome className="text-white" size={22} />
            </div>
            <span className="md:text-2xl text-lg font-bold text-[#003DA5]">GATEKEEPER</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link to="/" className={navLinkStyle}>Home</Link>
            {!hideRoute && <a href="#about" className={navLinkStyle}>About</a>}
            {!hideRoute && <a href="#equipment" className={navLinkStyle}>Equipment</a>}
            {!hideRoute && <a href="#forms" className={navLinkStyle}>Forms</a>}
            {!hideRoute && <a href="#contact" className={navLinkStyle}>Contact</a>}
            {user && <Link to="/dashboard" className={navLinkStyle}>Dashboard</Link>}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            {user ? (
              <button
                onClick={logOut}
                className="flex items-center gap-2 bg-[#ffca39] hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-300"
              >
                <FiUser size={18} /> Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="flex items-center gap-2 bg-[#FFC439] hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-300">
                  <FiMessageCircle size={18} /> Be a Gatekeeper Agent
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile CTA Button */}
            {user ? (
              <button
                onClick={logOut}
                className="flex items-center gap-2 bg-[#ffca39] hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full transition-colors duration-300"
              >
                <FiUser size={18} /> Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="flex items-center gap-2 bg-[#FFC439] hover:bg-yellow-500 text-black font-semibold px-4 py-2 text-xs rounded-full transition-colors duration-300">
                  <FiMessageCircle size={15} /> Login Agent
                </button>
              </Link>
            )}

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
            <a href="#home" className="px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#equipment" className="px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Equipment</a>
            <a href="#forms" className="px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Forms</a>
            <a href="#contact" className="px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Contact</a>
            {user && (
              <Link to="/dashboard" className="px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
            )}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
