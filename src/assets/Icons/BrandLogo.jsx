import React from 'react'
import '../../styles/Icons.sass'

import { Link } from 'react-scroll'

const BrandLogo = () => {
  return (
    <Link activeClass="active" to="HeroTop" smooth={true} offset={-70} duration={500} className="brand-logo">
    </Link>
  )
}

export default BrandLogo
