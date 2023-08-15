import React from 'react'
import { Avatar } from '@mantine/core';

const PostPreview = ({message}) => {
    return (
        <div className='PostPreview_Container'>
            <div className='PostPreview_Header' >
                <Avatar radius="xl" color="blue" src={message.user.avatar} />
                <p>{message.user.name}</p>
            </div>
            <div className='PostPreview_Image' >
               <figure>
               <img src={message.message.image}/> 
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
