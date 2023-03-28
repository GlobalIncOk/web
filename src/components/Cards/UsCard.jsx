import '../../styles/UsCard.sass'
import { FaAppStore } from "react-icons/fa"

const UsCard = ({ us }) => {
	return (
    <div className='us-list'>
      <div className='us-card-container'>
        <FaAppStore className='us-image' />
        <h1>{us.name}</h1>
        <p>{us.description}</p>
      </div>
    </div>
	)
}

export default UsCard
