// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,

//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import auth from "./firebase.config";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // start as true

//   const provider = new GoogleAuthProvider();

//   const handleGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, provider);
//   };

//   const handleLogout = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const handleRegister = (email, pass) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, pass);
//   };

//   const handleLogin = (email, pass) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, pass);
//   };

//   const resetPass = (email) => {
//     setLoading(true);
//     return sendPasswordResetEmail(auth, email);
//   };

// //   useEffect(() => {
// //     const unsub = onAuthStateChanged(auth, (currentUser) => {
// //       if (currentUser) {
// //         setUser(currentUser);
// //       } else {
// //         setUser(null);
// //       }
// //       setLoading(false); // ✅ Always stop loading after auth state check
// //     });

// //     return () => unsub();
// //   }, []);

//   const value = {
//     handleGoogle,
//     user,
//     setUser,
//     loading,
//     setLoading,
//     handleLogout,
//     handleLogin,
//     handleRegister,
//     resetPass,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;

// import React, { Children, createContext, useState } from "react";
// export const AuthContext = createContext();
// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import auth from "./firebase.config";
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // start as true

//   const provider = new GoogleAuthProvider();

//   const handleGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, provider);
//   };

//   const handleLogout = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const handleRegister = (email, pass) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, pass);
//   };

//   const handleLogin = (email, pass) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, pass);
//   };

//   const resetPass = (email) => {
//     setLoading(true);
//     return sendPasswordResetEmail(auth, email);
//   };

//   const opar = "opar";
//   const value = {
//     opar,
//     handleRegister,
//     handleLogin,
//     resetPass,
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;



import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Register new user
  const handleRegister = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Login existing user
  const handleLogin = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // Google login
  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Logout
  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Password reset
  const resetPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Keep user logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGoogle,
    resetPass,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

