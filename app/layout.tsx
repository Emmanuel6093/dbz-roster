import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from './components/loading-screen'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dragon Ball Z Fan Site',
  description: 'A fan website dedicated to Dragon Ball Z',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}

