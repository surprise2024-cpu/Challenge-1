import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './TopSellers.module.css'
import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'
import human from '../../assets/3D-image2.png'
import { Text } from '../Text/Text'

export const TopSellers = () => {
  return (

    <ContentContainer>
        <div className={styles['head-cont']}>
            <Text variant='h2'>Top Sellers</Text> 
        </div>

        <div className={styles.images}>
            <HeroCardOverlay image={human} imageAlt={'3D image'} endingIn={'222'} highestBid={'761'} />
        </div>

    </ContentContainer>
  )
}
