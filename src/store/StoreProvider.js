"use client";
import { createContext, useReducer } from "react";
import authReducer, { initialAuthStore } from "./AuthReducer";
import usersReducer, { initialUsersStore } from "./UsersReducer";
import userReducer, { initialUserStore } from "./UserReducer";
import userReducer, { initialUserStore } from "./PerfilReducer";
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [authStore, authDispatch] = useReducer(authReducer, initialAuthStore);
  const [perfilStore, perfilDispatch] = useReducer(
    userReducer,
    initialUserStore
  );

  return (
    <StoreContext.Provider
      value={[authStore, authDispatch, perfilStore, perfilDispatch]}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };

export default StoreProvider;
