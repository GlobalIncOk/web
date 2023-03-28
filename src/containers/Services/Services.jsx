import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { ServicesTitle } from '../../components'
import '../../styles/Services.sass'
import ServicesList from '../Lists/ServicesList';


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'services');
      getDocs(queryCollection)
      .then(res => setServices(res.docs.map(service => ({ id: service.id, ...service.data() }))))
  })

  return (
    <div className='services-container'>
      <ServicesTitle />
      <ServicesList services={services} />
    </div>
  )
}

export default Services
