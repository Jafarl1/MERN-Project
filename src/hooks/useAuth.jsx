import { useContext } from "react";
import { AuthContext } from "../contexts/auth/Auth";

export const useAuth = () => useContext(AuthContext);
