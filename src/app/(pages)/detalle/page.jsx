'use client'
import React, { useContext } from 'react'
import './page.scss'
import Reaction from '@/components/reaction/reaction'
import { StoreContext } from '@/store/StoreProvider'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter();

    const handleClik = () => {
        router.push(`/login`)
    }

    const value = useContext(StoreContext)
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
    <Reaction/>
    <div className='content'>
    <article className='descricción'>
    <p >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet gravida tortor in habitant pellentesque a quisque. Nisl diam, amet eu est libero dignissim donec nec. Fames bibendum porta phasellus neque. Integer et lectus amet, vitae facilisis laoreet feugiat pellentesque accumsan. Turpis eget laoreet turpis urna tincidunt nisl, integer nisl. Id nec tortor vel, dui, lectus. Donec consequat dolor cursus sed pellentesque etiam ipsum, id quam. Tincidunt eu duis ullamcorper posuere augue. Arcu senectus elit, semper diam porta. Platea tempus augue ante pellentesque dictum sed vitae. Auctor dui ac bibendum lacus.
    </p>
    </article>
    <div className='comments'>
        <span>Hola, que bonita foto, me parece un excelente trabajo, felicitaciones al fotografo</span>
        <span>Hola, que bonita foto, me parece un excelente trabajo, felicitaciones al fotografo</span>
    </div>
    </div>
    <div className='newComent'>
      <figure>
        <img src="/images/imgComent.svg" alt="img" />
      </figure>
      <figcaption className='newComent__text'>
        <input type="text" placeholder='Escriba un comentario a esta publicación' />
        <figure>
          <img src="/images/enviar.svg" alt="enviar" />
        </figure>
      </figcaption>
    </div>
    
    </div>
  )
}

export default Page