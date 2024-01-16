import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import { makeServer } from '@/services/mirage'
import { Toaster } from '@/components/ui/Toast/Toaster'

// if (process.env.VERCEL_ENV === 'development') {
//   makeServer()
// }
makeServer()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans antialiased">
      <Toaster />

      <Component {...pageProps} />

      <Analytics />
    </div>
  )
}
