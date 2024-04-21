import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

import { GalleryContextProvider } from "@/store/gallery-context";
import { CompareImagesContextProvider } from "@/store/compare-images-context";

const inter = Inter({ subsets: ['latin'] })

const noahFont = localFont({
  src: '../../public/fonts/Fontfabric - Noah Regular.otf',
  variable: '--font-noah'
})
export const metadata = {
  title: 'Marti NEXT',
  description: '',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <body className={noahFont.variable}>
    <GalleryContextProvider>
      <CompareImagesContextProvider>
        {children}
      </CompareImagesContextProvider>
    </GalleryContextProvider>

    <div id="backdrop-root" className='transition-all duration-700 ease-out' style={{opacity: 0}}/>
    <div id="overlay-root" className='transition-all duration-700 ease-out' style={{opacity: 0}}/>

    </body>

    </html>
  )
}
