import React from "react"
import "../../styles/GalleryClientDetail.sass"

import imgcrazy from '../../assets/Images/clientCrazy.svg'
import imgdrbeauty from '../../assets/Images/clientDrBeauty.svg'
import imgiaa from '../../assets/Images/clientIAA.svg'
import imglabirra from '../../assets/Images/clientLaBirra.svg'
import imgmostaza from '../../assets/Images/clientMostaza.svg'
import imgtecno from '../../assets/Images/clientTecno.svg'
import imgyip from '../../assets/Images/clientYip.svg'
import imgvoss from '../../assets/Images/clientVoss.svg'
import photos from '../../assets/Images/photos.svg'

const GalleryClientDetail = () =>{
    return(
        <div className="gridContainerClientDetail">
            <div className="gridDetail hor-size-detail">
                <img src={photos} alt="imagen1" />
            </div>
            <div className="gridDetail common-size-detail-top">
                <img src={photos} alt="imagen1" />
            </div>
            <div className="gridDetail ver-size-detail">
                <img src={photos} alt="imagen1" />
            </div>
            <div className="gridDetail common-size-detail-medium">
                <img src={photos} alt="imagen1" />
            </div>
            <div className="gridDetail common-size-detail-bottom">
                <img src={photos} alt="imagen1" />
            </div>
        </div>
    )
}
export default GalleryClientDetail