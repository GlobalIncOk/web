import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { PartnersTitle } from '../../components'
import '../../styles/Partners.sass'
import PartnersList from '../Lists/PartnersList';

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'partners');
      getDocs(queryCollection)
      .then(res => setPartners(res.docs.map(partner => ({ id: partner.id, ...partner.data() }))))
  })

  return (
    <div className='partners-container'>
      <PartnersTitle />
      <PartnersList partners={partners} />
    </div>
  )
}

export default Partners
