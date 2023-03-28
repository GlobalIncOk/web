import React from 'react'
import '../../styles/PartnerCard.sass'
import { FaAppStore } from "react-icons/fa"

const PartnerCard = ({ partner }) => {
	return (
    <div className='partner-list'>
      <div className='partner-card-container'>
        <FaAppStore className='partner-image' />
        <h1>{partner.name}</h1>
      </div>
    </div>
	)
}

export default PartnerCard
