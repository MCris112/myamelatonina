import React from 'react';
import Title from './Title'
import { sitevars } from "../constants";

const WhyUs = () => {
  return (
    <div className="container py-9">
        <Title content="¿Por qué nosotros?" />
        <p className="text-center">Porque somos mucho más que una distribuidora, ofrecemos un servicio integral, para que el cliente no tenga que preocuparse de nada.</p>

        <div className="flex gap-2 text-[8vw] items-center justify-center font-bold hover:border-b-8 border-accent cursor-pointer ease-in duration-150">
          <box-icon name='whatsapp' type='logo' size="8vw"></box-icon>
          <a href={`https://wa.me/${sitevars.phone_url}`} target='_blank'>{sitevars.phone}</a>
        </div>
      </div>
  )
}

export default WhyUs