import { Environment } from "./environment.types";

export const environment: Environment = {
  site: {
    name: "M&A Melatonina",
    url: "http://localhost:4200/"
  },
  company: {
    name: "M&A Melatonina",
    email: "ventas@myamelatonina.com",
    phone: {
      text: "+51 902 904 357",
      url: "51902904357"
    },
    legal: {
      ruc: "10463922905",
      name: "Lizbeth Barragan samame"
    },
    introduction: "Somos una empresa importadora de melatonina americana. Estamos comprometidos a mejorar la salud y esperanza de vida aprovechando los beneficios que ofrece la propia naturaleza.",
    social: [
      {
        social: "facebook",
        link: "https://www.facebook.com/myamelatonina"
      }
    ]
  }
};
