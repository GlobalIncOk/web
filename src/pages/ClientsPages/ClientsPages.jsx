import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientsData from './ClientsData.js';
import { HeroBottom } from '../../components/index.js';
import '../../styles/ClientsPagesCss.sass'
import { Header, Footer } from '../../containers'

const ClientsPages = () => {
  const { name } = useParams();
  const client = ClientsData.find((c) => c.name === name);
  if (!client) {
    return <div>Client not found!</div>;
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='logoTitle'>
          <img className='image' src={client.logo} alt={client.name} />
          <p className='title'>{client.description}</p>
        </div>
        <div className='gridContainer'>
          {client.imageGrid.map((e)=>{
            return(
              <div className={`grid grid${client.imageGrid.indexOf(e)}`} >
                <img  src={e} alt={`image ${client.imageGrid.indexOf(e)}`}/>
              </div>
              )
            })
          }
        </div>
      </div>
      <HeroBottom/>
      <Footer />
    </>
  );
};

export default ClientsPages;
