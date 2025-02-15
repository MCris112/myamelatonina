import { Component, OnInit } from '@angular/core';
import { BreadcumbComponent } from '../../components/breadcumb/breadcumb.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'contact-page',
  templateUrl: 'contact.page.html',
  imports: [ BreadcumbComponent]
})

export default class ContactPaget implements OnInit {

  information = [
    {
      title: "Télefono",
      value: environment.company.phone.text,
      icon: "phone"
    },
    {
      title: "Nuestro Correo",
      value: environment.company.email,
      icon: "email"
    },
    {
      title: "Ruc",
      value: environment.company.legal.ruc + " " + environment.company.legal.name,
      icon: "location"
    }
  ]
  constructor() { }

  ngOnInit() { }
}
