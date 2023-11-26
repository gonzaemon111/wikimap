import { PortalFooter } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/Portal/Footer',
  component: PortalFooter,
} satisfies Meta<typeof PortalFooter>;

export default meta;

type Story = StoryObj<typeof PortalFooter>;

export const Default: Story = {
  args: {},
};
