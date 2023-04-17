import React from 'react'
import '../../styles/FooterContact.sass'
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const FooterContact = () => {
  return (
    <div className='footer-content' id='ContactUs'>
      <div className='footer-list'>
        <p className='title'>Contacto</p>
        <a href="https://wa.me/5491132816522" target='_blank' style={{display: 'block'}}><p className='paragraph'><span><FaPhoneAlt /></span>+54 9 1132816522</p></a>
        <a href="https://wa.me/5491130611328" target='_blank'><p className='paragraph'><span><FaPhoneAlt /></span>+54 9 1130611328</p></a>
        <p className='paragraph'><span><FaRegEnvelope /></span>globalincmkt@ gmail.com</p>
        <p className='paragraph'><span><FaMapMarkerAlt /></span>Buenos Aires, Argentina</p>
      </div>

    </div>
  )
}

export default FooterContact
