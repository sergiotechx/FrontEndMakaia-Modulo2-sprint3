import React from 'react'
import './reaction.scss'

const Reaction = () => {
  return (
    <div className='reaction'>
        <figcaption className='reaction__user'>
            <figure>
                <img src="/images/jennieChi.png" alt="reactionimg" />
            </figure>
            <h4>Jennie kim</h4>
        </figcaption>
        <figcaption className='reaction__items'>
            <figure>
                <img src="/images/like.svg" alt="like" />
            </figure>
            <h4>108 K</h4>
        </figcaption>
        <figcaption className='reaction__items'>
            <figure>
                <img src="/images/coments.svg" alt="coment" />
            </figure>
            <h4>64 K</h4>
        </figcaption>
        <figcaption className='reaction__items'>
            <figure>
                <img src="/images/share.svg" alt="share" />
            </figure>
            <h4>2 K</h4>
        </figcaption>

    </div>

  )
}

export default Reaction