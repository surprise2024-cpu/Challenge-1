import React from 'react'

import styles from './ExploreArtWorks.module.css'
import { Text } from '../Text/Text'

type CardProps = {
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    name: string, 
    items: string
}

export const ExploreArtWorksCard: React.FC<CardProps> = ({ img1, img2, img3, img4, name, items}) => {
  return (
    <div className={styles['card']}>

        <section className={styles['first-sec']}>

            <div>
                <img  className={styles.image1} src={img1} alt='image 1'/>
            </div>

            <div>
                <img className={styles.image} src={img2} alt='image 2'/>
            </div>

            <div>
                <img className={styles.image2} src={img3} alt='image 3'/>
            </div>

        </section>

        <section className={styles['second-sec']}>
            
            <div>
                <img className={styles.image4} src={img4} alt='image 4'/>
            </div>

        </section>
        
        <div className={styles['text-sec']}>
            
            <div>
                <Text className={styles.name} variant={'span'}>{ name }</Text>
            </div>
            
            <div>
                <Text className={styles.items} variant={'span'}>{ items }</Text>
            </div>

        </div>
        
    </div>
  )
}
