import logo from "../public/assets/logo.png";
import logoVertical from "../public/assets/logo-vertical.png";
import heroBg from "../public/assets/hero-bg.jpg";
import aboutImg from "../public/assets/mission.jpg";
import footerProductBg from '../public/assets/footerproduct-bg.jpg';

export const sitevars = {
    production: false,
    url: 'https://myamelatonina.com/',
    url_dev: 'http://localhost:3000/',
    ruc: '1463922905',
    logo: logo,
    phone: '+51 902 904 357',
    email: 'ventas@myamelatonina.com',
    phone_url: '51902904357',
    site_name: 'M&A Melatonina Amerícana - Perú',
    social: [
        {
            text: 'Facebook',
            url: 'http://www.facebook.com',
            icon: {
                type: 'logo',
                class: 'facebook-circle',
                color: 'white',
                bg: '#3b5998'
            },
        },
        {
            text: 'Whatsapp',
            url: 'http://www.facebook.com',
            icon: {
                type: 'logo',
                class: 'whatsapp',
                color: 'white',
                bg: '#25d366'
            },
        }
    ]
}

export const homevars = {
    hero: {
        bg: heroBg,
        img: logoVertical,
    },
    footerproducts: {
        id: '5-htp-l-5-hydroxy-tryptophan',
        videoid: '5rlloagQHs4',
        bg: footerProductBg,
    }
}

export const aboutusvars = {
    logo: logoVertical,
    title: '¿Quiénes Somos?',
    text: 'Somos una empresa importadora de melatonina americana. Estamos comprometidos a mejorar la salud y esperanza de vida aprovechando los beneficios que ofrece lapropia naturaleza.',
    mission: {
        title: 'Nuestra Misión',
        text: 'Poder ofrecerte productos de calidad  y natural, por lo que te proporcionaremos información detallada para que puedas escoger el mejor producto que se adapte a tus necesidades.',
        img: aboutImg,
    }
}
export const navLinks = [
    {
        slug: '/',
        text: 'Inicio',
    },

    {
        slug: '/productos',
        text: 'Productos',
    },

    {
        slug: '/sobre-nosotros',
        text: 'Sobre Nosotros',
    },

    {
        slug: '/contactanos',
        text: 'Contáctanos',
    }
]

export const homeProducts = [
    'melatonina-3mg', 
    'melatonina-5mg',
    'melatonina-10mg',
    'natrol-melatonina-sublingual-3mg',
    'natrol-melatonina-sublingual-5mg',
    'natrol-melatonina-sublingual-10mg'
]

export const homeProduct = "melatonina-10mg"