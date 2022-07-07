import Head from 'next/head'
import Image from 'next/image'
import Contacto from '../components/Contacto'
import Contrataciones from '../components/Contrataciones'
import Cursos from '../components/Cursos'
import Flota from '../components/Flota'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ScrollButton from '../components/ScrollButton'
import Testimonios from '../components/Testimonios'


export default function Home() {
  return (
    <>
      <Head>
        <title>Aviacion Genesis</title>
        <meta name="description" content="Aviacion Genesis Website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <div className=''>
          <Header />
          <Hero />
          <Cursos />
          <Testimonios />
          <Contrataciones />
          <Flota />
          <Contacto />
          <Footer />
          <ScrollButton />




        </div>

      </main>
      {/* Main Hero section */}
      {/* All sections here */}
    </>
  )
}
