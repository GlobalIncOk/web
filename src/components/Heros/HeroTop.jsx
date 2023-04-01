import React from 'react'
import '../../styles/HeroTop.sass'
import BudgetButton from '../Buttons/BudgetButton'

const HeroTop = () => {
  return (
    <div className='hero-top-container' id='HeroTop'>
      <div className='hero-top-layout'>
        <div className='hero-top-text'>
          <h2>Social media is the <span>new black.</span></h2>
          <p>La comunicación en redes sociales se ha vuelto primordial para hacer crecer tu negocio.
            Junto con una buena estrategia y plan de comunicación, el éxito no tiene límite.</p>
          <BudgetButton />
        </div>
      </div>
    </div>
  )
}

export default HeroTop
