import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineMenuAlt3, HiX, HiOutlinePhone } from "react-icons/hi";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

import { navLinks, sitevars } from "../constants";

const socialIcons = {
  Facebook: FaFacebookF,
  Whatsapp: FaWhatsapp,
};

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (slug) =>
    slug === "/" ? router.pathname === "/" : router.pathname.startsWith(slug);

  return (
    <header className="sticky top-0 z-[99] text-white">
      <div className="hidden bg-ink sm:block">
        <div className="container flex h-10 items-center justify-between text-sm text-white/70">
          <a
            href={`https://wa.me/${sitevars.phone_url}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <HiOutlinePhone size={16} />
            {sitevars.phone}
          </a>
          <p>Envíos a todo el Perú · Pago contra entrega</p>
          <ul className="flex items-center gap-1">
            {sitevars.social.map((value, index) => {
              const Icon = socialIcons[value.text];
              return (
                <li key={index}>
                  <a
                    href={value.url}
                    aria-label={value.text}
                    className="flex h-7 w-7 items-center justify-center rounded-sm transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {Icon ? <Icon size={14} /> : value.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-b border-white/10 bg-ink-2/95 backdrop-blur">
        <div className="container flex h-[72px] items-center justify-between">
          <Link href="/" aria-label={`${sitevars.site_name} – Inicio`} onClick={() => setMenuOpen(false)}>
            <img src={sitevars.logo.src} alt={sitevars.site_name} className="h-11 w-auto" />
          </Link>

          <nav className="hidden sm:block" aria-label="Principal">
            <ul className="flex items-center gap-9">
              {navLinks.map((value) => (
                <li key={value.slug}>
                  <Link
                    href={value.slug}
                    className={`relative py-2 text-[15px] font-medium transition-colors hover:text-accent ${
                      isActive(value.slug) ? "text-accent" : "text-white/85"
                    }`}
                  >
                    {value.text}
                    {isActive(value.slug) ? (
                      <span className="absolute inset-x-0 -bottom-[3px] h-[2px] bg-accent" />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm hover:bg-white/10 sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>

        <nav
          className={`overflow-hidden transition-[max-height] duration-300 sm:hidden ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
          aria-label="Principal móvil"
        >
          <ul className="container flex flex-col pb-5">
            {navLinks.map((value) => (
              <li key={value.slug}>
                <Link
                  href={value.slug}
                  onClick={() => setMenuOpen(false)}
                  className={`block border-t border-white/10 py-4 text-lg font-medium ${
                    isActive(value.slug) ? "text-accent" : "text-white/85"
                  }`}
                >
                  {value.text}
                </Link>
              </li>
            ))}
            <li className="border-t border-white/10 pt-5">
              <a
                href={`https://wa.me/${sitevars.phone_url}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
              >
                <FaWhatsapp size={18} /> {sitevars.phone}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
