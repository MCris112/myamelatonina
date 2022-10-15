import logo from "../assets/logo.png";
import heroBg from "../assets/hero-bg.jpg";
import footerProductBg from '../assets/footerproduct-bg.jpg';

export const sitevars = {
    logo: logo,
    phone: '+51 902 904 357',
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
    },
    footerproducts: {
        id: '5-htp-l-5-hydroxy-tryptophan',
        videoid: '5rlloagQHs4',
        bg: footerProductBg,
    }
}
export const navLinks = [
    {
        slug: '',
        text: 'Inicio',
    },

    {
        slug: '/productos',
        text: 'Productos',
    },

    {
        slug: 'sobre-nosotros',
        text: 'Sobre Nosotros',
    },

    {
        slug: 'contactanos',
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