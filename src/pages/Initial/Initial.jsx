import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Layout from '../../containers/Layout/Layout';
import Header from '../../containers/Header/Header';

const Initial = () => {

  const Categories = [
    { name: 'Inicio', id: 0, route: '/catalog' },
    { name: 'Servicios', id: 1, route: '/category/smartphones' },
    { name: 'Nuestros clientes', id: 2, route: '/category/headphones' },
    { name: 'Nosotros', id: 3, route: '/category/smartwatchs' }];

  return (
    <BrowserRouter>
        <Layout>
          <Header categories={Categories} />
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
  );
};

export default Initial;
