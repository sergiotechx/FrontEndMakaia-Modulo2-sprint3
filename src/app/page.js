'use client'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '@/store/StoreProvider'
import { types } from '@/store/AuthReducer'
import { useRouter } from 'next/navigation'
import useSessionStorage from '@/hooks/useSessionStorage'
import { Session_Name } from '@/constants/Constants'
import { getHomeInitialData } from '@/services/homeInitialData'
import { Carousel } from '@mantine/carousel';
import { Avatar } from '@mantine/core';



export default function Page() {
  const router = useRouter();
  const [authStore, authDispatch] = useContext(StoreContext)
  const { _sessionStorage, getSessionStorage } = useSessionStorage()
  const [followingUsers, setFollowingUsers] = useState([])
  const [posts, setPosts] = useState([])

  const loadData = async () => {

    let temp = getSessionStorage(Session_Name)

    if (Object.keys(temp).length > 0) {
      let { messages, followingUsers } = await getHomeInitialData(temp)
      setPosts(messages)
      setFollowingUsers(followingUsers)
      console.log('a quien sigo', followingUsers)
      console.log('los mensajes',messages)
    }

  }

  useEffect(() => { 
    loadData()
  }, [])


  return (
    <>
      <Carousel slideSize="10%" height={200} align="start" controlsOffset="xs" loop dragFree withControls={false}>
        {followingUsers?.map != undefined &&
          followingUsers.map(user => <Carousel.Slide>
            <Avatar radius="xl" size="sm" color="blue" src={user.avatar} />
          </Carousel.Slide>)
        }
      </Carousel>

      {console.log('el contenido es',authStore)}
      <p>{authStore?.email}</p>
      <button onClick={() => authDispatch({ type: types.authLogout })}> salir</button>
      <button onClick={() => router.push(`/login`)}> login</button>
      <button onClick={() => { router.push('/detalle') }}>Perfil</button>
    </>
  )
}
