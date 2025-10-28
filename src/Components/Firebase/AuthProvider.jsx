import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,

  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // start as true

  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleRegister = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const handleLogin = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const resetPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         setUser(null);
//       }
//       setLoading(false); // ✅ Always stop loading after auth state check
//     });

//     return () => unsub();
//   }, []);

  const value = {
    handleGoogle,
    user,
    setUser,
    loading,
    setLoading,
    handleLogout,
    handleLogin,
    handleRegister,
    resetPass,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

