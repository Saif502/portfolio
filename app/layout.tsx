import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhi - Portfolio',
  description: 'Full Stack Developer - Creating beautiful, functional, and user-centered digital experiences.',
  keywords: 'portfolio, developer, full stack, web development, react, nextjs',
  authors: [{ name: 'Abhi' }],
  openGraph: {
    title: 'Abhi - Portfolio',
    description: 'Full Stack Developer - Creating beautiful, functional, and user-centered digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
