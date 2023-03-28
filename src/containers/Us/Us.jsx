import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { UsTitle } from '../../components'
import '../../styles/Us.sass'
import UssList from '../Lists/UssList';

const Us = () => {
  const [uss, setUs] = useState([]);

  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'us');
      getDocs(queryCollection)
      .then(res => setUs(res.docs.map(us => ({ id: us.id, ...us.data() }))))
  })
  return (
    <div className='us-container'>
      <UsTitle />
      <UssList uss={uss}/>
    </div>
  )
}

export default Us
