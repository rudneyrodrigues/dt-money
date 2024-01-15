import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { makeServer } from '@/services/mirage'
import { Toaster } from '@/components/ui/Toast/Toaster'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans antialiased">
      <Toaster />

      <Component {...pageProps} />
    </div>
  )
}
