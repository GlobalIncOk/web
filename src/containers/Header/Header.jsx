import React from 'react'
import '../../styles/Header.sass'

import { NavBar, ContactUs } from '../../components/index'
import BrandLogo from '../../assets/Icons/BrandLogo'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-layout'>
        <BrandLogo />
        <NavBar />
        <ContactUs />
      </div>
    </div>
  )
}

export default Header
