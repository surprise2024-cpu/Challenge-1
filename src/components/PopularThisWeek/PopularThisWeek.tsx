import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './PopularThisWeek.module.css'
import human from '../../assets/3D-image1.png'
import human2 from '../../assets/3D-image2.png'
import human3 from '../../assets/3D-image3.png'
import human4 from '../../assets/3D-image4.png'
import heart from '../../assets/heart.png'

import { Text } from '../Text/Text'

const originalItems = [
  {id: 1, title: 'Costa', author: 'by Yang', price: '1.75 ETH', likes: '39k', image: human},
  {id: 1, title: 'VERSACE', author: ' by Antoni Tudisco', price: '2.45 ETH', likes: '48k', image: human2},
  {id: 1, title: 'Digital Decade', author: 'by Anthony gargasz', price: '2.45 ETH', likes: '50k', image: human3, featured: true},
  {id: 1, title: 'Winter Jamz', author: 'by Antoni Tudisco', price: '2.3 ETH', likes: '47k', image: human4},
  {id: 1, title: 'Pastal Wifey', author: 'by blake kathryn', price: '2.23 ETH', likes: '44k', image: human}
]

const items = [...originalItems, ...originalItems].map((item, i) => (
  {...item, key: `${item.id}-${i}`}
))

export const PopularThisWeek: React.FC<any> = () => {
  return (

    <ContentContainer className={styles.content}>

        <div className={styles['head-cont']}>
            <Text variant='h2'>Popular This week </Text> 
        </div>

        <div className={styles.images}>

          {items.map((item, i) => (

            <div key={item.id} className={styles.card} style={{'--i': i % originalItems.length } as React.CSSProperties}>

              <img src={item.image} className={styles.image} alt={item.title} />

              <div className={styles.overlay}>

                <div>

                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.author}>{item.author}</div>

                </div>

                <div className={styles.meta}>

                  <div className={styles.price}>{item.price}</div>
                  <div className={styles.likes}>{}{item.likes}</div>

                </div>

              </div>

            </div>
          ))}

          
            
        </div>

    </ContentContainer>
  )
}
