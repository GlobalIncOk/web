import React from 'react'
import '../../styles/BudgetButton.sass'
import {Link} from "react-router-dom"

const BudgetButton = () => {
  return (
    <div className='budget-button-container'>
      <Link to='/presupuesto'><button className='budget-button'>Pedir presupuesto</button></Link>
    </div>
  )
}

export default BudgetButton
