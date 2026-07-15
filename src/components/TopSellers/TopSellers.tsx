import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './TopSellers.module.css'
import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'
import human from '../../assets/3D-image2.png'
import { Text } from '../Text/Text'
import { TopSellerBar } from './TopSellerBar'

const sellers = [
  {id: 1, name: 'Leighton Kramer', price: '276.7 Eth' },
  {id: 2, name: 'Haylie Arcand', price: '345.6 Eth' },
  {id: 3, name: 'Bowen Higgins', price: '323.7 Eth' },
  {id: 4, name: 'Saige fuentes', price: '347.7 Eth' },
  {id: 5, name: 'Sophie Mclain', price: '230.6 Eth' },
  
]

const sellers2 = [
  {id: 6, name: 'Jeremy Burch', price: '267.9 Eth' },
  {id: 7, name: 'Amelie Griffith', price: '334.1 Eth' },
  {id: 8, name: 'Iasbela Hart', price: '289.1 Eth' },
  {id: 9, name: 'Diego Bentley', price: '290.7 Eth' },
  {id: 10, name: 'Daisy Arnord', price: '265.4 Eth' }
]

export const TopSellers = () => {
  return (

    <ContentContainer>
        <div className={styles['head-cont']}>
            <Text variant='h2'>Top Sellers</Text> 
        </div>

        <div className={styles['card-container']}>
          <div className={styles['seller-track']}>

            {
              sellers.map((sel) => (
                <TopSellerBar image={human} name={sel.name} price={sel.price} />
              ))
            }

            {
              sellers.map((sel) => (
                <TopSellerBar image={human} name={sel.name} price={sel.price} />
              ))
            }

          </div>

          <div className={styles['seller-track2']}>

          {
            sellers2.map((sel) => (
              <TopSellerBar image={human} name={sel.name} price={sel.price} />
            ))
          }

          {
            sellers2.map((sel) => (
              <TopSellerBar image={human} name={sel.name} price={sel.price} />
            ))
          }

          </div>

        </div>

    </ContentContainer>
  )
}
