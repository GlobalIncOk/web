import React from 'react'
import '../../styles/ServiceCard.sass'
import {Link} from "react-router-dom"

const ServiceCard = ({ service }) => {
  return (
    <div className='service-card-container'>
      <Link to={`/servicios/${service.name}`} className="service-card">
        <img src={service.src} alt={`Image ${service.name}`} className='service-image' />
        <h1>{service.name}</h1>
        <p>{service.description}</p>
      </Link>
    </div>
  )
}

export default ServiceCard
