import React from "react"
import { useParams, Link } from "react-router-dom"
import {GalleryClientDetail} from "../index"
import "../../styles/ClientDetail.sass"

import imgcrazy from '../../assets/Images/clientCrazy.svg'
import imgdrbeauty from '../../assets/Images/clientDrBeauty.svg'
import imgiaa from '../../assets/Images/clientIAA.svg'
import imglabirra from '../../assets/Images/clientLaBirra.svg'
import imgmostaza from '../../assets/Images/clientMostaza.svg'
import imgtecno from '../../assets/Images/clientTecno.svg'
import imgyip from '../../assets/Images/clientYip.svg'
import imgvoss from '../../assets/Images/clientVoss.svg'

const ClientDetail = () =>{
    const client= useParams()
    return(
        <div className="clientDetailContainer">
            <a target="_blank" href="www.google.com">
                <img src={imgyip} alt="logoCrazy" />
            </a>
            <p>Nunc et rhoncus vitae malesuada praesent urna nulla ultricies. Nunc et rhoncus vitae malesuada praesent urna nulla ultricies. Estz  et facilisi palabra palabra palabra bibendum feugiat.</p>
            <GalleryClientDetail/>
            <Link to="/" className="btn-back">Volver atras</Link>
        </div>
    )
}
export default ClientDetail