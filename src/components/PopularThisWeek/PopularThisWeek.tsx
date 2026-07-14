import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './PopularThisWeek.module.css'
import human from '../../assets/3D-image1.png'
import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'

export const PopularThisWeek: React.FC<any> = () => {
  return (

    <ContentContainer className={styles.content}>

        <div className={styles['head-cont']}>
            Popular This week 
        </div>

        <div className={styles.images}>
            <img src={human} />
            
        </div>
        
    </ContentContainer>
  )
}
