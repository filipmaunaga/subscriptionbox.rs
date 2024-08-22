import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface AuthContextType {
  user: User | null;
  logout: () => Promise<void>;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: async () => {
    throw new Error("logout method not implemented");
  },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check user authentication and get user data if logged in
    const verifyUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/auth/verify"
        );
        setUser(response.data.user); // Assuming your API returns user data
      } catch (error) {
        console.log("Error verifying user", error);
        setUser(null);
      }
    };

    verifyUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post("http://localhost:3001/api/auth/logout");
      setUser(null); // Clear user context
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
