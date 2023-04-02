import React from 'react'
import '../../styles/HeroBottom.sass'
import BudgetButton from '../Buttons/BudgetButton'

const HeroBottom = () => {
  return (
    <div className='hero-bottom-container'>
      <div className='hero-bottom-layout'>
        <div className='hero-bottom-text'>
          <h2>Social media is the <span>new black.</span></h2>
          <p>La comunicación en redes sociales se ha vuelto primordial para hacer crecer tu negocio.
            Junto con una buena estrategia y plan de comunicación, el éxito no tiene límite.</p>
          <BudgetButton />
        </div>
      </div>
    </div>
  )
}

export default HeroBottom
