import { useRouter } from 'next/router'
import AppBars from '../components/containers/appbars';
import Footer from '../components/containers/footer'
import Header from '../components/containers/header'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return router.pathname=="/login"?
  (
  <div>
    <Component {...pageProps}/>
  </div>):(
            <div>
            <Header/>
                  <Component {...pageProps} />
            <Footer/> 
            </div>
         );
}

export default MyApp
