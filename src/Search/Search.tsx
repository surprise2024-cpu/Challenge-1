import React from 'react'

import styles from './Search.module.css'
import {Searchbar} from './Searchbar'
import { ContentContainer } from '../components/ContentContainer'

export const Search = () => {
  return (
    <div className={styles['search-container']}>
        <ContentContainer className={styles['searchbar-container']}>
            <Searchbar/>
        </ContentContainer>
    </div>
  )
}
