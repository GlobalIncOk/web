import React from 'react'
import '../../styles/UsCard.sass'
import { FaAppStore } from 'react-icons/fa'

const UsCard = () => {
  return (
    <div className='us-list'>
      <div className='us-card-container'>
        <FaAppStore className='us-image' />
        <h1>Pedro Lantaron</h1>
        <h1>CEO</h1>
        <p>“El crecimiento digital es infinito”</p>
      </div>

      <div className='us-card-container'>
        <FaAppStore className='us-image' />
        <h1>Sharon Zelaya</h1>
        <h1>CEO</h1>
        <p>“Conectate a una audiencia global, en tiempo real”</p>
      </div>
    </div>
  )
}

export default UsCard
