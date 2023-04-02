import React from 'react'
import {Link} from "react-router-dom"
import imgcrazy from '../../assets/Images/clientCrazy.svg'
import imgdrbeauty from '../../assets/Images/clientDrBeauty.svg'
import imgiaa from '../../assets/Images/clientIAA.svg'
import imglabirra from '../../assets/Images/clientLaBirra.svg'
import imgmostaza from '../../assets/Images/clientMostaza.svg'
import imgtecno from '../../assets/Images/clientTecno.svg'
import imgyip from '../../assets/Images/clientYip.svg'
import imgvoss from '../../assets/Images/clientVoss.svg'
import '../../styles/GalleryClients.sass'
const GalleryClients = () => {
  return (
    <div className="gallery">
      <Link to={`/mostaza`} className="grid big-size">
        <img src={imgmostaza} alt='clientlogo'/>
      </Link>
      <Link to="/voss" className="grid big-size">
        <img src={imgvoss} alt='clientlogo' />
      </Link>
      <Link to="/drbeauty" className="grid big-size">
        <img src={imgdrbeauty} alt='clientlogo' />
      </Link>
      <Link to="/tecno" className="grid hor-size">
        <img src={imgtecno} alt='clientlogo' />
      </Link>
      <Link to="/labirra" className="grid big-size">
        <img src={imglabirra} alt='clientlogo' />
      </Link>
      <Link to="/crazy" className="grid hor-size">
        <img src={imgcrazy} alt='clientlogo' />
      </Link>
      <Link to="/iaa" className="grid hor-size">
        <img src={imgiaa} alt='clientlogo' />
      </Link>
      <Link to="/yip" className="grid hor-size">
        <img src={imgyip} alt='clientlogo' />
      </Link>
    </div>
  )
}
export default GalleryClients
