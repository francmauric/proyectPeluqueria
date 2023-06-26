import '@/style/globals.css'
import type { AppProps } from 'next/app'
import "../style/galleryImage.css"


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
