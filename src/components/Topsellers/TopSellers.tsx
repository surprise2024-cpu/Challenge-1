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

// Seller data used for the first scrolling row.
const sellers = [
  {id: 1, name: 'Leighton Kramer', price: '276.7 ETH', image: man1},
  {id: 2, name: 'Haylie Arcand', price: '345.6 ETH', image: woman4 },
  {id: 3, name: 'Bowen Higgins', price: '323.7 ETH', image: man2 },
  {id: 4, name: 'Saige fuentes', price: '347.7 ETH', image: man7 },
  {id: 5, name: 'Sophie Mclain', price: '230.6 ETH', image: woman3 },
  
]

// Seller data used for the second scrolling row.
const sellers2 = [
  {id: 6, name: 'Jeremy Burch', price: '267.9 ETH', image: man6 },
  {id: 7, name: 'Amelie Griffith', price: '334.1 ETH', image: woman5 },
  {id: 8, name: 'Isabela Hart', price: '289.1 ETH', image: woman6 },
  {id: 9, name: 'Diego Bentley', price: '290.7 ETH', image: man3 },
  {id: 10, name: 'Daisy Arnord', price: '265.4 ETH', image: woman8 }
]

export const TopSellers: React.FC = () => {
  return (

    <ContentContainer className={styles['seller-section']}>
        <div className={styles['head-cont']}>

          <Text variant='h2'>Top Sellers</Text> 

        </div>

        {/* Two scroling rows of the seller cards. */}
        <div className={styles['card-container']}>
          <div className={styles['seller-track']}>

            {/* Repeats the first seller list so the row can scroll continuously. */}
            {
              sellers.map((sel) => (
                <TopSellerBar key={`a-${sel.id}`} image={sel.image} name={sel.name} price={sel.price} />
              ))
            }

            {
              sellers.map((sel) => (
                <TopSellerBar key={`b-${sel.id}`} image={sel.image} name={sel.name} price={sel.price} />
              ))
            }

          </div>

          <div className={styles['seller-track2']}>

            {
              sellers2.map((sel2) => (
                <TopSellerBar key={`c-${sel2.id}`} image={sel2.image} name={sel2.name} price={sel2.price} />
              ))
            }

            {
              sellers2.map((sel2) => (
                <TopSellerBar key={`d-${sel2.id}`} image={sel2.image} name={sel2.name} price={sel2.price} />
              ))
            }

          </div>

        </div>

    </ContentContainer>
  )
}