import React from 'react'

import { Text } from '../Text/Text'
import styles from './Section1.module.css'
import xIcon from '../../assets/X.png'
import facebookIcon from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import discord from '../../assets/discord.png'
import image1 from '../../assets/3D-image1.png'
import { HeroCardOverlay } from '../HeroCardOverlay/HeroCardOverlay'
import videoIcon from '../../assets/video-icon.png'

export const Section1 = () => {
  return (
    <div className={styles['section1-container']}>
        <div className={styles['section1-info']}>
            <div className={styles['section-text']}>
                <Text variant={'h1'}>Discover, Collect</Text>
                <Text variant={'h1'}>and Sell Dope</Text>
                <Text variant={'h1'}>Art and NFTs</Text>
                <Text variant={'p'}>
                    The worlds larest digital marketplace for crypto <br/>
                    and non fungible tokens (NFTs)
                </Text>
            </div>
            
            <div className={styles['section-actions']}>
                <button className={styles['section1-btn1']}>Discover</button>
                <button className={styles['section1-btn2']}>Create</button>
                <div className={styles['video-section']}>
                    <img src={videoIcon} alt='video icon' className={styles['video-icon']}/>
                    <a href='#/' className={styles['section-link']} >Watch a video</a>
                </div>
                
            </div>
            <div className={styles['stats']}>
                <div className={styles.stat}>
                    <Text variant={'h2'}>27k +</Text>
                    <Text variant={'span'}>Art works</Text>
                </div>
                <div className={styles.stat}>
                    <Text variant={'h2'}>20k +</Text>
                    <Text variant={'span'}>Auctions</Text>
                </div>
                <div className={styles.stat}>
                    <Text variant={'h2'}>7k +</Text>
                    <Text variant={'span'}>Artists</Text>
                </div>

            </div>

            <div className={styles['users']}>
                <div className={styles['user-images']}>
                    <img src={xIcon} alt='random image' className={styles.user}/>
                    <img src={facebookIcon} alt='random image' className={styles.user}/>
                    <img src={insta} alt='random image' className={styles.user}/>
                    <img src={discord} alt='random image' className={styles.user}/>
                </div>
                <div className={styles['user.stat']}>
                    <Text variant={'h2'}>40k +</Text>
                    <Text variant={'span'}>Active Users</Text>
                </div>
            </div>
        </div>
        <div className={styles['section1-image']}>
            <HeroCardOverlay image={image1} imageAlt={'NFT Artwork'} endingIn={'1h 20m 30s'} highestBid={'32.4 ETH'} />
        </div>
    </div>
  )
}
