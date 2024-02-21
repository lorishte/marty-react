import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const noahFont = localFont({
  src: '../../public/fonts/Fontfabric - Noah Regular.otf',
  variable: '--font-noah'
})

export const metadata = {
  title: 'Marti NEXT',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noahFont.variable}>{children}</body>
    </html>
  )
}
