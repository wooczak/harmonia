import React from 'react'
import Text from '@/components/atoms/Text/Text'
import { TextSize } from '@/theme/types'

export default async function Homepage() {
  return (
    <div>
      <Text size={TextSize.H1} className="leading-[5rem]">
        Hello, Harmonia!
      </Text>
    </div>
  )
}
