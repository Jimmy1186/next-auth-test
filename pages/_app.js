import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
        <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

