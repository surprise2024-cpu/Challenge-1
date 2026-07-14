import React from 'react'
import styles from './Navbar.module.css'
import { Text } from '../Text/Text'
import { ContentContainer } from '../ContentContainer'
import { Search } from '../Search/Search'

export const Navbar: React.FC<any> = (props) => {
  return (
    <nav>
      
      <ContentContainer className={styles['content']}>
        
          <Text variant='h2' style={{ margin: 0 }} className={styles['logo']}>
            PLAY
            <span className={styles['logo-badge']}>
              NFT
            </span>

          </Text>

          <div className={styles['links']}>
              <a href='#/' className={styles.link}>Home</a>
              <a href='#/' className={styles.link}>Explore</a>
              <a href='#/' className={styles.link}>Marketplace</a>
              <a href='#/' className={styles.link}>Artists</a>
              <a href='#/' className={styles.link}>News</a>
          </div>
          <div className={styles.actions}>
            <Search />
            <button className={styles['register-btn']}>Register</button>
          </div>
      </ContentContainer>
    </nav>
  )
}
