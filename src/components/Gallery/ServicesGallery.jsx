import React from 'react'
import ServiceCard from '../Cards/ServiceCard'
import { ServicesList } from '../../assets/ServiceList'
import '../../styles/ServicesGallery.sass'

const ServicesGallery = () => {
  return (
    <div className='services-list'>
      {ServicesList.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}

export default ServicesGallery
