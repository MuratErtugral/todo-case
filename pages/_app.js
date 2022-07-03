import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#85A1BA] to-[#194591]">
    <Provider>
      <Head>
        <title>To Do App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
  </Provider>
   </div>)
}

export default MyApp
