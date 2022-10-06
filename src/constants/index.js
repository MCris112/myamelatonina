import { AboutUs, Home, Products, ContactUs } from '../pages';


export const sitevars = {
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

export const navLinks = {
    'inicio': {
        slug: 'incio',
        text: 'Inicio',
        component: Home(),
    },

    'productos': {
        slug: '/productos',
        text: 'Productos',
        component: Products(),
    },

    'sobre-nosotros': {
        slug: 'sobre-nosotros',
        text: 'Sobre Nosotros',
        component: AboutUs(),
    },

    'contactanos': {
        slug: 'contactanos',
        text: 'Contáctanos',
        component: ContactUs(),
    }
}