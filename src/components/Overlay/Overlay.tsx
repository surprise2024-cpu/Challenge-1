import React from 'react'

import styles from './Overlay.module.css'

type OverlayProps = {
    children: React.ReactNode
}

export const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return (
    <div>
        <div>
            {children}
        </div>
    </div>
  )
}
