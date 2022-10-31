import Image from "next/image";
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

      <div className="md:py-[3rem]"></div>

      <Title content="¿Qué es la melatonina?" />

      <div className="container md:flex gap-[3rem] sm:mb-6">
        <div className="video w-full md:w-2/3">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/p2mhxdrTS54"
            title="Beneficios de la melatonina"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="hidden w-full md:block md:w-1/3">
          <Image
            src={vproducts[homeProduct].image}
            alt="as"
            className="aspect-square w-[600px] sm:w-[400px] object-contain max-w-full mb-1 mx-auto"
          />

          <Button
            label="Más informacion"
            type="primary"
            link={`/productos/${homeProduct}`}
          />
        </div>
      </div>

      <div className="md:py-[3rem]"></div>

      <Title content="Nuestros Productos" />

      <div className="container py-6">
        <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-3 md:gap-[2rem]">
          {showProducts ?
            homeProducts.map((product) => {
              if (vproducts[product]) {
                return <ProductItem product={vproducts[product]} key={product} slug={product} />;
              }
            }) : null
          }
        </div>

        <div className="w-full md:w-1/2 md:mx-auto md:py-9">
          <Button label="Todos Nuestros Productos" type="outline" />
        </div>
      </div>

      <div className="md:py-[3rem]"></div>

      <Features />

      <div className="md:py-[3rem]"></div>

      <WhyUs />

      <div className="md:py-[3rem]"></div>

      {vproducts[homevars.footerproducts.id] ? (
        <div className="relative py-6">
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <Image
              src={homevars.footerproducts.bg}
              alt=""
              className="bg-primary w-full h-full object-cover"
              layout="fill"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 object"></div>
          </div>

          <div className="w-full">
            <div className="container py-6 flex flex-col gap-6 sm:flex-row items-center justify-center">
              <div className="w-full sm:w-1/2 md:w-1/3">
                <Image
                  src={vproducts[homevars.footerproducts.id].image ?? ""}
                  alt="as"
                  className="aspect-square w-full object-contain object-center mb-3"
                />

                <Button
                  label="Más informacion"
                  type="primary"
                  link={`/productos/${homevars.footerproducts.id}`}
                />
              </div>

              <div className="w-100 sm:w-1/2 md:w-2/3">
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${homevars.footerproducts.videoid}`}
                  title="Beneficios de la melatonina"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  );
}
