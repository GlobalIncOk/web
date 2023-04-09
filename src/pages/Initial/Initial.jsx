import React from 'react'
import { HeroTop, HeroBottom, ClientDetail, Carr } from '../../components/index'
import { Header, Services, Clients, Us, Footer, Staff, World } from '../../containers/index'

const Initial = () => {
  return (
    <>
      <Header />
      <HeroTop />
      <Services />
      <Carr />
      <Clients/>
      <Us />
      <World />
      <Staff />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default Initial
