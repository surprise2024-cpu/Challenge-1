import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Text } from '../Text/Text'
import { ContentContainer } from '../ContentContainer'
import { Search } from '../Search/Search'

export const Navbar: React.FC<any> = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      
      <ContentContainer className={styles['content']}>
        
          <Text variant='h2' style={{ margin: 0 }} className={styles['logo']}>
            PLAY
            <span className={styles['logo-badge']}>
              NFT
            </span>

          </Text>

          <div className={`${styles['links']} ${isOpen ? styles['links-open'] : ''}`}>
              <a href='#/' className={`${styles.link} ${styles.active}`}>Home</a>
              <a href='#/' className={styles.link}>Explore</a>
              <a href='#/' className={styles.link}>Marketplace</a>
              <a href='#/' className={styles.link}>Artists</a>
              <a href='#/' className={styles.link}>News</a>

            <div className={styles['mobile-actions']}>
              <Search />
              <button className={styles['register-btn']}>Register</button>
            </div>

          </div>

          <div className={styles.actions}>
            <Search />
            <button className={styles['register-btn']}>Register</button>
          </div>

        <button className={`${styles.hamburger} ${isOpen ? styles['hamburger-open'] : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
        aria-expanded={isOpen}>
        <span />
        <span />
        <span />
        </button> 
        
        {
          isOpen && (
            <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
          )
        }

      </ContentContainer>
    </nav>
  )
}
