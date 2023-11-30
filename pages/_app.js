import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return <>
    <header>
      <Navbar />
    </header>
    <Component {...pageProps} />
    <footer>
      <Footer />
    </footer>
  </>
}
