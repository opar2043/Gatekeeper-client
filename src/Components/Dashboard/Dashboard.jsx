import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser, FaRegClipboard, FaDatabase, FaWpforms } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div
        className="md:w-64 w-full bg-gradient-to-b from-[#1562B1] to-[#1E88E5] text-white p-6 space-y-4 shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <MdSpaceDashboard size={28} />
          <h2 className="text-2xl font-bold tracking-wide">Gatekeeper</h2>
        </div>

        {/* Navigation */}
        <ul className="space-y-3 text-white text-base">
          <li>
            <Link
              to="/dashboard/overview"
              className="flex items-center gap-2 hover:bg-blue-700/60 transition-all duration-300 rounded px-3 py-2"
            >
              <FaRegClipboard size={20} /> Overview
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/all-users"
              className="flex items-center gap-2 hover:bg-blue-700/60 transition-all duration-300 rounded px-3 py-2"
            >
              <FaUser size={20} /> User Management
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/payment-data"
              className="flex items-center gap-2 hover:bg-blue-700/60 transition-all duration-300 rounded px-3 py-2"
            >
              <FaWpforms size={20} /> Payment Form
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/merchant-data"
              className="flex items-center gap-2 hover:bg-blue-700/60 transition-all duration-300 rounded px-3 py-2"
            >
              <FaWpforms size={20} /> Merchant Form
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/recuring-data"
              className="flex items-center gap-2 hover:bg-blue-700/60 transition-all duration-300 rounded px-3 py-2"
            >
              <FaWpforms size={20} /> Recuring Form
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded px-3 py-2"
            >
              <AiOutlineHome size={20} /> Back to Home
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
