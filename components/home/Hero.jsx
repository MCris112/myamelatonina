import React from "react";
import Image from 'next/legacy/image'
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

import { homevars, sitevars } from "../../constants";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10">
        <Image
          src={homevars.hero.bg}
          alt=""
          className="object-cover"
          layout='fill'
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>

      <div className="container flex min-h-[calc(100dvh-112px)] items-center py-20 md:py-28">
        <div className="grid w-full items-center gap-14 sm:grid-cols-[1.4fr_1fr] md:gap-20">
          <div className="text-center text-white sm:text-start">
            <span className="text-sm font-semibold text-accent md:text-base">Suplementos y vitaminas</span>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Venta de Melatonina
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:mx-0">
              Duerme mejor y disfruta tus sueños como ningun otro para tu día
              a día quitar esos malestares y despertar comodamente en tu hogar
              junto a un mejor amanecer.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-start">
              <Link href="/productos" className="btn-primary">
                Ver Productos <HiArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${sitevars.phone_url}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Asesoría por WhatsApp
              </a>
            </div>
          </div>

          <div className="mx-auto hidden w-full max-w-[300px] sm:block md:max-w-[340px]">
            <Image src={homevars.hero.img} alt={sitevars.site_name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
