import React from 'react'

import styles from './Band.module.css'
import { Text } from '../Text/Text'

export type BandbarProps = {
    name: string,
    img?: string,
    img2?: string
}

export const Bandbar: React.FC<BandbarProps> = ({name, img, img2}) => {
  return (
    <div className={styles['bandbar-container']}>

      {img &&(
        <div className={styles['bandbar-image']}>
          <img src={img} />
        </div>
      )}

      <div className={styles['bandbar-text']}>
        <Text variant='h2'>{name}</Text>
      </div>
      
      {img2 &&(
        <div className={styles['bandbar-image']}>
          <img src={img2} />
        </div>
      )}

    </div>
  )
}
