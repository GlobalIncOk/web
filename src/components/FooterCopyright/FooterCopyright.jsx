import React from 'react'
import { Socials } from '../../assets'
import '../../styles/FooterCopyright.sass'

const FooterCopyright = () => {
  return (
    <>
      <div className='copyright'>
        <Socials />
        <p className='par1'>Copyright @ GLOBAL INC 2023</p>
        <p className='par2'>Todos los derechos reservados</p>
      </div>
    </>
  )
}

export default FooterCopyright
