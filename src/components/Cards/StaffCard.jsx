import React from 'react'
import '../../styles/StaffCard.sass'
import marcelo from '../../assets/Images/Staff/MarceloRomero.avif'
import camila from '../../assets/Images/Staff/CamilaMarchegiani.avif'
import mariano from '../../assets/Images/Staff/MarianoDeLuca.avif'
import nicolas from '../../assets/Images/Staff/NicolasSeverino.avif'

const StaffCard = () => {
  return (
    <div className='staff-list'>
      <div className='staff-card-container'>
        <img src={marcelo} alt="imagen1" className='staff-image' />
        <h1>Marcelo Romero</h1>
        <h1>Fotógrafo gastronómico</h1>
        <p>“La comida es más tentadora detrás de un lente”</p>
      </div>

      <div className='staff-card-container'>
      <img src={camila} alt="imagen1" className='staff-image' />
        <h1>Camila Marchegiani</h1>
        <h1>Community manager</h1>
        <p>“La clave para gestionar una comunidad, es siendo su seguidora más fiel”</p>
      </div>

      <div className='staff-card-container'>
      <img src={mariano} alt="imagen1" className='staff-image' />
        <h1>Mariano De Luca</h1>
        <h1>Filmmaker</h1>
        <p>“Lorem ipsum”</p>
      </div>

      <div className='staff-card-container'>
      <img src={nicolas} alt="imagen1" className='staff-image' />
        <h1>Nicolas Severino</h1>
        <h1>Diseñador gráfico</h1>
        <p>“Lorem ipsum”</p>
      </div>
    </div>
  )
}

export default StaffCard
