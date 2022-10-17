import React from "react";
import { sitevars, navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  let location = useLocation();

  return (
    <div className="bg-[#001c38] py-6">
      <div className="container pt-6">
        <div className="mb-[4rem]">
          <img src={sitevars.logo} alt="" className="w-1/2 mx-auto mb-6" />
          <p className="text-white text-center">
            Somos una empresa importadora de melatonina americana. Estamos
            comprometidos a mejorar la salud y esperanza de vida aprovechando
            los beneficios que ofrece la propia naturaleza.
          </p>
        </div>

        <div className="text-center my-6">
          <h4 className="text-white text-3xl">Menu</h4>
          <ul className="text-white opacity-60">
                {navLinks.map((value, key) => (
                  <li key={key}>
                    <Link
                      className={`block hover:text-accent py-2 ${
                        location.pathname == "/" + key ? "text-accent" : ""
                      } `}
                      to={value.slug}
                    >
                      {value.text}
                    </Link>
                  </li>
                ))}
              </ul>
        </div>
        <div className="text-center my-6">
          <h4 className="text-white text-3xl">Más Información</h4>
          <ul className="text-white opacity-60">
            <li>
              <a href={ `https://wa.me/${sitevars.phone_url}` } className="block hover:text-accent py-2">{ sitevars.phone }</a>
            </li>
            <li>
              <a href={ `mailto:${sitevars.email}` } className="block hover:text-accent py-2">{ sitevars.email }</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="container text-white text-center py-6 opacity-60">
        <p>© Todos los derechos reservados | <a href="" className="hover:text-accent underline">Desarrollado por Darkredgm</a></p>
      </div>
    </div>
  );
};

export default Footer;
