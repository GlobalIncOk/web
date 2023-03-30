import React from 'react'
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
      <div className="grid big-size">
        <img src={imgmostaza} alt='clientlogo'/>
      </div>
      <div className="grid big-size">
        <img src={imgvoss} alt='clientlogo' />
      </div>
      <div className="grid big-size">
        <img src={imgdrbeauty} alt='clientlogo' />
      </div>
      <div className="grid hor-size">
        <img src={imgtecno} alt='clientlogo' />
      </div>
      <div className="grid big-size">
        <img src={imglabirra} alt='clientlogo' />
      </div>
      <div className="grid hor-size">
        <img src={imgcrazy} alt='clientlogo' />
      </div>
      <div className="grid hor-size">
        <img src={imgiaa} alt='clientlogo' />
      </div>
      <div className="grid hor-size">
        <img src={imgyip} alt='clientlogo' />
      </div>
    </div>
  )
}
export default GalleryClients
