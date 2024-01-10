import { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm
}

type Story = StoryObj<typeof LoginForm>

export const LoginFormComponent: Story = {
  args: {}
}

export default meta
