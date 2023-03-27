import React from 'react'
import '../../styles/PartnerCard.sass'
import { FaAppStore } from "react-icons/fa"

const PartnerCard = () => {
	return (
    <div className='partner-list'>
      <div className='partner-card-container'>
        <FaAppStore className='partner-image' />
        <h1>Nunc et rhoncus vitae</h1>
      </div>
      <div className='partner-card-container'>
        <FaAppStore className='partner-image' />
        <h1>Nunc et rhoncus vitae</h1>
      </div>
    </div>
	)
}

export default PartnerCard
