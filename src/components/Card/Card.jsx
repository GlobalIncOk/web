import React from 'react';
import '../../styles/Card.sass'
import { FaAppStore } from "react-icons/fa";

const Card = ({services}) => {
	return (
		<div className={'card-container'}>
      <FaAppStore className={'image'}/>
      <div className={'middle-title text-center'}><h1>Lorem ipsum</h1></div>
      <div className={'middle-text text-center'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus exercitationem cupiditate possimus ex ipsum</p></div>
      <div className={'bottom-text'}><p>Ver más</p></div>
    </div>
	)
}

export default Card;
