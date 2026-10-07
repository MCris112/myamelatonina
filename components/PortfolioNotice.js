import { useEffect, useState } from 'react'

/**
 * Darkredgm portfolio notice.
 *
 * Self-contained so it can be copied as-is into any React + Tailwind template:
 * colors are hardcoded to the darkredgm.com palette instead of the site's theme tokens.
 * Shows up after `delay` ms so the first impression of the design isn't interrupted,
 * and stays hidden for the rest of the session once dismissed.
 *
 * Usage: <PortfolioNotice /> once in the root layout.
 */

const STORAGE_KEY = 'darkredgm-notice-dismissed'
const PORTFOLIO_URL = 'https://www.darkredgm.com'
const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Geist:wght@400;600;800&family=Geist+Mono:wght@400;500&display=swap'

const sans = { fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif" }
const mono = { fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, monospace" }

function wasDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function loadFonts() {
  if (document.querySelector(`link[href="${FONTS_URL}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = FONTS_URL
  document.head.appendChild(link)
}

export default function PortfolioNotice({ delay = 5000 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (wasDismissed()) return
    const timer = window.setTimeout(() => {
      loadFonts()
      setVisible(true)
    }, delay)
    return () => window.clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!visible) return
    const onKey = (e) => e.key === 'Escape' && dismiss()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [visible])

  function dismiss() {
    setVisible(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Storage blocked (private mode): the notice just shows again next visit
    }
  }

  if (!visible) return null

  return (
    <aside
      role="dialog"
      aria-labelledby="darkredgm-notice-title"
      className="fixed inset-x-4 bottom-4 z-[100] animate-[darkredgm-notice-in_0.5s_cubic-bezier(0.16,1,0.3,1)_both] border border-[#2A2A2A] bg-[#0D0D0D] text-[#F5F5F5] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] sm:right-auto sm:left-5 sm:bottom-5 sm:w-[380px]"
      style={sans}
    >
      <style>{`@keyframes darkredgm-notice-in{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}`}</style>

      {/* Red accent line, like the section markers on darkredgm.com */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#E8000D] via-[#9B0009] to-transparent" />

      <button
        type="button"
        onClick={dismiss}
        aria-label="Cerrar aviso"
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center text-[#888] transition-colors hover:text-[#E8000D]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div className="p-5 pr-12 sm:p-6 sm:pr-12">
        <div
          className="mb-3 flex items-center gap-2 text-[10px] tracking-[3px] text-[#E8000D] uppercase"
          style={mono}
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse bg-[#E8000D]" />
          Proyecto de portafolio
        </div>

        <h2
          id="darkredgm-notice-title"
          className="text-[22px] leading-[1.05] font-extrabold tracking-[1px] uppercase sm:text-[26px]"
        >
          Demo de <span className="text-[#E8000D]">diseño</span>
        </h2>

        <p className="mt-3 text-[13px] leading-relaxed text-[#888] sm:text-sm">
          Este sitio es una muestra de diseño y desarrollo realizada por Darkredgm. La marca, los
          textos y los datos de contacto son ficticios.
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#2A2A2A] pt-4">
          <a href={PORTFOLIO_URL} target="_blank" rel="noopener" className="flex items-center gap-2" aria-label="Darkredgm">
            <DarkredgmMark />
            <span className="text-sm font-semibold tracking-[1px]">Darkredgm</span>
          </a>
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener"
            className="group border border-[#E8000D] px-4 py-2 text-[11px] tracking-[2px] text-[#E8000D] uppercase transition-colors duration-300 hover:bg-[#E8000D] hover:text-white"
            style={mono}
          >
            Ver portafolio{' '}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

/** Icon part of the darkredgm.com logo */
function DarkredgmMark() {
  return (
    <svg viewBox="0 0 252 261" className="h-6 w-auto" aria-hidden="true">
      <path
        d="M187.973 67.1674L250.984 127.662L128.03 254.985L75.8443 204.589L145.224 165.917L146.905 164.981L144.981 164.981L137.757 164.981L145.241 160.407L146.605 159.574L145.01 159.482L120.307 158.056L182.794 107.871L183.902 106.981L182.481 106.981L176.616 106.981L181.35 101.819L182.117 100.98L180.981 100.981L151.261 100.98L187.973 67.1674ZM123.662 4.707L162.761 42.4648L83.6494 112.606L82.6632 113.481L83.9809 113.481L89.0972 113.481L83.7326 116.546L82.2118 117.416L83.9624 117.481L109.825 118.438L60.1254 168.629L59.2818 169.48L60.4808 169.48L68.7733 169.481L64.6272 173.627L63.774 174.481L64.9813 174.481L79.301 174.481L62.5737 191.774L0.706999 132.03L123.662 4.707Z"
        fill="#E8000D"
      />
    </svg>
  )
}
