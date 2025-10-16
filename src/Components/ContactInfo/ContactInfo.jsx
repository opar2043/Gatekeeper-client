import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-[#FFFFFF] shadow-xl rounded-2xl  p-6 sm:p-8 w-11/12 mb-12 mx-auto text-center lg:p-16 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 md:mb-12">Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 text-base">
        {/* Location */}
        <div className="flex flex-col items-center bordern shadow p-6 rounded-lg hover:shadow-lg transition-shadow">
          <MapPin className="text-blue-600 w-6 h-6 mb-2" />
          <p className="font-bold text-slate-900">Location</p>
          <p className="text-gray-600">New Orleans, Louisiana</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bordern shadow p-6 rounded-lg hover:shadow-lg transition-shadow">
          <Phone className="text-red-600 w-6 h-6 mb-2" />
          <p className="font-bold text-slate-900">Phone</p>
          <p className="text-gray-600">504-577-0377</p>
        </div>

        {/* Email */}
       <div className="flex flex-col items-center bordern shadow p-6 rounded-lg hover:shadow-lg transition-shadow">
          <Mail className="text-gray-600 w-6 h-6 mb-2" />
          <p className="font-bold text-slate-900">Email</p>
          <a
            href="mailto:info@gatekeeperprocessing.com"
            className="text-blue-600 hover:underline"
          >
            info@gatekeeperprocessing.com
          </a>
        </div>

        {/* Website */}
        <div className="flex flex-col items-center bordern shadow p-6 rounded-lg hover:shadow-lg transition-shadow">
          <Globe className="text-orange-600 w-6 h-6 mb-2" />
          <p className="font-bold text-slate-900">Website</p>
          <a
            href="https://www.gatekeeperprocessing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.gatekeeperprocessing.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
