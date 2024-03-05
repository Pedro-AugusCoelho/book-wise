import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { globalStyles } from '@/styles/global'
import { BookWiseContextProvider } from '@/context/bookWiseContext'
import { SessionProvider } from 'next-auth/react'

globalStyles()

const nunito = Nunito({ subsets: ['latin'] })

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={`${nunito.className}`}>
      <SessionProvider session={session}>
        <BookWiseContextProvider>
          <Component {...pageProps} />
        </BookWiseContextProvider>
      </SessionProvider>
    </div>
  )
}
