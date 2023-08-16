import React, { useContext } from 'react'
import { Avatar } from '@mantine/core';
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { getProfileAlldata } from '@/services/profileAlldata';
import { StoreContext } from '@/store/StoreProvider';
import { types } from '@/constants/Constants';

const PostPreview = ({ message }) => {
    const router = useRouter();
    const {  perfilDispatch } = useContext(StoreContext)
   
    const goProfile = async (userId) => {
        try {
           
            let { basicUserData } = await getProfileAlldata(message.message.userId)
            if (Object.keys(basicUserData).length > 0) {
                perfilDispatch({ type: types.perfilsetData, payload: basicUserData })
                router.push(`/perfil`)
            }
        }
        catch (error) {
            Swal.fire(
                'error!',
                error.message,
                'error'
            )
        }
    }

    return (

        <div className='PostPreview_Container'>
       
            <div className='PostPreview_Header' >
                <Avatar radius="xl" color="blue" src={message.user.avatar} onClick={() => goProfile()} />
                <p>{message.user.name}</p>
            </div>
            <div className='PostPreview_Image' >
                <figure>
                    <img src={message.message.image} />
                </figure>
            </div>
            <div className='PostPreview_Text' >
                <span>

                    <strong>{message.user.name}</strong>
                    <span> {message.message.caption}</span>
                </span>
            </div>
        </div>
    )
}

export default PostPreview
