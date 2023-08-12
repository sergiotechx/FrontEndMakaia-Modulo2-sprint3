'use client'
import { useContext, useEffect } from 'react'
import { StoreContext } from '@/store/StoreProvider'
import { types } from '@/store/AuthReducer'

import { useRouter } from 'next/navigation'



export default function Page() {
  const router = useRouter(); 
  
  
 
    const [authStore, authDispatch] = useContext(StoreContext)
   
    return (
      <>
       
        <p>el avatar es: {authStore?.avatar}</p>
        <button onClick={() => authDispatch({ type: types.authLogout })}> salir</button>
        <button onClick={() => router.push(`/login`)}> login</button>
        <button onClick={()=>{router.push('/detalle')}}>Perfil</button>
      </>
    )
  }
