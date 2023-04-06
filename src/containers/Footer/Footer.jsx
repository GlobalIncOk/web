import React from 'react'
import { FooterLogo } from '../../assets'
import { FooterContact, FooterCopyright, FooterMenu } from '../../components'
import '../../styles/Footer.sass'


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-layout' >
        <FooterLogo />
        <FooterMenu />
        <FooterCopyright />
        <FooterContact />
      </div>
    </div>
  )
}

export default Footer
