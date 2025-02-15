import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  company = environment.company;

  marquee = [
    'Melatonina americana',
    'Pedidos a todo el Perú',
    'Mejora tu sueño con Myamelatonina',
    'Productos naturales y seguros',
    'Pago contra entrega',
    'Pedidos de melatonina a todo el Perú con entrega inmediata y pago contra entrega',
    'Mejora tu calidad de sueño con los productos de Myamelatonina - Entrega rápida',
    '¿Buscas melatonina de calidad? Myamelatonina te ofrece los mejores productos naturales',
  ];

  getWhatsappURL() {
    let url = "https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
    let message = "wasa teszt";

    url = `https://api.whatsapp.com/send?phone=${this.company.phone.url}&text=${ encodeURIComponent(message)}`

    return url;
  }
}
