import '../../styles/ServiceCard.sass'
import { FaAppStore } from "react-icons/fa"

const ServiceCard = ({ service }) => {
	return (
    <div className='service-card-container'>
      <FaAppStore className='service-image' />
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
	)
}

export default ServiceCard
