import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { GalleryContextProvider } from "../store/gallery-context";

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

    <body className={noahFont.variable}>
    <GalleryContextProvider>
      {children}
    </GalleryContextProvider>

    <div id="backdrop-root"/>
    <div id="overlay-root"/>

    </body>

    </html>
  )
}
