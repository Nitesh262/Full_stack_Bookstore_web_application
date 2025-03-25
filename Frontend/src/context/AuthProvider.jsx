import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users")
    ? JSON.parse(localStorage.getItem("Users"))
    : null;

  const [authUser, setAuthUser] = useState(initialAuthUser);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
