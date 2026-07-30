import React from 'react'

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