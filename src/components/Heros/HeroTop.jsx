import { useEffect, useState } from 'react'
import '../../styles/HeroTop.sass'
import Budget from '../Buttons/BudgetButton'
import ContactUsMobile from '../Buttons/ContactUsMobile'
import ContactUsTablet from '../Buttons/ContactUsTablet'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const HeroTop = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'heros', 'JzobfoQknmw3jY6Onpvb');
      getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  })

	return (
    <div className='hero-top-container'>
      <div className='image-container'>
        <img src={data.image} alt='Overlay' />
      </div>
      <div className='hero-top-text'>
        <h2>{data.title}</h2>
        <p>{data.paragraph}</p>
        <ContactUsMobile/>
        <ContactUsTablet />
        <Budget />
      </div>
    </div>
	)
}

export default HeroTop
