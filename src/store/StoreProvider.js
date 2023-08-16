"use client";


import React, { createContext, useReducer } from "react";
import authReducer, { initialAuthStore } from "./AuthReducer";
import userReducer, { initialUserStore } from "./PerfilReducer";
import comentReducer, { initialComentStore } from "./comentReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [authStore, authDispatch] = useReducer(authReducer, initialAuthStore);
    const [comentStore, comentDispatch] = useReducer(
        comentReducer,
        initialComentStore
    );
    const [perfilStore, perfilDispatch] = useReducer(
        userReducer,
        initialUserStore
    );

    return (
        <StoreContext.Provider
            value={[
                authStore,
                authDispatch,
                comentStore,
                comentDispatch,
                perfilStore,
                perfilDispatch,
            ]}
        >
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext };
export default StoreProvider;
