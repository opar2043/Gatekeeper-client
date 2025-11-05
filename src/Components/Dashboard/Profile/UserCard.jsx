import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 }
  },
};

const item = {
  hidden: { y: 6, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 160, damping: 18 } },
};

const val = (v) =>
  v === null || v === undefined || String(v).trim() === "" ? "N/A" : v;

const formatDate = (iso) => {
  if (!iso) return "N/A";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "N/A";
  return d.toLocaleDateString();
};

const getInitials = (name) => {
  if (!name) return "U";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map(p => p[0]?.toUpperCase()).join("") || "U";
};

const UserCard = ({ data }) => {
  const {
    name,
    city,
    company,
    createdAt,
    dob,
    email,
    gender,
    lastLoginAt,
    mobile,
    photoURL,
    role,
    status,
    nid,       // adjust if your backend uses a different key
    address,
    _id,
  } = data || {};

  const initials = getInitials(name);

  const rows = [
    { label: "Email", value: val(email) },
    { label: "Mobile", value: val(mobile) },
    { label: "Gender", value: val(gender) },
    { label: "Date of Birth", value: formatDate(dob) },
    { label: "City", value: val(city) },
    { label: "Company", value: val(company) },
    { label: "Address", value: val(address) },
    { label: "NID / Passport", value: val(nid) },
    { label: "Role", value: val(role) },
    { label: "Status", value: val(status) },
    { label: "Created At", value: formatDate(createdAt) },
    { label: "Last Login", value: lastLoginAt ? formatDate(lastLoginAt) : "N/A" },
    { label: "User ID", value: val(_id) },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full md:w-[60%] bg-white rounded-xl border border-blue-100 shadow-sm"
    >
      {/* top: avatar + name + city */}
      <div className="px-6 pt-6 pb-4 flex flex-col items-center text-center">
        {/* avatar */}
        <div className="relative">
          {photoURL ? (
            <motion.img
              variants={item}
              src={photoURL}
              alt="avatar"
              onError={(e) => { e.currentTarget.src = ""; }}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-blue-500/80"
            />
          ) : (
            <motion.div
              variants={item}
              className="w-20 h-20 rounded-full grid place-items-center bg-blue-50 ring-2 ring-blue-500/80"
            >
              <span className="text-blue-700 font-semibold text-xl">
                {initials}
              </span>
            </motion.div>
          )}
        </div>

        {/* name */}
        <motion.h2
          variants={item}
          className="mt-4 text-lg font-semibold text-slate-900"
          title={val(name)}
        >
          {val(name)}
        </motion.h2>

        {/* city */}
        <motion.p
          variants={item}
          className="text-sm text-slate-500"
        >
          {val(city)}
        </motion.p>
      </div>

      {/* divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

      {/* info grid */}
      <motion.div
        variants={container}
        className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {rows.map((row) => (
          <motion.div
            key={row.label}
            variants={item}
            className="rounded-lg border border-blue-100 px-3 py-2 bg-white hover:border-blue-200 transition"
          >
            <p className="text-[0.7rem] uppercase tracking-wide text-blue-600/80">
              {row.label}
            </p>
            <p className="font-medium text-slate-800 break-words">
              {row.value}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UserCard;
