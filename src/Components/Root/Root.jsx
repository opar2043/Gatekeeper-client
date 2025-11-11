import React from "react";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ChatBot from "../ChatBot/ChatBot";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1450px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Chat Bot Component */}
      <ChatBot></ChatBot>

      <Footer></Footer>
    </div>
  );
};

export default Root;