import React from 'react'

// Props used by the reausable Text component.
export type TextProps = {
    variant?: string
    children: React.ReactNode
    style?: React.CSSProperties
    className?: string
}

// Renders the correct HTML text element based on the cariant passed in.
export const Text: React.FC<TextProps> = ({ variant, children, style, className }) => {

  if (variant === 'h1') return <h1 className={className} style={style}>{children}</h1>
  if (variant === 'h2') return <h2 className={className} style={style }>{children}</h2>
  if (variant === 'p') return <p className={className} style={style}>{children}</p>
  if (variant === 'span') return <span className={className} style={style}>{children}</span>

  // Falls back to a div when no matching variant is provided.
  return ( 
    <div className={className} style={style}>

      { children }

    </div>
  )
}
 