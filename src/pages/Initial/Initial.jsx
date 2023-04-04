import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeroTop, HeroBottom, ClientDetail } from '../../components/index'
import { Layout, Header, Services, Clients, Us, Footer, Staff } from '../../containers/index'

const Initial = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <HeroTop />
        <Services />
        <Routes>
          <Route path='/' element={<Clients/>}/>
          <Route path='/:client' element={<ClientDetail />} />
        </Routes>
        <Us />
        <Staff />
        <HeroBottom />
        {/* <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/catalog' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<CartContainer />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/checkout' element={<Order />} /> */}
        {/* <Footer /> */}
      </Layout>
    </BrowserRouter>
  )
}

export default Initial
