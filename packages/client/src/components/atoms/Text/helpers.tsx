import { TextIntrinsicElement, TextSize } from '@/theme/types'
import React from 'react'

function TextMap(text: string) {
  return {
    [TextSize.H1]: <h1 className="font-bold">{text}</h1>,
    [TextSize.H2]: <h2>{text}</h2>,
    [TextSize.H3]: <h3>{text}</h3>,
    [TextSize.H4]: <h4>{text}</h4>,
    [TextSize.H5]: <h5>{text}</h5>,
    [TextSize.BASE]: <p>{text}</p>,
    [TextSize.SMALL]: <p className="text-small">{text}</p>
  }
}

export const textMapper = (
  size: TextSize,
  children: React.ReactNode,
  className?: string
): React.FunctionComponentElement<TextIntrinsicElement> => {
  const TextElement = TextMap(children as string)[size]

  return React.cloneElement(TextElement, {
    className: className ? (size === TextSize.SMALL ? `text-small ${className}` : className) : undefined
  })
}
