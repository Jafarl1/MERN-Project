import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(1);

  const value = {
    loggedUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
