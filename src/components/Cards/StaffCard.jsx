import React from 'react'
import '../../styles/StaffCard.sass'
import { FaAppStore } from 'react-icons/fa'

const StaffCard = () => {
  return (
    <div className='staff-list'>
      <div className='staff-card-container'>
        <FaAppStore className='staff-image' />
        <h1>Marcelo Romero</h1>
        <h1>Fotógrafo gastronómico</h1>
        <p>“La comida es más tentadora detrás de un lente”</p>
      </div>

      <div className='staff-card-container'>
        <FaAppStore className='staff-image' />
        <h1>Camila Marchegiani</h1>
        <h1>Community manager</h1>
        <p>“La clave para gestionar una comunidad, es siendo su seguidora más fiel”</p>
      </div>

      <div className='staff-card-container'>
        <FaAppStore className='staff-image' />
        <h1>Mariano De Luca</h1>
        <h1>Filmmaker</h1>
        <p>“Lorem ipsum”</p>
      </div>
    </div>
  )
}

export default StaffCard
