import { PortalHero } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/Portal/Hero',
  component: PortalHero,
} satisfies Meta<typeof PortalHero>;

export default meta;

type Story = StoryObj<typeof PortalHero>;

export const Default: Story = {
  args: {},
};
