import React from "react";
import Image from 'next/image'

import { sitevars, homevars } from "../../constants";
import { Button } from "../../components";

const Hero = () => {
  return (
    <div class="relative w-full min-h-[80vh] h-fit py-6 sm:flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src={homevars.hero.bg}
          alt=""
          className="bg-primary w-full h-full object-cover"
          layout='fill'
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 object"></div>
      </div>
      <div className="w-full py-6">
        <div className="container">
          <div className="w-full flex flex-col sm:flex-row sm:gap-[10%] items-center md:w-3/4 mx-auto">
            <div className="w-full">
              <Image
                src={homevars.hero.img}
                alt=""
                className="w-1/2 sm:w-full mx-auto mb-6"
              />
            </div>
            <div className="text-white text-center sm:text-start">
              <span className="tracking-[6px]">SUPLEMENTOS Y VITAMINAS</span>
              <h1 className="font-bold text-5xl mb-4 md:text-[4rem]">
                Venta de Melatonina
              </h1>
              <p className="mb-4 md:text-[1.3rem]">
                Duerme mejor y disfruta tus sueños como ningun otro para tu día
                a día quitar esos malestares y despertar comodamente en tu hogar
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
    </div>
  );
};

export default Hero;
