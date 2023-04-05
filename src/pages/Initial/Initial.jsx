import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeroTop, HeroBottom, ClientDetail } from '../../components/index'
import { Layout, Header, Services, Clients, Us, Footer, Staff } from '../../containers/index'
import ClientsPages from '../ClientsPages/ClientsPages'

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
        <Staff />
        <HeroBottom />
        {/* <Footer /> */}
      </Layout>
    </BrowserRouter>
  )
}

export default Initial
