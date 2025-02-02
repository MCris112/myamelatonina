import { Component, OnInit } from '@angular/core';
import { MenuItem } from './header.types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  imports: [
    RouterLink
  ]
})

export class HeaderComponent implements OnInit {

  menu: MenuItem[] = [
    {
      label: 'Inicio',
      route: '/'
    },
    {
      label: 'Sobre Nosotros',
      route: '/sobre-nosotros'
    },
    {
      label: 'Productos',
      route: '/productos'
    },
    {
      label: 'Contáctanos',
      route: '/contactanos'
    }
  ]

  constructor() { }

  ngOnInit() { }
}
