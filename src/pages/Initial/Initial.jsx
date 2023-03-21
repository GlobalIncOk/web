import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Budget1, Budget2 } from '../../components';
import { Layout, Header, Services, Us } from '../../containers/index';

const Initial = () => {

  const Categories = [
    { name: 'Inicio', id: 0, route: '/inicio' },
    { name: 'Servicios', id: 1, route: '/servicios' },
    { name: 'Nuestros clientes', id: 2, route: '/nuestros-clientes' },
    { name: 'Nosotros', id: 3, route: '/nosotros' },
    { name: 'Contactanos', id: 3, route: '/contactanos' }
  ];

  return (
    <BrowserRouter>
        <Layout>
          <Header categories={Categories} />
          <Budget1 />
          <Services />
          <Us />
          <Budget2 />
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
