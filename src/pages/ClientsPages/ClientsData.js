
/* Logos */

import logomostaza from '../../assets/Images/Clients/clientMostaza.svg'
import logovoss from '../../assets/Images/Clients/clientVoss.svg'
import logodrbeauty from '../../assets/Images/Clients/clientDrBeauty.svg'
import logotecno from '../../assets/Images/Clients/clientTecno.svg'
import logocrazy from '../../assets/Images/Clients/clientCrazy.svg'
import logoyip from '../../assets/Images/Clients/clientYip.svg'
import logoiaa from '../../assets/Images/Clients/clientIAA.svg'
import logolabirra from '../../assets/Images/Clients/clientLaBirra.svg'

/* Grids */

/* Mostaza */
import gridMostaza1 from '../../assets/Images/ClientsPhotos/mostaza/grid1.avif'
import gridMostaza2 from '../../assets/Images/ClientsPhotos/mostaza/grid2.JPEG'
import gridMostaza3 from '../../assets/Images/ClientsPhotos/mostaza/grid3.JPEG'
import gridMostaza4 from '../../assets/Images/ClientsPhotos/mostaza/grid4.jpeg'
import gridMostaza5 from '../../assets/Images/ClientsPhotos/mostaza/grid5.avif'

/* Voss */
import gridVoss1 from '../../assets/Images/ClientsPhotos/voss/grid1.PNG'
import gridVoss2 from '../../assets/Images/ClientsPhotos/voss/grid2.jpeg'
import gridVoss3 from '../../assets/Images/ClientsPhotos/voss/grid3.heif'
import gridVoss4 from '../../assets/Images/ClientsPhotos/voss/grid4.heif'
import gridVoss5 from '../../assets/Images/ClientsPhotos/voss/grid5.jpeg'

/* Dr Beauty */
import gridDrBeauty1 from '../../assets/Images/ClientsPhotos/drbeauty/grid1.jpeg'
import gridDrBeauty2 from '../../assets/Images/ClientsPhotos/drbeauty/grid2.jpeg'
import gridDrBeauty3 from '../../assets/Images/ClientsPhotos/drbeauty/grid3.PNG'
import gridDrBeauty4 from '../../assets/Images/ClientsPhotos/drbeauty/grid4.jpeg'
import gridDrBeauty5 from '../../assets/Images/ClientsPhotos/drbeauty/grid5.HEIC'

/* Crazy */
import gridCrazy1 from '../../assets/Images/ClientsPhotos/crazy/grid1.jpg'
import gridCrazy2 from '../../assets/Images/ClientsPhotos/crazy/grid2.jpg'
import gridCrazy3 from '../../assets/Images/ClientsPhotos/crazy/grid3.jpg'
import gridCrazy4 from '../../assets/Images/ClientsPhotos/crazy/grid4.jpg'
import gridCrazy5 from '../../assets/Images/ClientsPhotos/crazy/grid5.jpg'

/* Tecno Aislantes */
import gridTecno1 from '../../assets/Images/ClientsPhotos/tecno/grid1.jpeg'
import gridTecno2 from '../../assets/Images/ClientsPhotos/tecno/grid2.jpeg'
import gridTecno3 from '../../assets/Images/ClientsPhotos/tecno/grid3.png'
import gridTecno4 from '../../assets/Images/ClientsPhotos/tecno/grid4.jpeg'
import gridTecno5 from '../../assets/Images/ClientsPhotos/tecno/grid5.PNG'

/* YIP */
import gridYip1 from '../../assets/Images/ClientsPhotos/yip/grid1.jpg'
import gridYip2 from '../../assets/Images/ClientsPhotos/yip/grid2.JPG'
import gridYip3 from '../../assets/Images/ClientsPhotos/yip/grid3.jpg'
import gridYip4 from '../../assets/Images/ClientsPhotos/yip/grid4.jpg'
import gridYip5 from '../../assets/Images/ClientsPhotos/yip/grid5.jpg'

/* IAA */
import gridIaa1 from '../../assets/Images/ClientsPhotos/iaa/grid1.PNG'
import gridIaa2 from '../../assets/Images/ClientsPhotos/iaa/grid2.PNG'
import gridIaa3 from '../../assets/Images/ClientsPhotos/iaa/grid3.PNG'
import gridIaa4 from '../../assets/Images/ClientsPhotos/iaa/grid4.PNG'
import gridIaa5 from '../../assets/Images/ClientsPhotos/iaa/grid5.PNG'

