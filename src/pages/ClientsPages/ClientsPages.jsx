import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ClientsData from './ClientsData.js';
import { HeroBottom } from '../../components/index.js';
import '../../styles/ClientsPagesCss.sass'

const ClientsPages = () => {
  const { name } = useParams();
  const client = ClientsData.find((c) => c.name === name);
  if (!client) {
    return <div>Client not found!</div>;
  }

  return (
    <div className='container'>
      <div className='logoTitle'>
        <img className='image' src={client.logo} alt={client.name} />
        <p className='title'>{client.description}</p>
      </div>
      <div className='gridContainer'>
        {client.imageGrid.map((e)=>{
          return(
            <div key={client.imageGrid.indexOf(e)} className={`grid grid${client.imageGrid.indexOf(e)}`}>
              <img src={e} alt={`image ${client.imageGrid.indexOf(e)}`}/>
            </div>
            )
          })
        }
      </div>
      <div className='btn-back'>
        <Link className='link-back' to={"/"}>Atras</Link>
      </div>
      <HeroBottom/>
    </div>
  );
};

export default ClientsPages;