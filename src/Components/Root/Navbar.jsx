import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiMail,
  FiClock,
  FiMessageCircle,
  FiMenu,
  FiX,
  FiHome,
} from "react-icons/fi";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = `before:w-0 mx-4 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] text-black hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize font-semibold text-gray-800`;
  const location = useLocation();
  const hide = ["/login", "/register"];
  const hideRoute = hide.includes(location.pathname);
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Upper Navbar (Blue - Hides on scroll) */}
      <div
        className={`bg-[#003087] text-white/90 px-4 md:px-8 transition-all duration-300 ${
          isScrolled
            ? "h-0 overflow-hidden opacity-0"
            : "h-auto py-2 opacity-100"
        }`}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-7 text-xs font-bold md:text-sm py-1">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={16} className="text-red-500" />
            <span>504-577-0377</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail size={16} className="text-white" />
            <span>info@gatekeeperprocessing.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock size={16} className="text-white" />
            <span>Mon-Fri: 9AM-6PM | Sat: 9AM-3PM</span>
          </div>
        </div>
      </div>

      {/* Lower Navbar (White - Always visible) */}
      <div className="bg-white shadow-md px-4 md:px-10 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#003DA5] rounded flex items-center justify-center">
              <FiHome className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-[#003DA5]">
              GATEKEEPER
            </span>
          </Link>

          {/* Navigation Links - Desktop */}

          <nav className="hidden lg:flex items-center gap-2">
            <Link to={"/"} className={navLinkStyle}>
              Home
            </Link>
            {!hideRoute && (
              <a href="#about" className={navLinkStyle}>
                About
              </a>
            )}
            {!hideRoute && (
              <a href="#equipment" className={navLinkStyle}>
                Equipment
              </a>
            )}
            {!hideRoute && (
              <a href="#forms" className={navLinkStyle}>
                Forms
              </a>
            )}
            {!hideRoute && (
              <a href="#contact" className={navLinkStyle}>
                Contact
              </a>
            )}
            {/* <a href="#agents" className={navLinkStyle}>
              Agents
            </a> */}
            <Link to={"/dashboard"} className={navLinkStyle}>
              Dashboard
            </Link>
          </nav>
          {/* CTA Button - Desktop */}
          <Link to="/login">
            <button className="hidden lg:flex items-center gap-2 bg-[#FFC439] hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-300">
              <FiMessageCircle size={18} className="text-white" />
              Be a Gatekeeper Agent
            </button>
          </Link>

          {/* Mobile Menu Button & CTA */}
          <div className="lg:hidden flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#FFC439] hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full transition-colors duration-300 text-sm">
              <FiMessageCircle size={16} />
              Ask
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#003DA5]"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* ✅ Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <a
                href="#home"
                className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#equipment"
                className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipment
              </a>
              <a
                href="#forms"
                className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Forms
              </a>
              <a
                href="#contact"
                className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            <Link to={"/dashboard"} className={navLinkStyle}>
              Dashboard
            </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
