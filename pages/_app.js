import { AuthProvider } from '../components/AuthContext'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </AuthProvider>

  )
}

export default MyApp
