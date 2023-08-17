'use client'

import React, { useContext, useState } from "react";
import { StoreContext } from "@/store/StoreProvider";
import { types } from "../../../constants/Constants";
import { sendComent } from "@/services/comments";
import './page.scss'
const julian = require('julian');
// import { useRouter } from "next/router";

const Page = () => {

    const {
        comentStore,
        comentDispatch,
        authStore
    } = useContext(StoreContext);
    console.log(comentStore)
    console.log(authStore)
    // const router = useRouter();
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
        router.push(`/perfil`);
    };

    return (
        <div className='card'>
            <div>
                <figure className='imgP'>
                    <img src="/images/jennie.jpg" alt="" />
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
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet gravida tortor in habitant pellentesque a quisque. Nisl diam, amet eu est libero dignissim donec nec. Fames bibendum porta phasellus neque. Integer et lectus amet, vitae facilisis laoreet feugiat pellentesque accumsan. Turpis eget laoreet turpis urna tincidunt nisl, integer nisl. Id nec tortor vel, dui, lectus. Donec consequat dolor cursus sed pellentesque etiam ipsum, id quam. Tincidunt eu duis ullamcorper posuere augue. Arcu senectus elit, semper diam porta. Platea tempus augue ante pellentesque dictum sed vitae. Auctor dui ac bibendum lacus.
                    </p>
                </article>
                <div className='comments'>
                    {comentStore.comments.map((coment) => (
                        <span key={coment.id}>{coment.text}</span>
                    ))}
                </div>
            </div>
            <div className='newComent'>
                <figure>
                    <img src="/images/imgComent.svg" alt="img" />
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