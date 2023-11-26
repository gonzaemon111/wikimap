import { UserProvider } from '@auth0/nextjs-auth0/client';
import { TopPage } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/TopPage',
  component: TopPage,
} satisfies Meta<typeof TopPage>;

export default meta;

type Story = StoryObj<typeof TopPage>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <UserProvider user={{ email: 'test@test.com', name: '名前', nickname: 'ニックネーム' }}>
        <TopPage />
      </UserProvider>
    );
  },
};
