import React from 'react'

import styles from './Band.module.css'
import { Text } from '../Text/Text'

// information needed to build one partner item in the scrolling band
export type BandbarProps = {
    name: string,
    img?: string,
    img2?: string
}

export const Bandbar: React.FC<BandbarProps> = ({name, img, img2}) => {
  return (
    <div className={styles['bandbar-container']}>

      {/*
        Some partners have an icon before the name,
        while others use an icon after their name.
      */}

      {img &&(
        <div className={styles['bandbar-image']}>
          <img src={img} alt='icon'/>
        </div>
      )}

      <div className={styles['bandbar-text']}>
        <Text variant='h2'>{name}</Text>
      </div>
      
      {img2 &&(
        <div className={styles['bandbar-image']}>
          <img src={img2} alt='icon'/>
        </div>
      )}

    </div>
  )
}