import React from 'react'
import style from './Navbar.module.css'
import { Text } from '../Text/Text'

export const Navbar: React.FC<any> = (props) => {
  return (
    <nav>
        <div className={style['content']}>

            <Text variant='h2' style={{ margin: 0 }}>Play <span className={style['logo-badge']}>NFT</span></Text>

            <div className={style['links']}>
                <a href='#/' className={style.link}>Home</a>
                <a href='#/' className={style.link}>Explore</a>
                <a href='#/' className={style.link}>Marketplace</a>
                <a href='#/' className={style.link}>Artists</a>
                <a href='#/' className={style.link}>News</a>
            </div>
            <div>

            </div>
        </div>
    </nav>
    
  )
}
