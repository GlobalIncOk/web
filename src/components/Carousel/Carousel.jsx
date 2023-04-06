import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ServiceCard from "../Cards/ServiceCard";
import '../../styles/Carr.sass'

import marketing from '../../assets/Icons/Services/Icono_DigitalMarketing.png'
import community from '../../assets/Icons/Services/Icono_CommunityMan.png'
import diseño from '../../assets/Icons/Services/Icono_DisenoWeb.png'
import grafico from '../../assets/Icons/Services/Icono_DisenoGrafico.png'
import email from '../../assets/Icons/Services/Icono_EmailMark.png'

const services = [
  { id: 1, name: 'Marketing Digital', src: marketing, description: 'Ofrecemos herramientas y soluciones para hacer crecer tu negocio, acorde a tu capacidad de presupuesto. Tanto de forma orgánica y paga.' },
  { id: 2, name: 'Community Management', src: diseño, description: 'Social media is the new black. La comunicación en redes sociales se ha vuelto primordial para hacer crecer tu negocio.' },
  { id: 3, name: 'Diseño Web', src: community, description: 'Nuestro equipo se encarga del diseño, creación y mantenimiento de páginas web, siempre desde la perspectiva del usuario, logrando así la forma más estética y dinámica.'},
  { id: 4, name: 'Diseño Gráfico', src: grafico, description: 'La creatividad es un diferencial, y junto con las herramientas correctas, hacen la diferencia a la hora de darle una identidad a tu marca.'},
  { id: 5, name: 'Email Marketing', src: email, description: 'Realizamos creación y análisis de campañas por correo electrónico, para llevar la comunicación de tu negocio a otro nivel.'}
]

const Carr = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1440, min: 992 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 501 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Carousel showDots={false} responsive={responsive} className='carr'>
        {services.map((service) =>
            <ServiceCard key={service.id} service={service} />
          )}
      </Carousel>
    </>
  );
}

export default Carr
