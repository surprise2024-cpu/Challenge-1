import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './TopSellers.module.css'
import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'
import human from '../../assets/3D-image2.png'
import { Text } from '../Text/Text'
import { TopSellerBar } from './TopSellerBar'

export const TopSellers = () => {
  return (

    <ContentContainer>
        <div className={styles['head-cont']}>
            <Text variant='h2'>Top Sellers</Text> 
        </div>

        <div className={styles['card-container']}>
            <TopSellerBar image={human} name={'Leighton Kramer'} price={'276.7 Eth'} />
            <TopSellerBar image={human} name={'Leighton Kramer'} price={'276.7 Eth'} />
        </div>

    </ContentContainer>
  )
}
