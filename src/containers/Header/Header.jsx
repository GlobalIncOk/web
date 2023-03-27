import '../../styles/Header.sass'

import { NavBar, ContactUsDesktop } from '../../components/index'
import BrandLogo from '../../assets/Icons/BrandLogo/BrandLogo'

const Header = ({categories}) => {
  return (
    <div className='header-container'>
      <BrandLogo />
      <NavBar categories={categories} />
      <ContactUsDesktop />
    </div>
  )
}

export default Header
