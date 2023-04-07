import React from 'react'
import '../../styles/Clients.sass'
import ClientsTitle from '../../components/Titles/ClientsTitle'
import { Gallery } from '../../components'


const Clients = () => {
  return (
    <div className="clients-container" id='Clients'>
      <ClientsTitle />
      <Gallery />
    </div>
  )
}

export default Clients
