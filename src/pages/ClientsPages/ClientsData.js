
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
import gridMostaza2 from '../../assets/Images/ClientsPhotos/mostaza/grid2.avif'
import gridMostaza3 from '../../assets/Images/ClientsPhotos/mostaza/grid3.avif'
import gridMostaza4 from '../../assets/Images/ClientsPhotos/mostaza/grid4.avif'
import gridMostaza5 from '../../assets/Images/ClientsPhotos/mostaza/grid5.avif'

/* Voss */
import gridVoss1 from '../../assets/Images/ClientsPhotos/voss/grid1.avif'
import gridVoss2 from '../../assets/Images/ClientsPhotos/voss/grid2.avif'
import gridVoss3 from '../../assets/Images/ClientsPhotos/voss/grid3.avif'
import gridVoss4 from '../../assets/Images/ClientsPhotos/voss/grid4.avif'
import gridVoss5 from '../../assets/Images/ClientsPhotos/voss/grid5.avif'

/* Dr Beauty */
import gridDrBeauty1 from '../../assets/Images/ClientsPhotos/drbeauty/grid1.avif'
import gridDrBeauty2 from '../../assets/Images/ClientsPhotos/drbeauty/grid2.avif'
import gridDrBeauty3 from '../../assets/Images/ClientsPhotos/drbeauty/grid3.avif'
import gridDrBeauty4 from '../../assets/Images/ClientsPhotos/drbeauty/grid4.avif'
import gridDrBeauty5 from '../../assets/Images/ClientsPhotos/drbeauty/grid5.avif'

/* Crazy */
import gridCrazy1 from '../../assets/Images/ClientsPhotos/crazy/grid1.avif'
import gridCrazy2 from '../../assets/Images/ClientsPhotos/crazy/grid2.avif'
import gridCrazy3 from '../../assets/Images/ClientsPhotos/crazy/grid3.avif'
import gridCrazy4 from '../../assets/Images/ClientsPhotos/crazy/grid4.avif'
import gridCrazy5 from '../../assets/Images/ClientsPhotos/crazy/grid5.avif'

/* Tecno Aislantes */
import gridTecno1 from '../../assets/Images/ClientsPhotos/tecno/grid1.avif'
import gridTecno2 from '../../assets/Images/ClientsPhotos/tecno/grid2.avif'
import gridTecno3 from '../../assets/Images/ClientsPhotos/tecno/grid3.avif'
import gridTecno4 from '../../assets/Images/ClientsPhotos/tecno/grid4.avif'
import gridTecno5 from '../../assets/Images/ClientsPhotos/tecno/grid5.avif'

/* YIP */
import gridYip1 from '../../assets/Images/ClientsPhotos/yip/grid1.avif'
import gridYip2 from '../../assets/Images/ClientsPhotos/yip/grid2.avif'
import gridYip3 from '../../assets/Images/ClientsPhotos/yip/grid3.avif'
import gridYip4 from '../../assets/Images/ClientsPhotos/yip/grid4.avif'
import gridYip5 from '../../assets/Images/ClientsPhotos/yip/grid5.avif'

/* IAA */
import gridIaa1 from '../../assets/Images/ClientsPhotos/iaa/grid1.avif'
import gridIaa2 from '../../assets/Images/ClientsPhotos/iaa/grid2.avif'
import gridIaa3 from '../../assets/Images/ClientsPhotos/iaa/grid3.avif'
import gridIaa4 from '../../assets/Images/ClientsPhotos/iaa/grid4.avif'
import gridIaa5 from '../../assets/Images/ClientsPhotos/iaa/grid5.avif'

/* LA Birra */
import gridLaBirra1 from '../../assets/Images/ClientsPhotos/labirra/grid1.avif'
import gridLaBirra2 from '../../assets/Images/ClientsPhotos/labirra/grid2.avif'
import gridLaBirra3 from '../../assets/Images/ClientsPhotos/labirra/grid3.avif'
import gridLaBirra4 from '../../assets/Images/ClientsPhotos/labirra/grid4.avif'
import gridLaBirra5 from '../../assets/Images/ClientsPhotos/labirra/grid5.avif'

/* Data */

const clientData = [
  {
    name: 'mostaza',
    slug: 'client-one',
    logo:logomostaza,
    imageGrid:[gridMostaza1,gridMostaza2,gridMostaza3,gridMostaza4,gridMostaza5],
    description: 'Generación de contenido - Community management (Instagram, Facebook, TikTok, Twitter) - Marketing de influencer',
  },
  {
    name: 'voss',
    logo:logovoss,
    slug: 'client-two',
    imageGrid: [gridVoss1,gridVoss2,gridVoss3,gridVoss4,gridVoss5],
    description: 'Estrategía social media - Generación de contenido - Community management (Instagram, Facebook) - Adds.',
  },
  {
    name: 'drbeauty',
    logo: logodrbeauty,
    slug: 'client-two',
    imageGrid: [gridDrBeauty1,gridDrBeauty2,gridDrBeauty3,gridDrBeauty4,gridDrBeauty5],
    description: 'Estrategia social media - Generación de contenido - Community management (Instagram y Facebook) - Marketing de influencers',
  },
  {
    name: 'tecno',
    logo: logotecno,
    slug: 'client-two',
    imageGrid: [gridTecno1,gridTecno2,gridTecno3,gridTecno4,gridTecno5],
    description: 'Estrategia social media - Generación de contenido - Community management (Instagram y Facebook) - Marketing de influencers',
  },
  {
    name: 'crazy',
    logo: logocrazy,
    slug: 'client-two',
    imageGrid: [gridCrazy1,gridCrazy2,gridCrazy3,gridCrazy4,gridCrazy5],
    description: 'Estrategia social media - Community management (Instagram y Facebook)',
  },
  {
    name: 'yip',
    logo: logoyip,
    slug: 'client-two',
    imageGrid: [gridYip1,gridYip2,gridYip3,gridYip4,gridYip5],
    description: 'Estrategia social media - Community management (Instagram y Facebook)',
  },
  {
    name: 'iaa',
    logo: logoiaa,
    slug: 'client-two',
    imageGrid: [gridIaa1,gridIaa2,gridIaa3,gridIaa4,gridIaa5],
    description: 'Estrategia social media - Generación de contenido - Community management (Instagram y Facebook) - Marketing de influencers',
  },
  {
    name: 'labirra',
    logo: logolabirra,
    slug: 'client-two',
    imageGrid: [gridLaBirra1,gridLaBirra2,gridLaBirra3,gridLaBirra4,gridLaBirra5],
    description: 'Estrategia social media - Community management (Instagram y Facebook)',
  }
]

export default clientData;
