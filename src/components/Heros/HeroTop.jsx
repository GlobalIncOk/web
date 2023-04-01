import React from 'react'
import '../../styles/HeroTop.sass'
import BudgetButton from '../Buttons/BudgetButton'

const HeroTop = () => {
  return (
    <div className='hero-top-container' id='HeroTop'>
      <div className='hero-top-layout'>
        <div className='hero-top-text'>
          <h2>Social media is the <span>new black.</span></h2>
          <p>Nunc et rhoncus vitae malesuada praesent urna nulla ultricies. Est et facilisi bibendum feugiat adipiscing duis tindcidunt semper. Risus euismod mi cursus euismod justo ac.</p>
          <BudgetButton />
        </div>
      </div>
    </div>
  )
}

export default HeroTop
