import React from 'react'
import '../../styles/Footer.sass'

import { FooterContent, FooterTitle  } from '../../components/index'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-layout' >
        <FooterTitle />
        <FooterContent />
      </div>
    </div>
  )
}

export default Footer
