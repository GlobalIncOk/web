import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { HeroTop, HeroBottom } from '../../components/index'
import { Layout, Header, Services, Clients, Us } from '../../containers/index'
import Partners from '../../containers/Partners/Partners'

const Initial = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <HeroTop />
        <Services />
        <Clients/>
        <Us />
        <Partners />
        <HeroBottom />
        <Routes>
          {/* <Route exact path='/' element={<Landing />} />
          <Route exact path='/catalog' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<CartContainer />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/checkout' element={<Order />} />
          <Route exact path='*' element={<ErrorPage />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Layout>
    </BrowserRouter>
  )
}

export default Initial
