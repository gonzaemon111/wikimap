import { UserProvider } from '@auth0/nextjs-auth0/client';
import { PortalNavbar } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/Portal/Navbar',
  component: PortalNavbar,
} satisfies Meta<typeof PortalNavbar>;

export default meta;

type Story = StoryObj<typeof PortalNavbar>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <UserProvider user={{ email: 'test@test.com', name: '名前', nickname: 'ニックネーム' }}>
        <PortalNavbar />
      </UserProvider>
    );
  },
};
