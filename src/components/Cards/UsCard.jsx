import React from 'react'
import '../../styles/UsCard.sass'
import { FaAppStore } from 'react-icons/fa'

const UsCard = () => {
  return (
    <div className='us-list'>
      <div className='us-card-container'>
        <FaAppStore className='us-image' />
        <h1>Nunc et rhoncus vitae</h1>
      </div>
      <div className='us-card-container'>
        <FaAppStore className='us-image' />
        <h1>Nunc et rhoncus vitae</h1>
      </div>
    </div>
  )
}

export default UsCard
