import React from 'react'
import { BudgetButton, BudgetTitle } from '../../components/index'
import '../../styles/BudgetContainer.sass'
const BudgetContainer = () => {
  return (
        <div className="budgetContainer">
            <BudgetTitle/>
            <BudgetButton/>
        </div>
  )
}
export default BudgetContainer
