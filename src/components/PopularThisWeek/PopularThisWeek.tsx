import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './PopularThisWeek.module.css'
import human from '../../assets/3D-image1.png'
import human2 from '../../assets/3D-image2.png'
import human3 from '../../assets/3D-image3.png'
import human4 from '../../assets/3D-image4.png'
import human5 from '../../assets/3D-image5.png'

import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'

export const PopularThisWeek: React.FC<any> = () => {
  return (

    <ContentContainer className={styles.content}>

        <div className={styles['head-cont']}>
            Popular This week 
        </div>

        <div className={styles.images}>
            <img src={human} className={styles.image} />
            <img src={human2} className={styles.image} />
            <img src={human3} className={styles.image} />
            <img src={human4} className={styles.image} />
            <img src={human5} className={styles.image} />
        </div>

    </ContentContainer>
  )
}
