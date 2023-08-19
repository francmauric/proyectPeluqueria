import '@/style/globals.css'
import type { AppProps } from 'next/app'
import "../style/galleryImage.css"
/* import Modal from 'react-modal';

Modal.setAppElement('#NavBar'); */

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
