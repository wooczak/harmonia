import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
};

type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    type: 'Primary',
    content: 'Primary Title.',
    underline: false
  },
}

export const Accent: Story = {
  args: {
    ...Primary.args,
    type: 'Accent',
    content: 'This is an acccented Title.',
  }
}

export default meta;