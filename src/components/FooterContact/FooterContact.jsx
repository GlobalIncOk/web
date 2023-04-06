import React from 'react'
import '../../styles/FooterContact.sass'
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const FooterContact = () => {
  return (
    <div className='footer-content'>
      <div className='footer-list'>
        <p className='title'>Contacto</p>
        <p className='paragraph'><span><FaPhoneAlt /></span>+54 1132816522</p>
        <p className='paragraph'><span><FaPhoneAlt /></span>+54 1130611328</p>
        <p className='paragraph'><span><FaRegEnvelope /></span>globalincmkt@gmail.com</p>
        <p className='paragraph'><span><FaMapMarkerAlt /></span>Buenos Aires, Argentina</p>
      </div>

    </div>
  )
}

export default FooterContact
