import React from 'react'

import styles from './TopSellers.module.css'

// Information needed to displa one seller card.
type TopSellerBarProps = {
    image: string, 
    name: string, 
    price: string
}

export const TopSellerBar: React.FC<TopSellerBarProps> = ({ image, name, price }) => {
  return (
    <div className={styles['bar']}>

        <div className={styles['card']}>

            <div className={styles['image-cont']}>

                <img src={image} alt={`${name} profile`} className={styles['image']}/>

            </div>

            {/* Shows the seller's name and total ETH amount. */}
            <div className={styles['seller-details']}>
            
                <div className={styles['name']}>{ name }</div>
                <div className={styles['price']}>{ price }</div>

            </div>
        
        </div>

    </div>
  )
}