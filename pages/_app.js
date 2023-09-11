import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { EventProvider } from '@/components/EventContext'
import { EventsPageProvider } from '@/components/EventContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
   <>
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
