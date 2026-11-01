import React from 'react'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean
  unoptimized?: boolean
  priority?: boolean
}

export default function Image({ fill, style, className, alt = '', ...props }: ImageProps) {
  const computedStyle: React.CSSProperties = fill
    ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: style?.objectFit || 'cover',
        ...style,
      }
    : (style || {})

  return <img className={className} style={computedStyle} alt={alt} {...props} />
}
