import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { EventProvider } from '@/components/EventContext'
import { EventsPageProvider } from '@/components/EventContext'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
   <>
  <Head>
        <title>FOSSCell NITC</title>
      </Head>
   <Navbar />
   <EventProvider>
    <EventsPageProvider>
      <Component {...pageProps} />
    </EventsPageProvider>
    <Footer />
   </EventProvider>
   </>
  )
}
