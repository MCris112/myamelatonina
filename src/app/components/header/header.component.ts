import { Component, OnInit } from '@angular/core';
import { MenuItem } from './header.types';
import { RouterLink } from '@angular/router';
import { CompanyConfig } from '../../../environments/environment.types';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  imports: [
    RouterLink
  ]
})

export class HeaderComponent implements OnInit {

  company = environment.company

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
