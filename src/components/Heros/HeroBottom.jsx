import React from 'react'
import '../../styles/HeroBottom.sass'
import BudgetButton from '../Buttons/BudgetButton'

const HeroBottom = () => {
  return (
    <div className='hero-bottom-container'>
      <div className='hero-bottom-layout'>
        <div className='hero-bottom-text'>
          <h2>Lorem ipsum dolor sit amet consectetur. Arcu proin viverra</h2>
          <p>Nunc et rhoncus vitae malesuada praesent urna nulla ultricies. Est et facilisi bibendum feugiat adipiscing duis tindcidunt semper. Risus euismod mi cursus euismod justo ac.</p>
          <BudgetButton />
        </div>
      </div>
    </div>
  )
}

export default HeroBottom
