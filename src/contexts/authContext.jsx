/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer, useState } from "react";
import userReducer, { initialUser } from "../reducers/userReducer";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, dispatch] = useReducer(userReducer, null);
  const [requireAssistant, setRequireAssistant] = useState(false)
  const value = { user, dispatch,requireAssistant, setRequireAssistant };

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
