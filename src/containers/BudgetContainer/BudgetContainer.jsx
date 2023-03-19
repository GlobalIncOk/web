import React from "react"
import {Budget} from "../../components/index"
import "../../styles/BudgetContainer.sass"
const BudgetContainer = () =>{
    return(
        <div className="budgetContainer">
            <div className="fondoCeleste">
            </div>
            <div className="fondoInfo">
                <h1>Lorem ipsum dolor sit amet consectetur. Arcu proin viverra</h1>
                <p>Nunc et rhoncus vitae malesuada praesent urna nulla ultricies. Est et facilisi bibendum feugiat adipiscing duis tindcidunt semper. Risus euismod mi cursus euismod justo ac.</p>
                <Budget/>
            </div>
        </div>
    )
}
export default BudgetContainer