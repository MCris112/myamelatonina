import Image from "next/legacy/image";
import Hero from "../components/home/Hero";

import { useState, useEffect } from 'react'

import {
  Navbar,
  Title,
  ProductItem,
  Button,
  Features,
  WhyUs,
  Footer,
  HeadComponent
} from "../components";
import { homeProducts, homeProduct, homevars } from "../constants";
import { vproducts } from "../public/assets/products";

export default function Home() {
  const [showProducts, setShowProducts] = useState(false)

  useEffect(() => {
    setShowProducts(true)
  }, [])

  return (
    <>
      <HeadComponent page="Inicio" description="Somos una empresa importadora de melatonina americana. Estamos comprometidos a mejorar la salud y esperanza de vida aprovechando los beneficios que ofrece la propia naturaleza." keywords="suplementos para dormir, melatonina, natrol, medicina, no puedo dormir, antibioticos, medicina a delivery, todo el peru" />

      <Navbar />

      <Hero />

      <section className="section">
        <div className="container">
          <Title content="¿Qué es la melatonina?" />

          <div className="grid items-stretch gap-8 md:grid-cols-[2fr_1fr] md:gap-10">
            <div className="overflow-hidden rounded-sm bg-ink shadow-[0_24px_60px_-30px_rgba(21,18,58,0.5)]">
              <iframe
                className="aspect-video h-full w-full"
                src="https://www.youtube.com/embed/p2mhxdrTS54"
                title="Beneficios de la melatonina"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="hidden flex-col rounded-sm bg-surface p-8 md:flex">
              <div className="relative flex-1">
                <Image
                  src={vproducts[homeProduct].image}
                  alt={vproducts[homeProduct].title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="mt-6 font-semibold text-ink">{vproducts[homeProduct].title}</p>
              <Button
                label="Más informacion"
                type="dark"
                link={`/productos/${homeProduct}`}
                className="mt-4 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-surface/60">
        <div className="container">
          <Title content="Nuestros Productos" />

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
            {showProducts ?
              homeProducts.map((product) => {
                if (vproducts[product]) {
                  return <ProductItem product={vproducts[product]} key={product} slug={product} />;
                }
              }) : null
            }
          </div>

          <div className="mt-12 flex justify-center md:mt-16">
            <Button label="Todos Nuestros Productos" type="line" link="/productos" />
          </div>
        </div>
      </section>

      <Features />

      <WhyUs />

      {vproducts[homevars.footerproducts.id] ? (
        <section className="relative isolate overflow-hidden bg-ink">
          <div className="absolute inset-0 -z-10">
            <Image
              src={homevars.footerproducts.bg}
              alt=""
              className="object-cover"
              layout="fill"
            />
            <div className="absolute inset-0 bg-ink/85" />
          </div>

          <div className="container section grid items-center gap-10 sm:grid-cols-[1fr_2fr] md:gap-16">
            <div className="mx-auto w-full max-w-[320px] text-center">
              <div className="rounded-sm bg-white/[0.06] p-6 ring-1 ring-white/10">
                <Image
                  src={vproducts[homevars.footerproducts.id].image ?? ""}
                  alt={vproducts[homevars.footerproducts.id].title}
                  className="aspect-square w-full object-contain object-center"
                />
              </div>
              <p className="mt-5 font-semibold text-white">{vproducts[homevars.footerproducts.id].title}</p>
              <Button
                label="Más informacion"
                type="primary"
                link={`/productos/${homevars.footerproducts.id}`}
                className="mt-4 w-full"
              />
            </div>

            <div className="overflow-hidden rounded-sm bg-black shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${homevars.footerproducts.videoid}`}
                title="Beneficios de la melatonina"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </>
  );
}
