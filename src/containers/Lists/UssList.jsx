import { UsCard } from '../../components'

const UssList = ({ uss }) => {
	return (
		<div>
			{uss.map((us) =>
					<UsCard key={us.id} us={us} />
			)}
		</div>
  )
}

export default UssList
