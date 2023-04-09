import React from 'react'
import '../../styles/Icons.sass'

import {Link} from "react-router-dom"

const BrandLogo = () => {
  return (
    <Link activeClass="active" to="/" smooth={true} offset={-70} duration={500} className="brand-logo">
    </Link>
  )
}

export default BrandLogo

{/* <Route exact path="/" element={<Initial />} /> */}
