import React from 'react'
import '../../styles/HeroBottom.sass'
import BudgetButton from '../Buttons/BudgetButton'

const HeroBottom = () => {
  return (
    <div className='hero-bottom-container'>
      <div className='hero-bottom-layout'>
        <div className='hero-bottom-text'>
          <h2>Social media is the <span>new black.</span></h2>
          <div className='paragraph'>
            <p>Hoy en día la presencia en los medios sociales y plataformas digitales se volvieron fundamentales.</p>
            <p>Con la estrategia de comunicación correcta, y el equipo correcto -nosotros- podes hacer crecer tu público como nunca te imaginaste.</p>
            <p>Sumate a esta nueva tendencia para hacer crecer tu negocio.</p>
          </div>
          <BudgetButton />
        </div>
      </div>
    </div>
  )
}

export default HeroBottom
