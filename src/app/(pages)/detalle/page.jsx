'use client'

import React, { useContext, useState } from "react";
import { StoreContext } from "@/store/StoreProvider";
import { types } from "../../../constants/Constants";
import { sendComent } from "@/services/comments";
import './page.scss'
const julian = require('julian');
import { useRouter } from "next/navigation";

const Page = () => {

    const {
        comentStore,
        comentDispatch,
        authStore
    } = useContext(StoreContext);
    console.log(comentStore)
    console.log(authStore)
    const router = useRouter();
    const [newComent, setNewComent] = useState("");

   
    

    const handleComentSubmit = async () => {
        const now = new Date();
        if (newComent.trim() !== "") {
            await sendComent(comentStore.post.postId,    authStore.id, newComent);
            console.log(newComent); 
            console.log(comentStore);
            const newComentObject = {
                id: comentStore.comments.length + 1,
                postId: comentStore.post.postId, 
                userId: authStore.id, 
                text: newComent,
                timestamp: Number(julian(now)),
            };

            comentDispatch({
                type: types.addComent,
                payload: newComentObject,
            });

            setNewComent("");
        }
    };

    const handleClik = () => {
        router.push(`/`);
    };
    //

    return (
        <div className='card'>
            <div>
                <figure className='imgP'>
                    <img src={comentStore.post.image} alt="" />
                </figure>
                <figure className='back' onClick={handleClik}>
                    <img src="/images/back.svg" alt="back" />
                </figure>
                <figure className='option'>
                    <img src="/images/puntosM.svg" alt="" />
                </figure>
            </div>
            <div className='content'>
                <article className='descricción'>
                    <p>{comentStore.post.caption}</p>
                </article>
                <div className='comments'>
                    {comentStore.comments.map((coment,index) => (
                        <div className="comentF" key ={index}>
                        <img key ={index} src={authStore.avatar} alt="" />
                        <span key={coment.id}>{coment.text}</span>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className='newComent'>
                <figure className="imgAvatar">
                    <img src={authStore.avatar} alt="img" />
                </figure>
                <figcaption className='newComent__text'>
                    <input
                        type="text"
                        placeholder='Escriba un comentario a esta publicación'
                        value={newComent}
                        onChange={(e) => setNewComent(e.target.value)}
                    />
                    <figure onClick={handleComentSubmit}>
                        <img src="/images/enviar.svg" alt="enviar" />
                    </figure>
                </figcaption>
            </div>
        </div>
    );
};

export default Page;