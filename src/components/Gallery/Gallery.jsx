import React from 'react'
import {Link} from "react-router-dom"
import imgcrazy from '../../assets/Images/Clients/clientCrazy.svg'
import imgdrbeauty from '../../assets/Images/Clients/clientDrBeauty.svg'
import imgiaa from '../../assets/Images/Clients/clientIAA.svg'
import imglabirra from '../../assets/Images/Clients/clientLaBirra.svg'
import imgmostaza from '../../assets/Images/Clients/clientMostaza.svg'
import imgtecno from '../../assets/Images/Clients/clientTecno.svg'
import imgyip from '../../assets/Images/Clients/clientYip.svg'
import imgvoss from '../../assets/Images/Clients/clientVoss.svg'
import '../../styles/Gallery.sass'

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Link to="/mostaza" className="card-a">
        <img src={imgmostaza} alt='clientlogo'/>
      </Link>
      <Link to="/voss" className="card-a">
        <img src={imgvoss} alt='clientlogo' />
      </Link>
      <Link to="/drbeauty" className="card-a">
        <img src={imgdrbeauty} alt='clientlogo' />
      </Link>
      <Link to="/labirra" className="card-a">
        <img src={imglabirra} alt='clientlogo' />
      </Link>
      <Link to="/tecno" className="card-b">
        <img src={imgtecno} alt='clientlogo' />
      </Link>
      <Link to="/crazy" className="card-b">
        <img src={imgcrazy} alt='clientlogo' />
      </Link>
      <Link to="/iaa" className="card-b">
        <img src={imgiaa} alt='clientlogo' />
      </Link>
      <Link to="/yip" className="card-b">
        <img src={imgyip} alt='clientlogo' />
      </Link>
    </div>
  )
}

export default Gallery
