import { FaCheckCircle, FaHeadset, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[#0057A6] mt-32 rounded flex items-center justify-center px-4 py-16 md:py-24">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Side - Text Content */}
        <div className="text-white w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Are the Gatekeeper Between Merchants and Merchant Services
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
            Protecting merchants, simplifying payments, and training agents to succeed — the right way. Experience personalized support with every account handled from setup to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#0057A6] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0057A6] transition-colors duration-300">
              Join the Team
            </button>
          </div>
        </div>

        {/* Right Side - Stats Card */}
        <div className="bg-white rounded-2xl w-4/5 shadow-2xl p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0057A6] mb-8">
            Trusted Payment Solutions
          </h2>
          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            Industry-leading POS systems, terminals, and merchant services with unmatched support.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#0057A6] mb-3">
                100%
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaCheckCircle className="text-green-500" />
                <span className="font-medium">Personalized Service</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#0057A6] mb-3">
                24/7
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaHeadset className="text-blue-500" />
                <span className="font-medium">Support Available</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#0057A6] mb-3">
                0%
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaDollarSign className="text-green-500" />
                <span className="font-medium">Processing Fees*</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-[#0057A6] mb-3">
                Next Day
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaCalendarAlt className="text-purple-500" />
                <span className="font-medium">Funding</span>
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