import React from 'react';
import '../../styles/People.sass'
import { FaAppStore } from "react-icons/fa";

const People = () => {
	return (
    <div className={'people-list'}>
      <div className={'people-container'}>
        <FaAppStore className={'people-image'}/>
        <div className={'people-middle-title text-center'}><h1>Lorem ipsum</h1></div>
        <div className={'people-middle-text text-center'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus exercitationem cupiditate possimus ex ipsum</p></div>
      </div>
      <div className={'people-container'}>
        <FaAppStore className={'people-image'}/>
        <div className={'people-middle-title text-center'}><h1>Lorem ipsum</h1></div>
        <div className={'people-middle-text text-center'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus exercitationem cupiditate possimus ex ipsum</p></div>
       </div>
    </div>
	)
}

export default People;
