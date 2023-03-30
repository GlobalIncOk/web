import { ServiceCard, ServicesTitle } from '../../components'
import '../../styles/Services.sass'

const Services = () => {
  return (
    <div className='services-container' id='Services'>
      <ServicesTitle />
      <ServiceCard />
    </div>
  )
}

export default Services
