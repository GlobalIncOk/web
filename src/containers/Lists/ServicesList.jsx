import { ServiceCard } from '../../components'

const ServicesList = ({ services }) => {
	return (
		<div>
			{services.map((service) =>
					<ServiceCard key={service.id} service={service} />
			)}
		</div>
  )
}

export default ServicesList
