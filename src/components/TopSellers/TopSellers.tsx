import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './TopSellers.module.css'

import { Text } from '../Text/Text'
import { TopSellerBar } from './TopSellerBar'

import human from '../../assets/man1.jpg'
import human2 from '../../assets/man2.jpg'
import human3 from '../../assets/man6.jpg'
import human4 from '../../assets/man7.jpg'
import human5 from '../../assets/man-4.jpg'
import human6 from '../../assets/woman1.jpg'
import human7 from '../../assets/man-3.jpg'
import human8 from '../../assets/woman-3.jpg'
import human9 from '../../assets/woman-5.jpg'
import human10 from '../../assets/man2.jpg'
import human11 from '../../assets/man-3.jpg'

const sellers = [
  {id: 1, name: 'Leighton Kramer', price: '276.7 Eth', image: human},
  {id: 2, name: 'Haylie Arcand', price: '345.6 Eth', image: human2 },
  {id: 3, name: 'Bowen Higgins', price: '323.7 Eth', image: human3 },
  {id: 4, name: 'Saige fuentes', price: '347.7 Eth', image: human4 },
  {id: 5, name: 'Sophie Mclain', price: '230.6 Eth', image: human5 },
  
]

const sellers2 = [
  {id: 6, name: 'Jeremy Burch', price: '267.9 Eth', image: human6 },
  {id: 7, name: 'Amelie Griffith', price: '334.1 Eth', image: human7 },
  {id: 8, name: 'Iasbela Hart', price: '289.1 Eth', image: human8 },
  {id: 9, name: 'Diego Bentley', price: '290.7 Eth', image: human9 },
  {id: 10, name: 'Daisy Arnord', price: '265.4 Eth', image: human10 }
]

export const TopSellers: React.FC<any> = () => {
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
