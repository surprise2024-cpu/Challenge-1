import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './Footer.module.css'
import { Text } from '../Text/Text'

import xIcon from '../../assets/X.png'
import facebookIcon from '../../assets/facebook.png'
import instaIcon from '../../assets/insta.png'
import discordIcon from '../../assets/discord.png'



const linkColumns = [
    {id: 1, heading: 'Explore', links: ['Art', 'Photography', 'Music', 'Games']}, 
    {id: 2, heading: 'My Account', links: ['My Profile', 'My Collections', 'My Favorites', 'My Account Settings']}, 
    {id: 3, heading: 'Resources', links: ['Help Center', 'Partners', 'Suggestions', 'Newsletters']}, 
    {id: 4, heading: 'Company', links: ['About', 'Careers', 'Ranking', 'Activity']}
]

export const Footer = () => {
  return (
    <footer>
        <ContentContainer className={styles['footer-cont']}>
            <div className={styles['footer-div1']}>
                <Text variant='h2' style={{ margin: 0 }} className={styles['logo']}>PLAY <span className={styles['logo-badge']}>NFT</span></Text>
                <Text variant={'p'} className={styles['description']}>
                    The worlds larest digital marketplace for crypto collections
                    and non fungible tokens (NFTs) but, sell and discover
                    exclusive digital assets 
                </Text>

                <div className={styles.socials}>

                    <img src={xIcon} className={styles['social-link']} />
                    <img src={instaIcon} className={styles['social-link']} />
                    <img src={facebookIcon} className={styles['social-link']} />
                    <img src={discordIcon} className={styles['social-link']} />

                </div>

            </div>
            
            <div className={styles['footer-div2']}>
                {
                    linkColumns.map((col) => (
                        <div className={styles.column} key={col.id}>

                            <Text variant={'h2'} className={styles['column-heading']}>{col.heading}</Text>

                            {col.links.map((link) => (
                                <a href='#/' className={styles.link} key={col.id}>{link}</a>

                            ))}
                        </div>
                    ))
                }
                    
            </div>
        </ContentContainer>
    </footer>
  )
}
