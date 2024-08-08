import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(null);

  const value = {
    loggedUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
