import Image from 'next/legacy/image'

import featureBg from "../public/assets/features-bg.jpg";

import { Title } from '.';

const features = [
  {
    title: "Pedidos a todo el Perú",
    text: "Llegamos estés donde estés en todo el país.",
  },
  {
    title: "Contra entrega",
    text: "Paga en efectivo o con tarjeta, en la puerta de tu hogar.",
  },
  {
    title: "Entrega inmediata",
    text: "Realiza tu pedido ahora y llegaremos lo más rapido posible a tu vivienda.",
  },
];

const Features = () => {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10">
        <Image src={featureBg} alt="" className="object-cover" layout='fill' />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="container section">
        <Title content="¿Qué ofrecemos?" light />

        <div className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group relative bg-ink/80 p-8 md:p-10">
              <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-[0.15] bg-accent transition-transform duration-500 group-hover:scale-x-100" />
              <h3 className="font-serif text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
