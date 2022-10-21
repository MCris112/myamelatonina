import React from "react";
import Image from 'next/image'

import featureBg from "../public/assets/features-bg.jpg";

import { Title } from '../components';

const Features = () => {
  return (
    <div className="relative py-6">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src={featureBg}
          alt=""
          className="bg-primary w-full h-full object-cover"
          layout='fill'
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 object"></div>
      </div>

      <div className="w-full md:min-h-[60vh] md:flex md:items-center md:justify-center">
        <div className="container py-6">
          <Title content="¿Qué ofrecemos?" />

          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-6 md:grid md:grid-cols-3 pb-9">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-accent w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[9rem] md:h-[9rem] flex items-center justify-center rounded-full text-white mb-4">
                <box-icon type='solid' name='package' size='3rem'></box-icon>
              </div>

              <div className="text-white text-center">
                <h3 className="font-bold text-3xl sm:text-2xl">PEDIDOS A TODO EL PERÚ</h3>
                <p>Llegamos estés donde estés en todo el país.</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-accent w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[9rem] md:h-[9rem] flex items-center justify-center rounded-full text-white mb-4">
                <box-icon type='solid' name='truck' size='3rem'></box-icon>
              </div>

              <div className="text-white text-center">
                <h3 className="font-bold text-3xl sm:text-2xl">CONTRA ENTREGA</h3>
                <p>Paga en efectivo o con tarjeta, en la puerta de tu hogar.</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-accent w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[9rem] md:h-[9rem] flex items-center justify-center rounded-full text-white mb-4">
                <box-icon type='solid' name='plane-land' size='3rem'></box-icon>
              </div>

              <div className="text-white text-center">
                <h3 className="font-bold text-3xl sm:text-2xl">ENTREGA INMEIDATA</h3>
                <p>Realiza tu pedido ahora y llegaremos lo más rapido posible a tu vivienda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
