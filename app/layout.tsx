import React from 'react';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Invoice-app',
  description: 'Invoice-app From zuka',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${leagueSpartan.className} dark:bg-[#141625]`}>{children}</body>
    </html>
  );
}
