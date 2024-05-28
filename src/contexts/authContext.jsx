/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";
import userReducer, { initialUser } from "../reducers/userReducer";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, dispatch] = useReducer(userReducer, null);
  const value = { user, dispatch };

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
