import React, { useEffect, useState } from 'react'
import { ClientDetail } from '../../components/index'
import { Header, Footer } from '../../containers/index'
import { useParams } from 'react-router-dom';

const ClientsPages = () => {
  const { id } = useParams()

  return (
    <>
      <Header />

      <Footer />
    </>
  )
}

export default ClientsPages
