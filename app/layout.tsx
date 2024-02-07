import type { Metadata } from 'next'
import { Inter, Kanit } from 'next/font/google'
import { Bakbak_One } from 'next/font/google';
import './globals.css'
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] })

const bakbak = Bakbak_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bakbak',
  weight: '400'
})
const kanit = Kanit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kanit',
  weight: '400'
})


export const metadata: Metadata = {
  title: 'Odd Realm | Unknown Origin Games',
  description: 'Colony simulation game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bakbak.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
