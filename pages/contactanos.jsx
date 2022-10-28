import React from "react";
import { Navbar, Footer, HeadComponent } from "../components";
import { sitevars } from "../constants";

const ContactUs = () => {
  return (
    <div>

      <HeadComponent page="Inicio" description="Somos una empresa importadora de melatonina americana. Estamos comprometidos a mejorar la salud y esperanza de vida aprovechando los beneficios que ofrece la propia naturaleza." keywords="suplementos para dormir, melatonina, natrol, medicina, no puedo dormir, antibioticos, medicina a delivery, todo el peru" />

      <Navbar />
      <div className="container py-9 pt-[3rem]">
        <div className="text-center">
          <h1 className="text-primary text-4xl font-bold mb-6">
            Envianos un mensaje
          </h1>
          <hr className="border-t-[.6rem] border-accent w-60 mx-auto mb-9" />
        </div>

        <form action="#" className="w-full max-w-[600px] mx-auto md:mb-10 flex flex-col gap-3" method="post">
          <input
            type="text"
            placeholder="Su Nombre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="email"
            placeholder="Su correo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <textarea
            placeholder="Escriba su Mensaje"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          <button
            type="button"
            className="w-full p-2 border block w-100 text-center ease-in duration-150 hover:bg-primary hover:text-white hover:border-primary bg-accent border-accent text-primary"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="flex flex-col gap-10 sm:gap-6 sm:grid sm:grid-cols-2 py-9">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-primary w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[9rem] md:h-[9rem] flex items-center justify-center rounded-full text-white mb-4">
              <box-icon type="solid" name="phone" size="3rem" color="white"></box-icon>
            </div>

            <div className="text-primary text-center">
              <h3 className="font-bold text-3xl sm:text-2xl">
                Télefono
              </h3>
              <p>{sitevars.phone}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="bg-primary w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[9rem] md:h-[9rem] flex items-center justify-center rounded-full text-white mb-4">
              <box-icon type="solid" name="envelope" size="3rem" color="white"></box-icon>
            </div>

            <div className="text-primary text-center">
              <h3 className="font-bold text-3xl sm:text-2xl">Nuestro Correo</h3>
              <p>{sitevars.email}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
