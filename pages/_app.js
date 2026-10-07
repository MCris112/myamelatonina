import '../styles/globals.css'
import Loading from '../components/Loading'
import PortfolioNotice from '../components/PortfolioNotice'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

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
