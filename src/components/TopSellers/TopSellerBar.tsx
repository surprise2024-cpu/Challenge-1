import React from 'react'

import styles from './TopSellers.module.css'

type TopSellerBarProps = {
    image: string, 
    name: string, 
    price: string
}

export const TopSellerBar: React.FC<TopSellerBarProps> = ({ image, name, price }) => {
  return (
    <div className={styles['bar']}>

        <div className={styles['card']}>

            <div className={styles['image-container']}>

                <img src={image} alt='just an image' className={styles['image']}/>

            </div>

            <div className={styles['seller-details']}>
            
                <div className={styles['name']}>{ name }</div>
                <div className={styles['price']}>{ price }</div>

            </div>
        
        </div>

    </div>
  )
}
