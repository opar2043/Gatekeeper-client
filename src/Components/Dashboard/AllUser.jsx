import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from local JSON
  useEffect(() => {
    fetch("/user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error loading users:", error));
  }, []);

  // Handle role change (Admin <-> Agent)
  const handleRoleChange = (email) => {
    const updatedUsers = users.map((user) => {
      if (user.email === email) {
        const newRole = user.role === "admin" ? "agent" : "admin";
        toast.success(`${user.name} is now ${newRole.toUpperCase()}!`, {
          iconTheme: {
            secondary: "#fff",
          },
        });
        return { ...user, role: newRole };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="p-6">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-2xl font-semibold mb-4 text-[#1562B1]">
        All Users
      </h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-[#1562B1] text-white">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.email}
                className="text-center hover:bg-blue-50 transition-all"
              >
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border font-medium">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td
                  className={`px-4 py-2 border font-semibold ${
                    user.role === "admin" ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  {user.role}
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleRoleChange(user.email)}
                    className="px-3 py-1 bg-[#1562B1] text-white rounded hover:bg-blue-700 transition-all"
                  >
                    Switch to {user.role === "admin" ? "Agent" : "Admin"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
