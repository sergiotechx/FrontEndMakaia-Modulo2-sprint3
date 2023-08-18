'use client'
import './page.scss'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useSessionStorage from '@/hooks/useSessionStorage'
import { Session_Name, types } from '@/constants/Constants'
import { getHomeInitialData } from '@/services/homeInitialData'
import { Carousel } from '@mantine/carousel';
import { Avatar, Menu, Loader, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import PostPreview from '@/components/postPreview/postPreview'
import Swal from 'sweetalert2'
import { getProfileAlldata } from '@/services/profileAlldata'
import { StoreContext } from '@/store/StoreProvider'




export default function Page() {
  const { authStore, authDispatch, perfilDispatch } = useContext(StoreContext)
  const router = useRouter();

  const { getSessionStorage, deleteInfoSessionStorage } = useSessionStorage()
  const [followingUsers, setFollowingUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [opened, { open, close }] = useDisclosure(false);

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
    if (answer.isConfirmed) {
      authDispatch({ type: types.authLogout })
      deleteInfoSessionStorage(Session_Name)
      router.push(`/login`)
    }
  }

  useEffect(() => {
    loadData()
  }, [])


  const goProfile = async (userId) => {
    try {
      open()
      let { basicUserData } = await getProfileAlldata(userId)
      if (Object.keys(basicUserData).length > 0) {
        perfilDispatch({ type: types.perfilsetData, payload: basicUserData })
        close()
        router.push(`/perfil`)
      }
    }
    catch (error) {
      close()
      Swal.fire(
        'error!',
        error.message,
        'error'
      )
    }
  }

  return (
    <div className='Home_Container'>
      <Modal size={100} opened={opened} onClose={close} centered title="Cargando" withCloseButton={false}>
        <center> <Loader color="pink" size="md" variant="bars" /></center>
      </Modal>
      <div className='Home_Header'>
        <div className='Home_Header_group1'>
          <figure>
            <img src='/images/logo.png' />
          </figure>

        </div>
        <div className='Home_Header_group2'>
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

      {followingUsers.length > 0 &&
        <Carousel slideSize="15%" align="start" controlsOffset="xs" loop dragFree withControls={false}>


          <Carousel.Slide>
            <div className='Avatar_Container'>
              <Avatar radius="xl" color="blue" src='/images/yourstory.png' />
              <p>Your Story </p>
            </div >
          </Carousel.Slide>



          {followingUsers.map((user, index) =>
            <Carousel.Slide key={index}>

              <div className='Avatar_Container'>
                <Avatar radius="xs" color="blue" src={user.avatar} onClick={() => goProfile(user.id)} />
                <p>{user.name}</p>
              </div >
            </Carousel.Slide>)
          }
        </Carousel>
      }

      <div className='Home_Posts_Container'>

        {posts.length > 0 ?
          posts.map((oneMessage, index) => <PostPreview key={index} message={oneMessage} />) :

          <div className='Home_Posts_Loading'>
            <Loader color="pink" size="xl" variant="bars" />
            <h1>Cargando datos</h1>
          </div>

        }
      </div>
    </div>
  )
}
