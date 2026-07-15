import React from 'react'

import styles from './Community.module.css'
import { Text } from '../Text/Text'
import { ContentContainer } from '../ContentContainer'



export const Community = () => {
  return (
    <div className={styles.community}>

        <ContentContainer className={styles.content}>

            <div className={styles['text-cont']}>

                <Text className={styles.text} variant={'p'}>Join Us to create Sell and Collect NFTs Digital Art</Text>
            
            </div>

            <div className={styles['btn-cont']}>

                <button className={styles['comm-btn']}>Join Community</button>

            </div>

        </ContentContainer>
        
    </div>
  )
}
