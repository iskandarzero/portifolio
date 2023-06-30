import { DM_Mono } from 'next/font/google'

import './globals.css'

import Navbar from '@/components/Navbar'

const dmMono = DM_Mono({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
