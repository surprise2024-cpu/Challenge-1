import React from 'react'

import styles from './Band.module.css'
import { Bandbar } from './Bandbar'

const partners = [
    {id: 1, name: 'Paypal'},
    {id: 2, name: 'coinbase'},
    {id: 3, name: 'BINANCE'},
    {id: 4, name: 'Revolut'},
    {id: 5, name: 'EXODUS'},
    {id: 6, name: 'BITFINEX'},
    {id: 7, name: 'BlockChain'}
]

export const Band = () => {
  return (
    <div className={styles['band-container']}>
        <div className={styles['band-track']}>

            {
                partners.map((partner) => (
                    <Bandbar key={partner.id}  name={partner.name} />
                ))
            }

            {
                partners.map((partner) => (
                    <Bandbar key={partner.id}  name={partner.name} />
                ))
            }

        </div>
        
    </div>
  )
}
