import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(2);

  const value = {
    loggedUser,
    setLoggedUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
