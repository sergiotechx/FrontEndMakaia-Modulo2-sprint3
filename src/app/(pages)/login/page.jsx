'use client'
import React, { useContext } from 'react'
import './page.scss'
import { TextInput, PasswordInput, Button, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import Swal from 'sweetalert2'
import { login } from '@/services/login';
import { StoreContext } from '@/store/StoreProvider'
import { types } from '@/store/AuthReducer'

import { Session_Name } from '@/constants/Constants';
import useSessionStorage from '@/hooks/useSessionStorage';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [authStore, authDispatch] = useContext(StoreContext)
  const { _sessionStorage, saveInfoSessionStorage, getSessionStorage } = useSessionStorage()
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo invalido'),
      password: (value) => (value.length < 3 ? 'Debe tener almenos 3 digitos' : null),
    },
  });

  const doLogin = async (values) => {
    try {
      let userData = await login(values.email, values.password)

      if (Object.keys(userData).length > 0) {
        saveInfoSessionStorage(Session_Name, userData)
        authDispatch({ type: types.authLogin, payload: userData })
        router.push(`/`)
      }
      else {
        Swal.fire(
          'Error',
          'Credenciales erroneas',
          'error'
        )
      }
    }
    catch (error) {
      Swal.fire(
        'Error',
        error.message,
        'error'
      )
    }
  }


  return (
    <>
      <h1>Login</h1>
      <div className='LoginForm'>
        <form onSubmit={form.onSubmit((values) => doLogin(values))}>
          <TextInput
            withAsterisk
            label="Correo electrónico"
            placeholder="su@correo.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            placeholder="Clave"
            label="Clave"
            description="Debe incluie alguna letra, número y caracter especial"
            radius="xl"
            withAsterisk
            {...form.getInputProps('password')}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  )
}

export default Page   
