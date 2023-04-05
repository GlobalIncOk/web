import imgmostaza from './Images/Clients/clientMostaza.svg'
import imgcrazy from './Images/Clients/clientCrazy.svg'
import imgdrbeauty from './Images/Clients/clientDrBeauty.svg'
import imgiaa from './Images/Clients/clientIAA.svg'
import imglabirra from './Images/Clients/clientLaBirra.svg'
import imgtecno from './Images/Clients/clientTecno.svg'
import imgyip from './Images/Clients/clientYip.svg'
import imgvoss from './Images/Clients/clientVoss.svg'

import photos from './Images/photos.svg'

export const logos = [
    {
        id:"mostaza",
        img:imgmostaza,
        grid:"big-size",
    },
    {
        id:"crazy",
        img:imgcrazy,
        grid:"hor-size",
    },
    {
        id:"drbeauty",
        img:imgdrbeauty,
        grid:"big-size",
    },
    {
        id:"iaa",
        img:imgiaa,
        grid:"hor-size",
    },
    {
        id:"labirra",
        img:imglabirra,
        grid:"big-size",
    },
    {
        id:"tecno",
        img:imgtecno,
        grid:"hor-size",
    },
    {
        id:"yip",
        img:imgyip,
        grid:"hor-size",
    },
    {
        id:"voss",
        img:imgvoss,
        grid:"big-size",
    }
]

export const clientsPhotos=[
    {
        id:"mostaza",
        logo:imgmostaza,
        images:[
            {
                img:photos,
                grid:"hor-size-detail"
            },
            {
                img:photos,
                grid:"common-size-detail-top",
            },
            {
                img:photos,
                grid:"ver-size-detail",
            },
            {
                img:photos,
                grid:"common-size-detail-medium",
            },
            {
                img:photos,
                grid:"common-size-detail-bottom",
            },
        ],
    },
    {
        id:"voss",
        logo:imgvoss,
        images:[
            {
                img:photos,
                grid:"hor-size-detail"
            },
            {
                img:photos,
                grid:"common-size-detail-top",
            },
            {
                img:photos,
                grid:"ver-size-top",
            },
            {
                img:photos,
                grid:"common-size-detail-medium",
            },
            {
                img:photos,
                grid:"common-size-detail-bottom",
            },
        ],
    }
]