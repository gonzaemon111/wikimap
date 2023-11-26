import { PortalPricingPanel } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/Portal/PricingPanel',
  component: PortalPricingPanel,
} satisfies Meta<typeof PortalPricingPanel>;

export default meta;

type Story = StoryObj<typeof PortalPricingPanel>;

export const Default: Story = {
  args: {},
};
