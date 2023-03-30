import React from 'react'
import '../../styles/Header.sass'

import { NavBar, ContactUsDesktop } from '../../components/index'
import BrandLogo from '../../assets/Icons/BrandLogo/BrandLogo'

const Header = () => {
  return (
    <div className='header-container'>
      <BrandLogo />
      <NavBar />
      <ContactUsDesktop />
    </div>
  )
}

export default Header
