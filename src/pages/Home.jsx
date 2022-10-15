import React from "react";
import Hero from "./home/Hero";

import { Title, ProductItem, Button, Features, WhyUs, Footer } from "../components";
import { homeProducts, homeProduct, homevars } from "../constants";
import { vproducts } from "../assets/products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />

      <Title content="¿Qué es la melatonina?" />

      <div className="container">
        <div className="video">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/p2mhxdrTS54"
            title="Beneficios de la melatonina"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="">
          <img
            src={vproducts[homeProduct].image}
            alt="as"
            className="aspect-square w-[600px] h-[600px] object-contain max-w-full"
          />

          <Button
            label="Más informacion"
            type="primary"
            link={`/productos/${homeProduct}`}
          />
        </div>
      </div>

      <Title content="Nuestros Productos" />

      <div className="container">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {homeProducts.map((product) => {
            if (vproducts[product]) {
              return <ProductItem product={vproducts[product]} />;
            }
          })}
        </div>

        <Button label="Todos Nuestros Productos" type="outline" />
      </div>

      <Features />

      <WhyUs />

      {
      vproducts[homevars.footerproducts.id] ?
      <div className="relative py-6">
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <img
            src={homevars.footerproducts.bg}
            alt=""
            className="bg-primary w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 object"></div>
        </div>

        <div className="w-full">
          <div className="container py-6 flex flex-col gap-6">
            <div className="">
              <img
                src={vproducts[homevars.footerproducts.id].image ?? ''}
                alt="as"
                className="aspect-square w-[600px] h-[600px] object-contain max-w-full"
              />

              <Button
                label="Más informacion"
                type="primary"
                link={`/productos/${homevars.footerproducts.id}`}
              />
            </div>

            <div className="video">
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${homevars.footerproducts.videoid}`}
                title="Beneficios de la melatonina"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      : null
      }

      <Footer />
    </div>
  );
};

export default Home;
