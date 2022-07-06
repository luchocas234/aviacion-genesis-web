import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Aviacion Genesis</title>
        <meta name="description" content="Aviacion Genesis Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='w-full h-[100vh] bg-gray-200'>
          <Header />
        </div>

      </main>
      {/* Main Hero section */}
      {/* All sections here */}
    </>
  )
}
