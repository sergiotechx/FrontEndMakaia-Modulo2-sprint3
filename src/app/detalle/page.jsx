'use client'
import React from 'react'

import './page.scss'
import Reaction from '@/components/reaction/reaction'

const Page = () => {
  return (
    <div className='card'>
    <div>
      <figure className='imgP'>
        <img src="/images/jennie.jpg" alt="" />
      </figure>
      <figure className='back'>
        <img src="/images/back.svg" alt="back" />
      </figure>
      <figure className='option'>
        <img src="/images/puntosM.svg" alt="" />
      </figure>
    </div>
    <Reaction/>
    <article className='coment'>
    <p >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet gravida tortor in habitant pellentesque a quisque. Nisl diam, amet eu est libero dignissim donec nec. Fames bibendum porta phasellus neque. Integer et lectus amet, vitae facilisis laoreet feugiat pellentesque accumsan. Turpis eget laoreet turpis urna tincidunt nisl, integer nisl. Id nec tortor vel, dui, lectus. Donec consequat dolor cursus sed pellentesque etiam ipsum, id quam. Tincidunt eu duis ullamcorper posuere augue. Arcu senectus elit, semper diam porta. Platea tempus augue ante pellentesque dictum sed vitae. Auctor dui ac bibendum lacus.
    </p>
    </article>
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
