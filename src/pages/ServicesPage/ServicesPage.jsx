import React from 'react'
import { useParams } from 'react-router-dom';
import { ServicesList } from '../../assets/ServiceList';
import { HeroBottom } from '../../components'
import { Footer, Header } from '../../containers'
import '../../styles/ServicesPage.sass'

const ServicesPage = () => {
  const { id } = useParams();
  const service = ServicesList.find((s) => s.id === parseInt(id));
    if (!service) {
      return <div>Service not found!</div>;
    }

  return (
    <>
      <Header />
      <div className='services-page'>
        <img src={service.src} alt={service.id} className='icon' />
        <h2>{service.name}</h2>
        <p>{service.description}</p>
        <img src={service.src2} srcset={`${service.src3} 845w, ${service.src4} 1036w`} alt={service.id} className='works' />
      </div>
      <HeroBottom />
      <Footer />
    </>
  )
}

export default ServicesPage
