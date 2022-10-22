import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { sitevars } from '../constants';

const Loading = ({show}) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    if(show) setLoading(true)
    
    return loading && (
    <div className="fixed top-0 left-0 w-full h-full bg-primary z-[999] flex items-center justify-center">
        <div className="max-w-[80vw] loading_screen">
            <Image src={sitevars.logo} className="object-contain"/>
        </div>
    </div>
    );
}

export default Loading