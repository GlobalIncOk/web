import React from 'react'
import '../../styles/ServicesButtons.sass'
import {Link} from "react-router-dom"

const servicesoffered = [
  { id: 1, name: 'mostaza', src: imgmostaza, back: mostazaback },
  { id: 2, name: 'voss', src: imgvoss, back: vossback },
  { id: 3, name: 'drbeauty', src: imgdrbeauty, back: drbeautyback },
  { id: 4, name: 'labirra', src: imglabirra, back: labirraback },
  { id: 5, name: 'tecno', src: imgtecno, back: tecnoback },
  { id: 6, name: 'crazy', src: imgcrazy, back: crazyback },
  { id: 7, name: 'iaa', src: imgiaa, back: iaaback },
  { id: 8, name: 'yip', src: imgyip, back: yipback }
]

const ServicesButtons = () => {
  return (
    <div className='budget-button-container'>
      <Link to='/presupuesto'><button className='budget-button'>Pedir presupuesto</button></Link>
    </div>
  )
}

export default BudgeServicesButtonstButton
