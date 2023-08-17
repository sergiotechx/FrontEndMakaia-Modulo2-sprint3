import React, { useContext } from 'react'
import { Avatar } from '@mantine/core';
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { getProfileAlldata } from '@/services/profileAlldata';
import { StoreContext } from '@/store/StoreProvider';
import { types } from '@/constants/Constants';
import { getPostComments } from '@/services/primitives';

const PostPreview = ({ message }) => {
    const router = useRouter();
    const { perfilDispatch, comentDispatch } = useContext(StoreContext)

    const goProfile = async () => {
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
    const goComment = async () => {
        try {
            let comments = await getPostComments(message.message.id)
            let post = {
                postId: message.message.id,
                userId: message.message.userId,
                image: message.message.image
            }
            let temData = { comments, post: post }
            console.log("la data para enviar a comment inicial", temData)
            comentDispatch({ type: types.setComent, payload: temData })
            router.push(`/detalle`)
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
                <figure onClick={() => goComment()}>
                    <img src={message.message.image} />
                </figure>
            </div>
            <div className='PostPreview_Text' onClick={() => goComment()}>
                <span>

                    <strong>{message.user.name}</strong>
                    <span> {message.message.caption}</span>
                </span>
            </div>
        </div>
    )
}

export default PostPreview
