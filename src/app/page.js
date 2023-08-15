'use client'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '@/store/StoreProvider'
import { types } from '@/store/AuthReducer'
import { useRouter } from 'next/navigation'
import useSessionStorage from '@/hooks/useSessionStorage'
import { Session_Name } from '@/constants/Constants'
import { getHomeInitialData } from '@/services/homeInitialData'
import { Carousel } from '@mantine/carousel';
import { Avatar, Menu,Loader  } from '@mantine/core';
import './page.scss'
import PostPreview from '@/components/postPreview/postPreview'
import Swal from 'sweetalert2'



export default function Page() {
  const router = useRouter();
  const [authStore, authDispatch] = useContext(StoreContext)
  const { _sessionStorage, getSessionStorage,deleteInfoSessionStorage } = useSessionStorage()
  const [followingUsers, setFollowingUsers] = useState([])
  const [posts, setPosts] = useState([])

  const loadData = async () => {

    let temp = getSessionStorage(Session_Name)

    if (Object.keys(temp).length > 0) {
      let { messages, followingUsers } = await getHomeInitialData(temp)
      setPosts(messages)
      setFollowingUsers(followingUsers)
    }
  }
  const doCloseSession = async () => {
    let answer = await Swal.fire({
      title: 'Desea cerra la sesión',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    })
    if(answer.isConfirmed){
      authDispatch({ type: types.authLogout })
      deleteInfoSessionStorage(Session_Name)
      router.push(`/login`)
    } 
  }

  useEffect(() => { 
    loadData()
  }, [])


  return (
    <div className='Home_Container'>
      <div className='Home_Header1'>
        <div className='Home_Header1_group1'>
          <figure>
            <img src='/images/logo.png' />
          </figure>

        </div>
        <div className='Home_Header1_group2'>
          <figure id='header1_like'>
            <img src='/images/like.png' />
          </figure>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <figure id='header1_logout'>
                <img src='/images/logout.png' />
              </figure>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => { doCloseSession() }}>Cerrar Sesión</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
      <Carousel slideSize="15%" height={200} align="start" controlsOffset="xs" loop dragFree withControls={false}>

        <div className='Avatar_Container'>
          <Carousel.Slide>
            <div className='Avatar_Container'>
              <Avatar radius="xl" color="blue" src='/images/yourstory.png' />
              <p>Your Story </p>
            </div >
          </Carousel.Slide>

        </div>
        {followingUsers?.map != undefined? 
          followingUsers.map(user =>
            <Carousel.Slide>
              <div className='Avatar_Container'>
                <Avatar radius="xs" color="blue" src={user.avatar} />
                <p>{user.name}</p>
              </div >
            </Carousel.Slide>)
            :
            <Loader color="pink" size="xl" variant="bars" />
        }
      </Carousel>
      <div className='Home_Posts_Container'>
        {posts?.length > 0? 
          posts.map((oneMessage) => <PostPreview message={oneMessage} />):
          <Loader color="pink" size="xs" variant="bars" />
        }
      </div>




   
      <button onClick={() => { router.push('/detalle') }}>Perfil</button>
    </div>
  )
}
