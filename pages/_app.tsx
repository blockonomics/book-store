import '../styles/globals.css'
import Footer from '../components/Footer'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Book Store</title>
      </Head>
      <main className={`${montserrat.variable} font-sans`}>
        <Script src="https://blockonomics.co/js/pay_widget.js" />
        <Component {...pageProps} />
      </main>
    </>
  )
}
