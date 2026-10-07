import { FaWhatsapp } from "react-icons/fa";

import { sitevars } from "../constants";

const WhyUs = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-sm bg-surface px-6 py-12 sm:px-12 md:flex md:items-center md:justify-between md:gap-16 md:px-16 md:py-16">
          <div className="max-w-xl">
            <span className="mb-5 block h-[3px] w-12 bg-accent" />
            <h2 className="heading text-ink">¿Por qué nosotros?</h2>
            <p className="lead mt-4">
              Porque somos mucho más que una distribuidora, ofrecemos un servicio
              integral, para que el cliente no tenga que preocuparse de nada.
            </p>
          </div>

          <div className="mt-10 shrink-0 md:mt-0 md:text-right">
            <p className="text-sm font-medium text-muted">Escríbenos por WhatsApp</p>
            <a
              href={`https://wa.me/${sitevars.phone_url}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block font-serif text-3xl font-semibold text-primary transition-colors hover:text-primary-dark sm:text-4xl"
            >
              {sitevars.phone}
            </a>
            <a
              href={`https://wa.me/${sitevars.phone_url}`}
              target="_blank"
              rel="noreferrer"
              className="btn-dark mt-6"
            >
              <FaWhatsapp size={18} /> Iniciar conversación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
