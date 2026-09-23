import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Text } from '../Text/Text'
import { ContentContainer } from '../ContentContainer'
import { Search } from '../Search/Search'

export const Navbar: React.FC = () => {

  // Keeps track of whether the mobile menu is open or closed.
  const [isOpen, setIsOpen] = useState(false)

  // Closes the mobile menu after a link iss selected.
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav>
      
      <ContentContainer className={styles['content']}>
        
          <Text variant='h2' style={{ margin: 0 }} className={styles['logo']}>
            PLAY
            <span className={styles['logo-badge']}>
              NFT
            </span>

          </Text>

          {/* Navigation links. On mobile, this becomes the slide-out menu */}
          <div className={`${styles['links']} ${isOpen ? styles['links-open'] : ''}`}>
              <a 
                href='#/' 
                className={`${styles.link} ${styles.active}`}
                onClick={closeMenu}
              >
                Home
              </a>
              <a 
                href='#/' 
                className={styles.link}
                onClick={closeMenu}
              >
                Explore
              </a>
              <a 
                href='#/' 
                className={styles.link}
                onClick={closeMenu}
              >
                Marketplace
              </a>
              <a 
                href='#/' 
                className={styles.link}
                onClick={closeMenu}
              >
                Artists
              </a>
              <a 
                href='#/' 
                className={styles.link}
                onClick={closeMenu}
              >
                News
              </a>

            {/* Search and Register button shown inside the mobile menu */}
            <div className={styles['mobile-actions']}>
              <Search />
              <button className={styles['register-btn']}>Register</button>
            </div>

          </div>

          <div className={styles.actions}>
            <Search />
            <button className={styles['register-btn']}>Register</button>
          </div>

        {/* Opens and closes the mobile navigation menu. */}
        <button className={`${styles.hamburger} ${isOpen ? styles['hamburger-open'] : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
          aria-expanded={isOpen}>
          <span />
          <span />
          <span />
        </button> 
        
        {/* Dark background behind mobil menu.
          Clicking it closes the menu.
        */}
        {
          isOpen && (
            <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
          )
        }

      </ContentContainer>
    </nav>
  )
}