'use client'
import { createContext, useReducer } from "react";
import authReducer, { initialAuthStore } from "./AuthReducer";
import comentReducer, { initialComentStore } from "./UserReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [authStore, authDispatch] = useReducer(authReducer, initialAuthStore)
    const [comentStore, comentDispath] = useReducer(comentReducer, initialComentStore)
    return (
        <StoreContext.Provider value={[authStore, authDispatch,usersStore,usersDispatch,userStore, userDispatch, comentStore, comentDispath]}>
            {children}
        </StoreContext.Provider> 
    )
}

export { StoreContext}

export default StoreProvider 
