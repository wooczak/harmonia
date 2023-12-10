import { Meta, StoryObj } from '@storybook/react'
import Text from './Text'
import { TextSize } from '@/theme/types'

const meta: Meta<typeof Text> = {
  component: Text
}

type Story = StoryObj<typeof Text>

export const TextAtom: Story = {
  args: {
    size: TextSize.BASE,
    children: 'Text Atom',
    className: 'additional-tailwind-class'
  }
}
export default meta