/* LA Birra */
import gridLaBirra1 from '../../assets/Images/ClientsPhotos/labirra/grid1.PNG'
import gridLaBirra2 from '../../assets/Images/ClientsPhotos/labirra/grid2.PNG'
import gridLaBirra3 from '../../assets/Images/ClientsPhotos/labirra/grid3.PNG'
import gridLaBirra4 from '../../assets/Images/ClientsPhotos/labirra/grid4.PNG'
import gridLaBirra5 from '../../assets/Images/ClientsPhotos/labirra/grid5.JPG'

/* Carousel */

/* Mostaza */
import carouselMostaza1 from '../../assets/Images/ClientsPhotos/mostaza/carousel1.avif'
import carouselMostaza2 from '../../assets/Images/ClientsPhotos/mostaza/carousel2.avif'
import carouselMostaza3 from '../../assets/Images/ClientsPhotos/mostaza/carousel3.avif'
import carouselMostaza4 from '../../assets/Images/ClientsPhotos/mostaza/carousel4.avif'
import carouselMostaza5 from '../../assets/Images/ClientsPhotos/mostaza/carousel5.avif'
import carouselMostaza6 from '../../assets/Images/ClientsPhotos/mostaza/carousel6.avif'
import carouselMostaza7 from '../../assets/Images/ClientsPhotos/mostaza/carousel7.avif'


/* Data */
const clientData = [
  {
    name: 'mostaza',
    slug: 'client-one',
    logo:logomostaza,
    imageGrid:[gridMostaza1,gridMostaza2,gridMostaza3,gridMostaza4,gridMostaza5],
    imageCarousel:[carouselMostaza1,carouselMostaza2,carouselMostaza3,carouselMostaza4,carouselMostaza5,carouselMostaza6,carouselMostaza7],
    description: 'Generación de contenido - Community management (Instagram, Facebook, TikTok, Twitter) - Marketing de influencer',
  },
  {
    name: 'voss',
    logo:logovoss,
    slug: 'client-two',
    imageGrid: [gridVoss1,gridVoss2,gridVoss3,gridVoss4,gridVoss5],
    imageCarousel:[],
    description: 'Estrategía social media - Generación de contenido - Community management (Instagram, Facebook) - Adds.',
  },
  {
    name: 'drbeauty',
    logo: logodrbeauty,
    slug: 'client-two',
    imageGrid: [gridDrBeauty1,gridDrBeauty2,gridDrBeauty3,gridDrBeauty4,gridDrBeauty5],
    imageCarousel:[],
    description: 'Estrategia social media - Generación de contenido - Community management (Instagram y Facebook) - Marketing de influencers',
  },
  {
    name: 'tecno',
    logo: logotecno,
    slug: 'client-two',
    imageGrid: [gridTecno1,gridTecno2,gridTecno3,gridTecno4,gridTecno5],
    imageCarousel:[],
    description: 'Estrategia social media - Generación de contenido - Community management (Instagram y Facebook) - Marketing de influencers',
  },
  {
    name: 'crazy',
    logo: logocrazy,
    slug: 'client-two',
    imageGrid: [gridCrazy1,gridCrazy2,gridCrazy3,gridCrazy4,gridCrazy5],
    imageCarousel:[],
    description: 'Estrategia social media - Community management (Instagram y Facebook)',
  },
  {
    name: 'yip',
    logo: logoyip,
    slug: 'client-two',
    imageGrid: [gridYip1,gridYip2,gridYip3,gridYip4,gridYip5],
    imageCarousel:[],
    description: 'Estrategia social media - Community management (Instagram y Facebook)',
  },
  {
    name: 'iaa',
    logo: logoiaa,
    slug: 'client-two',
    imageGrid: [gridIaa1,gridIaa2,gridIaa3,gridIaa4,gridIaa5],
    imageCarousel:[],
    description: 'Estrategia social media - Generación de contenido - Community management (Instagram y Facebook) - Marketing de influencers',
  },
  {
    name: 'labirra',
    logo: logolabirra,
    slug: 'client-two',
    imageGrid: [gridLaBirra1,gridLaBirra2,gridLaBirra3,gridLaBirra4,gridLaBirra5],
    imageCarousel:[],
    description: 'Estrategia social media - Community management (Instagram y Facebook)',
  }
]

export default clientData;
