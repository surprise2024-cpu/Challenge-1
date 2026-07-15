import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './ExploreArtWorks.module.css'
import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'
import human from '../../assets/3D-image1.png'
import human2 from '../../assets/3D-image2.png'
import human3 from '../../assets/3D-image3.png'
import human4 from '../../assets/3D-image4.png'
import { Text } from '../Text/Text'
import { ExploreArtWorksCard } from './ExploreArtWorksCard'

const artwork = [
  {id: 1, name: 'Abstract', items: '30 items', images: [human, human2, human3, human4]},
  {id: 2, name: '3D Art', items: '45 items', images: [human, human2, human3, human4]},
  {id: 3, name: 'Modern Art', items: '59 items', images: [human, human2, human3, human4]},
  {id: 4, name: 'Game', items: '25 items', images: [human, human2, human3, human4]},
  {id: 5, name: 'Graffiti', items: '36 items', images: [human, human2, human3, human4]},
  {id: 6, name: 'Watercolor', items: '40 items', images: [human, human2, human3, human4]},
]

export const ExploreArtWorks = () => {
  return (

    <ContentContainer className={styles.content}>
        <div className={styles['head-cont']}>
            <Text variant='h2'>Explore Artworks</Text> 
        </div>

        <div className={styles['card-cont']}>
                
            {
              artwork.map((art) => (
                <ExploreArtWorksCard key={art.id} img1={human} img2={human2} img3={human3} img4={human4} name={art.name} items={art.items} />
              ))
            }

        </div>

    </ContentContainer>
  )
}
