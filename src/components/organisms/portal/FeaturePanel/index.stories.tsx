import { PortalFeaturePanel } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/Portal/FeaturePanel',
  component: PortalFeaturePanel,
} satisfies Meta<typeof PortalFeaturePanel>;

export default meta;

type Story = StoryObj<typeof PortalFeaturePanel>;

export const Default: Story = {
  args: {},
};
