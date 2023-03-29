import { ServiceCard, ServicesTitle } from '../../components'
import '../../styles/Services.sass'

const Services = () => {
  return (
    <div className='services-container'>
      <ServicesTitle />
      <ServiceCard />
    </div>
  )
}

export default Services
