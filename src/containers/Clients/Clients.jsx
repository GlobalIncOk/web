import React from "react"
import "../../styles/Clients.sass"
import ClientsTitle  from "../../components/ClientsTitle/ClientsTitle"
const Clients = () => {
    return(
        <div className="clientsContainer">
            <ClientsTitle/>
            <p>Client Photos</p>
        </div>
    )
}
export default Clients