import React from 'react';
import { useParams } from 'react-router-dom';
import ClientsData from './ClientsData.js';

const ClientsPages = () => {
  const { name } = useParams();
  const client = ClientsData.find((c) => c.slug === name);
  if (!client) {
    return <div>Client not found!</div>;
  }

  return (
    <div>
      <h2>{client.name}</h2>
      {/* <img src={client.image} alt={client.name} /> */}
      <p>{client.description}</p>
    </div>
  );
};

export default ClientsPages;
