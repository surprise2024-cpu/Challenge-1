import React from 'react'
import styles from './HeroCardOverlay.module.css'

type HeroCardOverlayProps = {
    image: string,
    imageAlt: string, 
    endingIn: string, 
    highestBid: string,
    onPlaceBid?: () => void,
    onPurchase?: () => void
}

export const HeroCardOverlay: React.FC<HeroCardOverlayProps> = ({image, imageAlt, endingIn, highestBid, onPlaceBid, onPurchase }) => {
  return (
    <div className={styles.card}>

        <img src={image} alt={imageAlt} className={styles.artworkImg}/>
        
        <div className={styles.footer}>
            <div className={styles.row}>
                <div>
                    <div className={styles.label}>Ending in: </div>
                    <div className={styles.value}>{endingIn}</div>
                </div>
                <div>
                    <div className={styles.label}>Highest Bid </div>
                    <div className={styles.value}>{highestBid}</div>
                </div>
                
            </div>
            <div className={styles['button-row']}>
                <button className={styles['bid-button']} onClick={onPlaceBid}>Place a Bid</button>
                <button className={styles['purchase-button']} onClick={onPurchase}>Purchase</button>
            </div>
        </div>

    </div>
  )
}
