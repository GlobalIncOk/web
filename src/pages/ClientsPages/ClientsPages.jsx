import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ClientsData from './ClientsData.js';
import { HeroBottom } from '../../components/index.js';
import '../../styles/ClientsPagesCss.sass'
import '../../styles/GalleryPages.sass'
import { Header, Footer } from '../../containers'

const ClientsPages = () => {
  const { name } = useParams();
  const [galleryOn, setGalleryOn]=useState(false)
  const client = ClientsData.find((c) => c.name === name);
  if (!client) {
    return <div>Client not found!</div>;
  }

  const galleryCarousel=()=>{
    return(
      <div className={`gallery${galleryOn}`}>
        <div className='containerGallery'>
          <button className='btn-carousel' onClick={()=>{setGalleryOn(false)}}>Cerrar</button>
          <div className='galleryCridCarousel'>
            {client.imageGrid.map((e)=>{
              return(
                <div className='containerImageCarousel' key={client.imageGrid.indexOf(e)} >
                  <img className='imageCarousel' src={e} alt={`image ${client.imageGrid.indexOf(e)}`}/>
                </div>
                )
              })
            }
            {client.imageCarousel.map((e)=>{
              return(
                <div className='containerImageCarousel' key={client.imageCarousel.indexOf(e)} >
                  <img className='imageCarousel' src={e} alt={`image ${client.imageGrid.indexOf(e)}`}/>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

  useEffect(()=>{
    galleryCarousel()
  },[galleryOn])

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
              <div onClick={()=>{setGalleryOn(true)}} key={client.imageGrid.indexOf(e)} className={`grid grid${client.imageGrid.indexOf(e)}`} >
                <img  src={e} alt={`image ${client.imageGrid.indexOf(e)}`}/>
              </div>
              )
            })
          }
        </div>
        {galleryOn&&galleryCarousel()}
        <div className='btn-back'>
          <Link className='link-back' to={"/"}>Atras</Link>
        </div>
        <HeroBottom/>
      </div>
      <Footer />
    </>
  );
};

export default ClientsPages;
