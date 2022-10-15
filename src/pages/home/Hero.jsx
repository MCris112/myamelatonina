import React from "react";

import { sitevars, homevars } from '../../constants';
import { Button } from "../../components";

const Hero = () => {
  return (
    <div class="relative w-full h-[80vh]">
      <div className="relative top-0 left-0 w-full h-full">
        <img
          src={homevars.hero.bg}
          alt=""
          className="bg-primary w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 object"></div>
      </div>
      <div className="absolute top-10 left-0 w-full">
        <div className="container">
          <div className="logo">
            <img src={sitevars.logo} alt="" className="w-1/2 mx-auto mb-6"/>
          </div>
          <div className="text-white text-center">
            <span className="tracking-[6px]">SUPLEMENTOS Y VITAMINAS</span>
            <h1 className="font-bold text-5xl mb-4">Venta de Melatonina</h1>
            <p className="mb-4">
              Duerme mejor y disfruta tus sueños como ningun otro para tu día a
              día quitar esos malestares y despertar comodamente en tu hogar
              junto a un mejor amanecer.
            </p>
            <Button
              type="outline"
              label="Ver Productos"
              link="productos"
              tag="a"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
