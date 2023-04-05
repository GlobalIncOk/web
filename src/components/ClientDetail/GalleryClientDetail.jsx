import React from "react"
import "../../styles/GalleryClientDetail.sass"

import { clientsPhotos } from "../../assets/clientPhotos"


const GalleryClientDetail = () =>{
    return(
        <div className="gridContainerClientDetail">
            {clientsPhotos[0].images.map((elem)=>{
                return(
                    <div className={`gridDetail ${elem.grid}`}>
                        <img src={elem.img} alt="imagen1" />
                    </div>
                )
            })}
        </div>
    )
}
export default GalleryClientDetail