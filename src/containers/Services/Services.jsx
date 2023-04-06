import React from 'react'

import { ServicesTitle, ServicesGallery } from '../../components'
import '../../styles/Services.sass'

const Services = () => {
  return (
    <div className='services-container' id='Services'>
      <ServicesTitle />
      <ServicesGallery />
    </div>
  )
}

export default Services
