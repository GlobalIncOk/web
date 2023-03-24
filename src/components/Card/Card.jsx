import React from 'react';
import '../../styles/Card.sass'
import { FaAppStore } from "react-icons/fa";

const Card = () => {
	return (
    <div className={'service-card-list'}>
      <div className={'service-card-container'}>
        <FaAppStore className={'service-image'}/>
        <div className={'service-middle-title text-center'}><h1>Lorem ipsum</h1></div>
        <div className={'service-middle-text text-center'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus exercitationem cupiditate possimus ex ipsum</p></div>
        <div className={'service-bottom-text'}><p>Ver más</p></div>
      </div>
      <div className={'service-card-container'}>
        <FaAppStore className={'service-image'}/>
        <div className={'service-middle-title text-center'}><h1>Lorem ipsum</h1></div>
        <div className={'service-middle-text text-center'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus exercitationem cupiditate possimus ex ipsum</p></div>
        <div className={'service-bottom-text'}><p>Ver más</p></div>
      </div>
      <div className={'service-card-container'}>
        <FaAppStore className={'service-image'}/>
        <div className={'service-middle-title text-center'}><h1>Lorem ipsum</h1></div>
        <div className={'service-middle-text text-center'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus exercitationem cupiditate possimus ex ipsum</p></div>
        <div className={'service-bottom-text'}><p>Ver más</p></div>
      </div>
      <div className={'service-card-container'}>
        <FaAppStore className={'service-image'}/>
        <div className={'service-middle-title text-center'}><h1>Lorem ipsum</h1></div>
        <div className={'service-middle-text text-center'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus exercitationem cupiditate possimus ex ipsum</p></div>
        <div className={'service-bottom-text'}><p>Ver más</p></div>
      </div>
    </div>
	)
}

export default Card;
