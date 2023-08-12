'use client'
import { createContext, useReducer } from "react";
import authReducer, { initialAuthStore } from "./AuthReducer";
import usersReducer, { initialUsersStore } from "./UsersReducer";
import userReducer, { initialUserStore } from "./UserReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [authStore, authDispatch] = useReducer(authReducer, initialAuthStore)
    const [usersStore, usersDispatch] = useReducer(usersReducer, initialUsersStore)
    const [userStore, userDispatch] = useReducer(userReducer, initialUserStore)
    return (
        <StoreContext.Provider value={[authStore, authDispatch,usersStore,usersDispatch,userStore, userDispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext}

export default StoreProvider 