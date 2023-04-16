import React from 'react'
import {Link} from "react-router-dom"
import {logos} from "../../assets/clientPhotos"

import '../../styles/GalleryClients.sass'

const GalleryClients = () => {
  return (
    <div className="gallery">
      {logos.map((elem)=>{
        return(
          <Link to={`/${elem.id}`} className={`grid ${elem.grid}`}>
            <img src={elem.img} alt={`img_${elem.id}`}/>
          </Link>
        )
      })}
    </div>
  )
}
export default GalleryClients