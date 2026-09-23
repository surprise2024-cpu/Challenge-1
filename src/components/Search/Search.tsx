import React from 'react'

import styles from './Search.module.css'
import {Searchbar} from './Searchbar'
import { ContentContainer } from '../ContentContainer'

// Wraps the searchbar so it can share the same page layout as the navbar.
export const Search: React.FC = () => {
  return (
    <div className={styles['search-container']}>
        <ContentContainer className={styles['searchbar-container']}>
            <Searchbar/>
        </ContentContainer>
    </div>
  )
}