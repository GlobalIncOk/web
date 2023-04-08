import React from 'react'
import '../../styles/ContactUs.sass'
import { Link } from 'react-scroll'

const ContactUs = () => {
  return (
    <div className='contactus-container'>
      <Link activeClass="active" to="ContactUs" smooth={true} offset={-70} duration={500} className="contactus">
        Contáctanos
      </Link>
    </div>
  )
}

export default ContactUs
