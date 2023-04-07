import React from 'react'
import '../../styles/ServiceCard.sass'

const ServiceCard = ({ service }) => {
  return (
    <div className='service-card-container'>
      <img src={service.src} alt={`Image ${service.name}`} className='service-image' />
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  )
}

export default ServiceCard
