import { useEffect, useState } from 'react'
import '../../styles/HeroBottom.sass'
import Budget from '../Buttons/BudgetButton'
import ContactUsMobile from '../Buttons/ContactUsMobile'
import ContactUsTablet from '../Buttons/ContactUsTablet'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const HeroBottom = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'heros', 'WjfoCO37zEPDecaiOFIl');
      getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  })

	return (
    <div className='hero-bottom-container'>
      <img src={data.image} alt='Overlay' />
      <div className='hero-bottom-text'>
        <h2>{data.title}</h2>
        <p>{data.paragraph}</p>
        <ContactUsMobile />
        <ContactUsTablet />
        <Budget />
      </div>
    </div>
	)
}

export default HeroBottom
