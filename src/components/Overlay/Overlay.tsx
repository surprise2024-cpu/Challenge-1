import React from 'react'

// Content placed inside the overlay
type OverlayProps = {
    children: React.ReactNode
}

// Simple wrapper used to place content inside an overlay structure.
export const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return (
    <div>
        <div>
            {children}
        </div>
    </div>
  )
}