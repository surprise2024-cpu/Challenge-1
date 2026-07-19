import React from 'react'

import styles from './Band.module.css'
import { Bandbar } from './Bandbar'

import binance from '../../assets/icons8-binance-64.png'
import blockchain from '../../assets/icons8-blockchain-logo-50.png'
import bitfinex from '../../assets/icons8-leaf-50.png'
import exodus from '../../assets/icons8-x-vpn-50.png'

const partners = [
    {id: 1, name: 'Paypal'},
    {id: 2, name: 'coinbase'},
    {id: 3, name: 'BINANCE', img: binance},
    {id: 4, name: 'Revolut'},
    {id: 5, name: 'EXODUS', img: exodus},
    {id: 6, name: 'BITFINEX', img2: bitfinex},
    {id: 7, name: 'BlockChain', img: blockchain}
]

export const Band = () => {
  return (
    <div className={styles['band-container']}>
        <div className={styles['band-track']}>

            {
                [0, 1, 2, 3].map((setIndex) => (
                    partners.map((partner) => (

                        <Bandbar key={`${setIndex}-${partner.id}`}  name={partner.name} img={partner.img} img2={partner.img2}/>

                    ))
                    
                ))
            }

        </div>
        
    </div>
  )
}
