"use client";
import authReducer, { initialAuthStore } from "./AuthReducer";
import userReducer, { initialUserStore } from "./PerfilReducer";
import { createContext, useReducer } from "react";
import comentReducer, { initialComentStore } from "./comentReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [authStore, authDispatch] = useReducer(authReducer, initialAuthStore);
  const [comentStore, comentDispath] = useReducer(comentReducer,initialComentStore);
  const [perfilStore, perfilDispatch] = useReducer(userReducer,initialUserStore);
  return (
    <StoreContext.Provider
      value={
        {authStore,
        authDispatch,
        comentStore,
        comentDispath,
        perfilStore,
        perfilDispatch}
      }
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };

export default StoreProvider;
