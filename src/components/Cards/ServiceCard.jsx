import React from 'react'
import '../../styles/ServiceCard.sass'
import { FaAppStore } from "react-icons/fa"

const ServiceCard = () => {
	return (
    <div className='service-card-container'>
      <FaAppStore className='service-image' />
      <h1>Marketing Digital</h1>
      <p>Nunc et rhoncus vitae malesuada praesent urna nulla ultricies. Estz et facilisi palabra palabra palabra bibendum feugiat.</p>
    </div>
	)
}

export default ServiceCard
