import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './ExploreArtWorks.module.css'
import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'
import human from '../../assets/3D-image2.png'
import { Text } from '../Text/Text'

const Artwork = [
  {id: 1, name: 'Abstract', items: '30 items'},
  {id: 2, name: '3D Art', items: '45 items'},
  {id: 3, name: 'Modern Art', items: '59 items'},
  {id: 4, name: 'Game', items: '25 items'},
  {id: 5, name: 'Graffiti', items: '36 items'},
  {id: 6, name: 'Watercolor', items: '40 items'},
]

export const ExploreArtWorks = () => {
  return (

    <ContentContainer className={styles.content}>
        <div className={styles['head-cont']}>
            <Text variant='h2'>Explore Artworks</Text> 
        </div>

        <div className={styles['full-card']}>
            {}
        </div>

    </ContentContainer>
  )
}
