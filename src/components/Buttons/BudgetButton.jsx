import React from 'react'
import '../../styles/BudgetButton.sass'
import {Link} from "react-router-dom"

const BudgetButton = () => {
  return (
    <div className='budget-button-container'>
      <button className='budget-button'><Link to='/presupuesto' smooth={true} offset={-70} className='link'>Pedir presupuesto</Link></button>
    </div>
  )
}

export default BudgetButton
