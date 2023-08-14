'use client'
import { Session_Name } from '@/constants/Constants'
import useSessionStorage from '@/hooks/useSessionStorage'
import { types } from '@/store/AuthReducer'
import { StoreContext } from '@/store/StoreProvider'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

const AuthValidation = () => {
    const { _sessionStorage, getSessionStorage } = useSessionStorage()
    const [authStore, authDispatch] = useContext(StoreContext)
    const router = useRouter();

    useEffect(() => {
        let temp = getSessionStorage(Session_Name)
        if (!(Object.keys(temp).length > 0)) {
            router.push(`/login`)
        }
        else{
            authDispatch({ type: types.authLogin, payload: temp }) 
        }
    }, [])

}

export default AuthValidation  
