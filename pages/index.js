import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>Aviacion Genesis</title>
        <meta name="description" content="Aviacion Genesis Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='w-full bg-gray-200 relative'>
          <Header />
          <Hero />


        </div>

      </main>
      {/* Main Hero section */}
      {/* All sections here */}
    </>
  )
}
