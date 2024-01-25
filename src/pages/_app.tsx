import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { globalStyles } from '@/styles/global'
import { BookWiseContextProvider } from '@/context/bookWiseContext'

globalStyles()

const nunito = Nunito({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${nunito.className}`}>
      <BookWiseContextProvider>
        <Component {...pageProps} />
      </BookWiseContextProvider>
    </div>
  )
}
