import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ServiceCard from "../Cards/ServiceCard";
import '../../styles/Carr.sass'
import { ServicesList } from "../../assets/ServiceList";

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
        {ServicesList.map((service) =>
            <ServiceCard key={service.id} service={service} />
          )}
      </Carousel>
    </>
  );
}

export default Carr
