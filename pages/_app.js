import '../styles/globals.css'
import Loading from '../components/Loading'
import PortfolioNotice from '../components/PortfolioNotice'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Loading />
    <Component {...pageProps} />
    <PortfolioNotice />
    </>
  )
}

export default MyApp
