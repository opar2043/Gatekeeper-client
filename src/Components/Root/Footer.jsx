import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🏛️</div>
              <h3 className="text-xl font-bold">GATEKEEPER</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Protecting Merchants. Empowering Agents.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded by Christine Bowers, we bring clarity, honesty, and excellence to merchant services — one merchant and one agent at a time.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Equipment</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Free Processing</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Join as Agent</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">POS Systems</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Payment Terminals</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Dual Pricing</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Cash Discount</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Agent Training</button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">Support</button>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Saturday</p>
                <p>9:00 AM - 3:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Gatekeeper Payment Solutions. All rights reserved.</p>
            <div className="flex gap-4">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <span>|</span>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;