import Title from "./Title";
import { sitevars } from "../constants";

const WhyUs = () => {
  return (
    <div className="container py-9">
      <Title content="¿Por qué nosotros?" />
      <div className="w-full md:w-2/4 mx-auto">
        <p className="text-center md:py-9 md:text-[1.3rem] opacity-60">
          Porque somos mucho más que una distribuidora, ofrecemos un servicio
          integral, para que el cliente no tenga que preocuparse de nada.
        </p>

        <div className="flex gap-2 text-[8vw] items-center justify-center font-bold hover:border-b-8 border-accent cursor-pointer ease-in duration-150 md:text-5xl">
          <div className="block md:hidden">
            <box-icon name="whatsapp" type="logo" size="8vw"></box-icon>
          </div>
          <div className="hidden md:block">
            <box-icon name="whatsapp" type="logo" size="5rem"></box-icon>
          </div>
          <a href={`https://wa.me/${sitevars.phone_url}`} target="_blank" rel="noreferrer">
            {sitevars.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
