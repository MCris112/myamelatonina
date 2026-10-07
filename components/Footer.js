import Image from 'next/legacy/image'
import Link from 'next/link'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'

import { sitevars, navLinks } from "../constants";

const socialIcons = {
  Facebook: FaFacebookF,
  Whatsapp: FaWhatsapp,
};

const Footer = () => {
  return (
    <footer className="bg-ink text-white/60">
      <div className="container grid gap-12 py-16 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16 md:py-20">
        <div>
          <div className="w-[200px]">
            <Image src={sitevars.logo} alt={sitevars.site_name} />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Somos una empresa importadora de melatonina americana. Estamos
            comprometidos a mejorar la salud y esperanza de vida aprovechando
            los beneficios que ofrece la propia naturaleza.
          </p>
          <ul className="mt-6 flex gap-2">
            {sitevars.social.map((value, index) => {
              const Icon = socialIcons[value.text];
              return (
                <li key={index}>
                  <a
                    href={value.url}
                    aria-label={value.text}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    {Icon ? <Icon size={16} /> : value.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Menú del pie de página">
          <h4 className="text-sm font-semibold text-white">Menu</h4>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {navLinks.map((value) => (
              <li key={value.slug}>
                <Link href={value.slug} className="transition-colors hover:text-accent">
                  {value.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="text-sm font-semibold text-white">Más Información</h4>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            <li>
              <a href={`https://wa.me/${sitevars.phone_url}`} className="transition-colors hover:text-accent">{sitevars.phone}</a>
            </li>
            <li>
              <a href={`mailto:${sitevars.email}`} className="transition-colors hover:text-accent">{sitevars.email}</a>
            </li>
            <li>RUC: {sitevars.ruc.number}</li>
            <li>Rázon Social: {sitevars.ruc.name}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {sitevars.site_name}. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a href="https://www.darkredgm.com" target="_blank" rel="noopener" className="text-white/80 transition-colors hover:text-accent">
              Darkredgm
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
