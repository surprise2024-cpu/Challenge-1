import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './TopSellers.module.css'

import { Text } from '../Text/Text'
import { TopSellerBar } from './TopSellerBar'


import man1 from '../../assets/man1.jpg'
import man2 from '../../assets/man4.jpg'
import man6 from '../../assets/man6.jpg'
import man7 from '../../assets/man7.jpg'
import woman4 from '../../assets/woman4.jpg'
import man3 from '../../assets/man3.jpg'
import woman3 from '../../assets/woman3.jpg'
import woman5 from '../../assets/woman5.jpg'
import woman6 from '../../assets/woman6.jpg'
import woman8 from '../../assets/woman8.jpg'

const sellers = [
  {id: 1, name: 'Leighton Kramer', price: '276.7 Eth', image: man1},
  {id: 2, name: 'Haylie Arcand', price: '345.6 Eth', image: woman4 },
  {id: 3, name: 'Bowen Higgins', price: '323.7 Eth', image: man2 },
  {id: 4, name: 'Saige fuentes', price: '347.7 Eth', image: man7 },
  {id: 5, name: 'Sophie Mclain', price: '230.6 Eth', image: woman3 },
  
]

const sellers2 = [
  {id: 6, name: 'Jeremy Burch', price: '267.9 Eth', image: man6 },
  {id: 7, name: 'Amelie Griffith', price: '334.1 Eth', image: woman5 },
  {id: 8, name: 'Isabela Hart', price: '289.1 Eth', image: woman6 },
  {id: 9, name: 'Diego Bentley', price: '290.7 Eth', image: man3 },
  {id: 10, name: 'Daisy Arnord', price: '265.4 Eth', image: woman8 }
]

export const TopSellers: React.FC = () => {
  return (

    <ContentContainer className={styles['seller-section']}>
        <div className={styles['head-cont']}>
            <Text variant='h2'>Top Sellers</Text> 
        </div>

        <div className={styles['card-container']}>
          <div className={styles['seller-track']}>

            {
              sellers.map((sel) => (
                <TopSellerBar key={sel.id} image={sel.image} name={sel.name} price={sel.price} />
              ))
            }

            {
              sellers.map((sel) => (
                <TopSellerBar key={sel.id} image={sel.image} name={sel.name} price={sel.price} />
              ))
            }

          </div>

          <div className={styles['seller-track2']}>

            {
              sellers2.map((sel2) => (
                <TopSellerBar key={sel2.id} image={sel2.image} name={sel2.name} price={sel2.price} />
              ))
            }

            {
              sellers2.map((sel2) => (
                <TopSellerBar key={sel2.id} image={sel2.image} name={sel2.name} price={sel2.price} />
              ))
            }

          </div>

        </div>

    </ContentContainer>
  )
}