import { Component } from '@angular/core';

@Component({
  selector: 'features-section',
  imports: [],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {

  features = [
    {
      title: "PEDIDOS A TODO EL PERÚ",
      description: "Llegamos estés donde estés en todo el país",
      icon: "bx bx-package"
    },
    {
      title: "CONTRA ENTREGA",
      description: "Paga en efectivo o con tarjeta, en la puerta de tu hogar.",
      icon: "bx bxs-truck"
    },
    {
      title: "ENTREGA INMEIDATA",
      description: "Realiza tu pedido ahora y llegaremos lo más rapido posible a tu vivienda",
      icon: "bx bxs-plane-land"
    }
  ]
}
