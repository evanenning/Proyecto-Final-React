import React from 'react'
import './Hero.css';

function Hero() {
  return (
    <div class="GeneralConteiner">
      <div>
        <p class="SectionTitle">Podemos ayudarte</p>
        <p class="SectionSubtitle">Contamos con una amplia red de especialistas</p>
      
        <div class="buttons">
          <button class="btn1">Mas información</button>
          <button class="btnAlert">Contacto urgente</button>
        </div>
        </div>
        <div class="image">
          <img src="/public/brain.jpg"></img>
        </div>
    </div>
  )
}

export default Hero