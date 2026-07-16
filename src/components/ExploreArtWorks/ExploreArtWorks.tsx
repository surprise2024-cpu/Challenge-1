import React from 'react'

import { ContentContainer } from '../ContentContainer'
import styles from './ExploreArtWorks.module.css'

import abstract1 from '../../assets/abstract-1.jpg'
import abstract2 from '../../assets/abstract-2.jpg'
import abstract3 from '../../assets/abstract-3.jpg'
import abstract4 from '../../assets/abstract-4.jpg'

import art1 from '../../assets/3D-1.jpg'
import art2 from '../../assets/3D-2.jpg'
import art3 from '../../assets/3D-3.jpg'
import art4 from '../../assets/3D-4.jpg'

import modern1 from '../../assets/modern-4.jpg'
import modern2 from '../../assets/modern-2.jpg'
import modern3 from '../../assets/modern-3.jpg'
import modern4 from '../../assets/modern-1.jpg'

import game1 from '../../assets/game-4.jpg'
import game2 from '../../assets/game-2.jpg'
import game3 from '../../assets/game-3.jpg'
import game4 from '../../assets/game-1.jpg'

import graf1 from '../../assets/graffiti-1.jpg'
import graf2 from '../../assets/graffiti-2.jpg'
import graf3 from '../../assets/graffiti-3.jpg'
import graf4 from '../../assets/graffiti-4.jpg'

import water1 from '../../assets/watercolor-4.jpg'
import water2 from '../../assets/watercolor-2.jpg'
import water3 from '../../assets/watercolor-3.jpg'
import water4 from '../../assets/watercolor-1.jpg'

import { Text } from '../Text/Text'
import { ExploreArtWorksCard } from './ExploreArtWorksCard'


export const ExploreArtWorks = () => {
  return (

    <ContentContainer className={styles.content}>
        <div className={styles['head-cont']}>
            <Text variant='h2'>Explore Artworks</Text> 
        </div>

        <div className={styles['card-cont']}>


            <ExploreArtWorksCard  img1={abstract1} img2={abstract2} img3={abstract3} img4={abstract4} name={'Abstract'} items={'30 items'} />
            <ExploreArtWorksCard  img1={art1} img2={art2} img3={art3} img4={art4} name={'3D Art'} items={'45 items'} />
            <ExploreArtWorksCard  img1={modern1} img2={modern2} img3={modern3} img4={modern4} name={'Modern Art'} items={'59 items'} />
            <ExploreArtWorksCard  img1={game1} img2={game2} img3={game3} img4={game4} name={'Game'} items={'25 items'} />
            <ExploreArtWorksCard  img1={graf1} img2={graf2} img3={graf3} img4={graf4} name={'Graffiti'} items={'36 items'} />
            <ExploreArtWorksCard  img1={water1} img2={water2} img3={water3} img4={water4} name={'Watercolor'} items={'40 items'} />
            
            
        </div>

    </ContentContainer>
  )
}
