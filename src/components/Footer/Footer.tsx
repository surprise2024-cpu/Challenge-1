import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './Footer.module.css'
import { Text } from '../Text/Text'

import xIcon from '../../assets/icons8-x-twitter-50.png'
import facebookIcon from '../../assets/icons8-facebook-50.png'
import instaIcon from '../../assets/icons8-instagram-50.png'
import discordIcon from '../../assets/icons8-discord-50.png'

// Groups the footer links into seperate columns
const linkColumns = [
    {id: 1, heading: 'Explore', links: ['Art', 'Photography', 'Music', 'Games']}, 
    {id: 2, heading: 'My Account', links: ['My Profile', 'My Collections', 'My Favorites', 'My Account Settings']}, 
    {id: 3, heading: 'Resources', links: ['Help Center', 'Partners', 'Suggestions', 'Newsletters']}, 
    {id: 4, heading: 'Company', links: ['About', 'Careers', 'Ranking', 'Activity']}
]

export const Footer: React.FC = () => {
  return (
    <footer>
        <ContentContainer className={styles['footer-cont']}>
            <div className={styles['footer-div1']}>

                <Text variant='h2' style={{ margin: 0 }} className={styles['logo']}>PLAY <span className={styles['logo-badge']}>NFT</span></Text>
                
                <Text variant={'p'} className={styles['description']}>

                    The world's largest digital marketplace for crypto collections
                    and non-fungible tokens (NFTs). Buy, sell and discover
                    exclusive digital assets. 

                </Text>
                
                {/* Social media icons shown under the footer description.*/} 
                <div className={styles.socials}>

                    <img src={xIcon} alt='X' className={styles['social-link']} />
                    <img src={instaIcon} alt='Instagram' className={styles['social-link']} />
                    <img src={facebookIcon} alt='Facebook' className={styles['social-link']} />
                    <img src={discordIcon} alt='Discord' className={styles['social-link']} />

                </div>

            </div>
            
            {/* Builds each footer link column from the linkColumns array.*/} 
            <div className={styles['footer-div2']}>
                {
                    linkColumns.map((col) => (
                        <div className={styles.column} key={col.id}>

                            <Text variant={'h2'} className={styles['column-heading']}>{col.heading}</Text>

                            {col.links.map((link) => (
                                <a 
                                    href='#/' 
                                    className={styles.link} 
                                    key={link}
                                >
                                    {link}
                                </a>

                            ))}
                        </div>
                    ))
                }
                    
            </div>
        </ContentContainer>
    </footer>
  )
}