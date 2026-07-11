import React from 'react'

import styles from './Search.module.css'
import searchIcon from '../assets/search-icon.png'

export const Searchbar = () => {
  return (
    <div className={styles['search-bar']}>
        <img src={searchIcon} alt='search icon' className={styles['search-icon']}/>
        <input type='text' placeholder='Search' className={styles['search-input']}/>
    </div>
  )
}
