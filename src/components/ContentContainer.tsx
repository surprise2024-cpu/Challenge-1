import React from 'react'

// Props used by th shared page container.
type Props = {
    children: React.ReactNode
    className?: string
}

// Rausable wrapper that keeps page sections aligned consistently.
export const ContentContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div 
    
      className={`content-container ${className} ?? '' `}
    >
      {children}

    </div>
  )
}