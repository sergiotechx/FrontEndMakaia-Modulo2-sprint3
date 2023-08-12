'use client'
import { Session_Name } from '@/constants/Constants'
import useSessionStorage from '@/hooks/useSessionStorage'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const AuthValidation = () => {
    const { _sessionStorage } = useSessionStorage()
    const router = useRouter();
    
    useEffect(() => {
        console.log("auth")
        // if (!(Object.keys(_sessionStorage).length > 0)) {
        //     router.push(`/login`)
        // }
    })

}

export default AuthValidation 
