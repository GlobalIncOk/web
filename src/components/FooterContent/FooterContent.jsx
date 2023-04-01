import React from 'react'
import '../../styles/FooterContent.sass'
import { Link } from 'react-scroll'
import Copyright from '../Copyright/Copyright'
import { Socials } from '../../assets'

const FooterContent = () => {
  return (
    <div className='footer-content'>
      <div className='footer-menu'>
        <Link activeClass="active" to="HeroTop" smooth={true} offset={-70} duration={500} className="list">
          Inicio
        </Link>
        <Link activeClass="active" to="Services" smooth={true} offset={-70} duration={500} className="list">
          Servicios
        </Link>
        <Link activeClass="active" to="Clients" smooth={true} offset={-70} duration={500} className="list">
          Nuestros Clientes
        </Link>
        <Link activeClass="active" to="Us" smooth={true} offset={-70} duration={500} className="list">
          Nosotros
        </Link>
      </div>
      <Socials />
      <Copyright />
    </div>
  )
}

export default FooterContent
