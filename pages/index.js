import Head from 'next/head'
import Image from 'next/image'
import Contrataciones from '../components/Contrataciones'
import Cursos from '../components/Cursos'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Testimonios from '../components/Testimonios'


export default function Home() {
  return (
    <>
      <Head>
        <title>Aviacion Genesis</title>
        <meta name="description" content="Aviacion Genesis Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=''>
          <Header />
          <Hero />
          <Cursos />
          <Testimonios />
          <Contrataciones />
          <div className='w-full h-screen bg-red-50'></div>


        </div>

      </main>
      {/* Main Hero section */}
      {/* All sections here */}
    </>
  )
}
