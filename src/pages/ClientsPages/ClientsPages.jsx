import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientsData from './ClientsData.js';
import { HeroBottom } from '../../components/index.js';
import { Header, Footer } from '../../containers';
import FSLightbox from 'fslightbox-react';
import '../../styles/ClientsPagesCss.sass';

const ClientsPages = () => {
  const { name } = useParams();
  const client = ClientsData.find((c) => c.name === name);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  const openLightboxOnSlide = (slide) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide
    });
  };

  const handleCloseLightbox = () => {
    setLightboxController({
      toggler: false,
      slide: 1
    });
  };

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
          {client.imageGrid.map((e, i) => (
            <div
              key={`grid${i}`}
              className={`grid grid${i}`}
              onClick={() => openLightboxOnSlide(i + 1)}
            >
              <img src={e} alt={`image ${i}`} />
            </div>
          ))}
        </div>
      </div>
      <FSLightbox
        toggler={lightboxController.toggler}
        sources={client.imageGrid}
        slide={lightboxController.slide}
        onClose={handleCloseLightbox}
      />
      <HeroBottom />
      <Footer />
    </>
  );
};

export default ClientsPages;
