import React from 'react'
import {Link} from "react-router-dom"
import imgmostaza from '../../assets/Images/Clients/clientMostaza.svg'
import imgvoss from '../../assets/Images/Clients/clientVoss.svg'
import imgdrbeauty from '../../assets/Images/Clients/clientDrBeauty.svg'
import imglabirra from '../../assets/Images/Clients/clientLaBirra.svg'
import imgtecno from '../../assets/Images/Clients/clientTecno.svg'
import imgcrazy from '../../assets/Images/Clients/clientCrazy.svg'
import imgiaa from '../../assets/Images/Clients/clientIAA.svg'
import imgyip from '../../assets/Images/Clients/clientYip.svg'
import '../../styles/Gallery.sass'

const clients = [
  { id: 1, name: 'mostaza', src: imgmostaza },
  { id: 2, name: 'voss', src: imgvoss },
  { id: 3, name: 'drbeauty', src: imgdrbeauty },
  { id: 4, name: 'labirra', src: imglabirra },
  { id: 5, name: 'tecno', src: imgtecno },
  { id: 6, name: 'crazy', src: imgcrazy },
  { id: 7, name: 'iaa', src: imgiaa },
  { id: 8, name: 'yip', src: imgyip }
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {clients.map((client) => (
        <Link key={client.id} to={`/clients/${client.name}`} target="_self" className={`card-${client.id}`} rel="noopener noreferrer">
          <div className='images'>
            <img src={client.src} alt={`Image ${client.name}`} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Gallery
