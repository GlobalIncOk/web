import { PartnerCard } from '../../components'

const PartnersList = ({ partners }) => {
	return (
		<div>
			{partners.map((partner) =>
					<PartnerCard key={partner.id} partner={partner} />
			)}
		</div>
  )
}

export default PartnersList
