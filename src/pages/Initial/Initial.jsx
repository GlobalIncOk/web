import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeroTop, HeroBottom, ClientDetail } from '../../components/index'
import ClientsPages from '../ClientsPages/ClientsPages'
import { Layout, Header, Services, Clients, Us, Footer, Staff, World } from '../../containers/index'

const Initial = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <HeroTop />
        <Services />
        <Clients/>
        <Routes>
          <Route path='/clients/:name' element={<ClientsPages />} />
        </Routes>
        <Us />
        <World />
        <Staff />
        <HeroBottom />
        {/* <Footer /> */}
      </Layout>
    </BrowserRouter>
  )
}

export default Initial
