import React from "react";
import Hero from "./home/Hero";

import { Title, ProductItem, Button, Features } from "../components";
import { homeProducts, homeProduct } from "../constants";
import { vproducts } from "../assets/products";

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

        <Button label="Todos Nuestros Productos" type="outline"/>
      </div>

      <Features />

      <Title content="¿Qué es la melatonina?" />
    </div>
  );
};

export default Home;
