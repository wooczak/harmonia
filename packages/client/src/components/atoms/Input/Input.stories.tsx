import { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input
}

type Story = StoryObj<typeof Input>

export const InputAtom: Story = {
  args: {
    type: 'password',
    required: true
  }
}
export default meta
