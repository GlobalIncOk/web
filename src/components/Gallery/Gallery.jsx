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
import mostazaback from '../../assets/Images/Clients/mostaza.avif'
import vossback from '../../assets/Images/Clients/voss.avif'
import drbeautyback from '../../assets/Images/Clients/drbeauty.avif'
import labirraback from '../../assets/Images/Clients/labirra.avif'
import tecnoback from '../../assets/Images/Clients/tecno.avif'
import crazyback from '../../assets/Images/Clients/crazy.avif'
import iaaback from '../../assets/Images/Clients/iaa.avif'
import yipback from '../../assets/Images/Clients/yip.avif'
import '../../styles/Gallery.sass'

const clients = [
  { id: 1, name: 'mostaza', src: imgmostaza, back: mostazaback },
  { id: 2, name: 'voss', src: imgvoss, back: vossback },
  { id: 3, name: 'drbeauty', src: imgdrbeauty, back: drbeautyback },
  { id: 4, name: 'labirra', src: imglabirra, back: labirraback },
  { id: 5, name: 'tecno', src: imgtecno, back: tecnoback },
  { id: 6, name: 'crazy', src: imgcrazy, back: crazyback },
  { id: 7, name: 'iaa', src: imgiaa, back: iaaback },
  { id: 8, name: 'yip', src: imgyip, back: yipback }
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {clients.map((client) => (
        <div style={{ backgroundImage: `url(${client.back})` }} className='backs'>
          <Link key={client.id} to={`/clients/${client.name}`} target="_self" className={`card-${client.id}`} rel="noopener noreferrer">
            <div className='images'>
              <img src={client.src} alt={`Image ${client.name}`} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Gallery
