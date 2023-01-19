"use client"

import './globals.css';
import Providers from './providers';
import Home from "./home"
import { SessionProvider } from 'next-auth/react';
import Page from './page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <SessionProvider>
          <Page></Page>
        </SessionProvider>
      </body>
    </html>
  )
}
