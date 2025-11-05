import React from 'react'
import useAuth from '../../Hooks/useAuth'
import useUser from '../../Hooks/useUser';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, Calendar, User } from 'lucide-react';

const Profile = () => {
  // Sample data (replace with your actual personalInfo)
  // const personalInfo = {
  //   city: "Narayanganj",
  //   company: "Janata Bank",
  //   createdAt: "2025-11-05T06:47:39.573Z",
  //   dob: "2014-02-20",
  //   email: "opar@gmail.com",
  //   gender: "female",
  //   lastLoginAt: null,
  //   mobile: "01814482832",
  //   name: "Rijoan Rashid Opar",
  //   photoURL: "https://i.ibb.co.com/DZJ6FTL/gadjet.jpg",
  //   role: "customer"
  // };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };


    const {user : users} = useAuth();
  const [user] = useUser();

  console.log(user);
  console.log(users);
  const personalInfo = user?.find(u => u.email === users?.email);
  console.log(personalInfo);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.1 }
    },
    hover: { scale: 1.08, transition: { duration: 0.3 } }
  };

  const infoItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.15 + i * 0.06 }
    }),
    hover: { x: 4, transition: { duration: 0.2 } }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const infoData = [
    { icon: Mail, label: 'Email', value: personalInfo.email },
    { icon: Phone, label: 'Phone', value: personalInfo.mobile },
    { icon: MapPin, label: 'Location', value: personalInfo.city },
    { icon: Briefcase, label: 'Company', value: personalInfo.company },
    { icon: Calendar, label: 'Date of Birth', value: formatDate(personalInfo.dob) },
    { icon: User, label: 'Gender', value: personalInfo.gender }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
          My Profile
        </h2>
        <p className="text-center text-gray-600 mt-2">Your professional information</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 sticky top-8">
              {/* Header Gradient */}
              <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600"></div>

              {/* Profile Image */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex justify-center -mt-12 mb-4"
              >
                <img
                  src={personalInfo.photoURL || 'https://i.ibb.co/DZJ6FTL/gadjet.jpg'}
                  alt={personalInfo.name || 'N/A'}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
                />
              </motion.div>

              {/* Profile Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center px-4 pb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 line-clamp-2">
                  {personalInfo.name || 'N/A'}
                </h3>
                <p className="text-blue-600 font-semibold capitalize mt-1 text-sm">
                  {personalInfo.role || 'N/A'}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Member since {formatDate(personalInfo.createdAt || new Date())}
                </p>
              </motion.div>

              {/* Action Button */}
              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-4/5 mx-auto block mb-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-md transition-all duration-300"
              >
                Edit Profile
              </motion.button> */}
            </div>
          </motion.div>

          {/* Right Column - Details Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded mr-3"></div>
                Personal Information
              </h4>

              {/* Info Grid - 2 columns on mobile, 3 on tablet, 2 on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                {infoData.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={infoItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {item.label || 'N/A'}
                          </p>
                          <p className="text-sm md:text-base text-gray-800 font-medium mt-1 truncate hover:text-clip">
                            {item.value || 'N/A'}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Info Section */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 pt-8 border-t border-blue-100"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-blue-600">
                      {personalInfo.role === 'customer' ? '★★★★' : '★★★★★'}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-blue-600">24</p>
                    <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-blue-600">98%</p>
                    <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">Trust</p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;