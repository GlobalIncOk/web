import React from 'react'
import '../../styles/StaffCard.sass'
import { FaAppStore } from 'react-icons/fa'

const StaffCard = () => {
  return (
    <div className='staff-list'>
      <div className='staff-card-container'>
        <FaAppStore className='staff-image' />
        <h1>Nunc et rhoncus vitae</h1>
      </div>
      <div className='staff-card-container'>
        <FaAppStore className='staff-image' />
        <h1>Nunc et rhoncus vitae</h1>
      </div>
    </div>
  )
}

export default StaffCard
