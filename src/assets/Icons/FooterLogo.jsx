import React from 'react'
import '../../styles/Icons.sass'

import {Link} from "react-router-dom"

const FooterLogo = () => {
  return (
    <Link activeClass="active" to="/" smooth={true} offset={-70} duration={500} className="footerlogo"></Link>
  )
}

export default FooterLogo
