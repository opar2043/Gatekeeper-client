import React from "react";
import useAuth from "./useAuth";
import useUser from "./useUser";

const useAdmin = () => {
  const { user } = useAuth();
  const [users] = useUser();

  // Safely find user by email
  const matchedUser = users?.find((u) => u.email === user?.email);

  // Return boolean safely
  const admin = matchedUser?.role === "admin";

  return {admin};
};

export default useAdmin;
