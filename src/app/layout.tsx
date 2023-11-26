import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wikimap',
  description: 'Generated by Wikimap',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' data-theme='corporate'>
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
