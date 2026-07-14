import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './ExploreArtWorks.module.css'
import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'
import human from '../../assets/3D-image2.png'
import { Text } from '../Text/Text'

export const ExploreArtWorks = () => {
  return (

    <ContentContainer className={styles.content}>
        <div className={styles['head-cont']}>
            <Text variant='h2'>Explore Artworks</Text> 
        </div>

        <div className={styles.images}>
            <HeroCardOverlay image={human} imageAlt={'3D image'} endingIn={'222'} highestBid={'761'} />
        </div>

    </ContentContainer>
  )
}
