import { useState, useEffect } from 'react'
import Image from 'next/legacy/image'

import { sitevars } from '../constants';

const MIN_VISIBLE = 600
const FADE = 400

/**
 * Splash screen for the first page load only. It's rendered in the static HTML so it
 * covers the page until it hydrates, then fades out. Client-side navigation never shows it.
 */
const Loading = () => {
    const [state, setState] = useState('visible');

    useEffect(() => {
        const start = performance.now();
        let fadeTimer;

        const hide = () => {
            const wait = Math.max(0, MIN_VISIBLE - (performance.now() - start));
            fadeTimer = window.setTimeout(() => setState('fading'), wait);
        };

        if (document.readyState === 'complete') hide();
        else window.addEventListener('load', hide, { once: true });

        return () => {
            window.removeEventListener('load', hide);
            window.clearTimeout(fadeTimer);
        };
    }, []);

    useEffect(() => {
        if (state !== 'fading') return;
        const timer = window.setTimeout(() => setState('hidden'), FADE);
        return () => window.clearTimeout(timer);
    }, [state]);

    if (state === 'hidden') return null;

    return (
        <div
            aria-hidden="true"
            className={`fixed inset-0 z-[999] flex items-center justify-center bg-ink transition-opacity duration-[400ms] ${
                state === 'fading' ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
        >
            <div className="w-[260px] max-w-[70vw] loading_screen">
                <Image src={sitevars.logo} alt="" className="object-contain" priority />
            </div>
        </div>
    );
}

export default Loading
