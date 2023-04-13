import React from 'react'
import { HeroTopCurve } from '../../assets'
import '../../styles/HeroTop.sass'
import BudgetButton from '../Buttons/BudgetButton'

const HeroTop = () => {
  return (
    <div className='hero-top-container' id='HeroTop'>
      <div className='hero-top-layout'>
        <div className='hero-top-text'>
          <h2>Social media is the</h2>
          <h2><span>new black.</span></h2>
          <div className='paragraph'>
            <p>Hoy en día la presencia en los medios sociales y plataformas digitales se volvieron fundamentales.</p>
            <p>Con la estrategia de comunicación correcta, y el equipo correcto -nosotros- podes hacer crecer tu público como nunca te imaginaste.</p>
            <p>Sumate a esta nueva tendencia the new black para hacer crecer tu negocio.</p>
          </div>
          <BudgetButton />
        </div>
        <div className='hero-image'></div>
      </div>
      <HeroTopCurve />
    </div>
  )
}

export default HeroTop
