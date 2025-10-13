import { FaCheckCircle, FaHeadset, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[#0057A6] mt-28  flex items-center justify-between px-4 py-12 md:py-20">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="text-white w-full">
          <h1 className="text-2xl md:text-6xl font-bold mb-6">
            We Are the Gatekeeper Between Merchants and Merchant Services
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
            Protecting merchants, simplifying payments, and training agents to succeed — the right way. Experience personalized support with every account handled from setup to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#003087] text-white px-8 py-4 rounded-full font-semibold text-md transition-colors duration-300 shadow-lg hover:bg-white hover:text-[#0057A6]">
              Get Started →
            </button>
            <button className="bg-white text-[#003087] px-8 py-4 rounded-full font-semibold text-md transition-colors duration-300 shadow-lg hover:bg-[#003087] hover:text-white">
              Join the Team
            </button>
          </div>
        </div>

        {/* Right Side - Stats Card */}
        <div className="bg-white rounded-2xl w-4/5 shadow-2xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#0057A6] mb-3 ">
            Trusted Payment Solutions
          </h2>
          <p className="text-gray-600/80 text-md  mb-10 leading-relaxed font-semibold">
            Industry-leading POS systems, terminals, and merchant services with unmatched support.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-[#0057A6] mb-3">
                100%
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                
                <span className="font-medium text-sm text-gray-500">Personalized Service</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-[#0057A6] mb-3">
                24/7
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <span className="font-medium text-md text-gray-500">Support Available</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-[#0057A6] mb-3">
                0%
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <span className="font-medium text-md text-gray-500">Processing Fees*</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-[#0057A6] mb-3">
                Next Day
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <span className="font-medium text-md text-gray-500">Funding</span>
              </div>
            </div>
          </div>

          {/* Optional Footer Note */}
          <p className="text-xs text-gray-500 mt-6 text-center">
            *Terms and conditions apply
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;