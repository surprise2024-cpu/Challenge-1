import React, { useEffect, useRef, useState } from 'react'

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
  {id: 2, title: 'VERSACE', author: ' by Antoni Tudisco', price: '2.45 ETH', likes: '48k', image: human2},
  {id: 3, title: 'Digital Decade', author: 'by Anthony gargasz', price: '2.45 ETH', likes: '50k', image: human3, featured: true},
  {id: 4, title: 'Winter Jamz', author: 'by Antoni Tudisco', price: '2.3 ETH', likes: '47k', image: human4},
  {id: 5, title: 'Pastal Wifey', author: 'by blake kathryn', price: '2.23 ETH', likes: '44k', image: human}
]

const items = [...originalItems, ...originalItems]

export const PopularThisWeek: React.FC = () => {

  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  /*
  Checks which cards are closest to the middle of th carousel.
  A card gets bigger as it moves toward the center,
  then gets smaller again after it passes the center.
  */
  useEffect(() => {

    let animationFrame: number;

    const findCenterCard = () => {

      const carousel = carouselRef.current

      if (!carousel) {
        return
      }

      const carouselRect = carousel.getBoundingClientRect();

      // calculates the carousels center
      const carouselCenter = carouselRect.left + carouselRect.width / 2;

      let closestIndex = 0
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {

        if (!card) {
          return
        }

        const cardRect = card.getBoundingClientRect();

        
        const cardCenter = cardRect.left + cardRect.width / 2;

        // whichever card has the smallest distance is the nearest to the center
        const distance = Math.abs(carouselCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }

      })

      setActiveIndex((current) =>
        current === closestIndex
          ? current
          : closestIndex
      )

      animationFrame = requestAnimationFrame(findCenterCard)
    }

    animationFrame = requestAnimationFrame(findCenterCard)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (

    <ContentContainer className={styles.content}>

        <div className={styles['head-cont']}>
            <Text variant='h2'>Popular This week </Text> 
        </div>

        <div className={styles.carousel}
          ref={carouselRef}
        >

          <div className={styles['carousel-track']}>

            {items.map((item, index) => (

            // styles.active, automatically gives the center card the enlarged style
            <div 
              key={`${item.id}-${index}`} 
              className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
              ref={(element) => {cardRefs.current[index] = element}}
            >

              <img src={item.image} className={styles.image} alt={item.title} />

              <div className={styles.overlay}>

                <div>

                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.author}>{item.author}</div>

                </div>

                <div className={styles.meta}>

                  <div className={styles.price}>{item.price}</div>
                  <div className={styles.likes}>

                    <img src={heart} alt='heart' className={styles['heart-icon']} />
                    <Text variant='span'>{item.likes}</Text>
                    
                  </div>

                  {/*Heart needs to be added above */}
                </div>

              </div>

            </div>
          ))}

          </div>
            
        </div>

    </ContentContainer>
  )
}