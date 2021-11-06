import { useRouter } from 'next/router'
import Header from '../components/containers/header'
import LeftSideBar from '../components/containers/leftsidebar';
import Footer from "../components/containers/footer"
import '../styles/globals.css'
import Footers from '../components/containers/footers';
import { SearchContextProvider } from './../contexts/SearchContext'
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return(<SearchContextProvider>
   { router.pathname == "/" || router.pathname == "/register" ?
    (
    <div>
      <Component {...pageProps} />
    </div>):(
    <div>
      <Header />
      {/* <LeftSideBar/> */}
      <Component {...pageProps} />
      <Footers />

    </div>

    ) } 
    </SearchContextProvider>);
}

export default MyApp
