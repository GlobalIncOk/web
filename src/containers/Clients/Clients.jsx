import React from 'react'
import '../../styles/Clients.sass'
import ClientsTitle from '../../components/ClientsTitle/ClientsTitle'
import GalleryClients from '../../components/GalleryClients/GalleryClients'

const Clients = () => {
  return (
    <div className="clientsContainer" id='Clients'>
      <ClientsTitle/>
      <GalleryClients/>
    </div>
  )
}
export default Clients
