import '../../styles/NavBar.sass'

import { HiMenu, HiX } from 'react-icons/hi'
import { React, useState } from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className='nabvar-container'>
      {isMobileMenuOpen
        ? (
        <nav className='mobile-menu'>
          <Link activeClass="active" to="HeroTop" smooth={true} offset={-100} duration={500} className="list" onClick={handleLinkClick}>
            Inicio
          </Link>
          <Link activeClass="active" to="Services" smooth={true} offset={-100} duration={500} className="list" onClick={handleLinkClick}>
            Servicios
          </Link>
          <Link activeClass="active" to="Clients" smooth={true} offset={-100} duration={500} className="list" onClick={handleLinkClick}>
            Nuestros Clientes
          </Link>
          <Link activeClass="active" to="Us" smooth={true} offset={-100} duration={500} className="list" onClick={handleLinkClick}>
            Nosotros
          </Link>
          <Link activeClass="active" to="ContactUs" smooth={true} offset={-100} duration={500} className="list" onClick={handleLinkClick}>
            Contáctanos
          </Link>
        </nav>
          )
        : (
            ''
          )}

      {isMobileMenuOpen
        ? (
        <HiX className='mobile-menu-button' onClick={handleOnClick} />
          )
        : (
        <HiMenu className='mobile-menu-button' onClick={handleOnClick} />
          )}

      <nav className='desktop-menu'>
        <Link activeClass="active" to="HeroTop" smooth={true} offset={-100} duration={500} className="list">
          Inicio
        </Link>
        <Link activeClass="active" to="Services" smooth={true} offset={-100} duration={500} className="list">
          Servicios
        </Link>
        <Link activeClass="active" to="Clients" smooth={true} offset={-100} duration={500} className="list">
          Nuestros Clientes
        </Link>
        <Link activeClass="active" to="Us" smooth={true} offset={-100} duration={500} className="list">
          Nosotros
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
