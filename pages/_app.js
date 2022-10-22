import '../styles/globals.css'
import Loading from '../components/Loading'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Loading />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
