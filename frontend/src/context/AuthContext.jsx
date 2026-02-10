// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/Firebase"; // Make sure this path is correct!
import { onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";

// 1. Create the Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sync Firebase user with MongoDB
  const syncWithMongo = async (firebaseUser, username) => {
    try {
      await axios.post("http://localhost:3000/api/user/sync", {
        firebaseId: firebaseUser.uid,
        email: firebaseUser.email,
        username: username || firebaseUser.displayName || "New User",
      });
    } catch (err) {
      console.error("MongoDB Sync Error:", err);
    }
  };

  useEffect(() => {
    // 2. Track Auth State
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, syncWithMongo, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 3. Export the custom hook so Home.jsx can use it
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
