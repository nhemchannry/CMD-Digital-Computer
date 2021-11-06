import { useRouter } from 'next/router'
import Header from '../components/containers/header'
import LeftSideBar from '../components/containers/leftsidebar';
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return router.pathname=="/"||router.pathname=="/register"?
  (
  <div>
    <Component {...pageProps}/>
  </div>):(
            <div>
            <Header/>
            {/* <LeftSideBar/> */}
                  <Component {...pageProps} />
            </div>
         );
}

export default MyApp
