import { Component, OnInit } from '@angular/core';
import { BreadcumbComponent } from '../../components/breadcumb/breadcumb.component';

@Component({
  selector: 'contact-page',
  templateUrl: 'contact.page.html',
  imports: [ BreadcumbComponent]
})

export default class ContactPaget implements OnInit {

  information = [
    {
      title: "Télefono",
      value: "+51 902 904 357",
      icon: "phone"
    },
    {
      title: "Nuestro Correo",
      value: "ventas@myamelatonina.com",
      icon: "email"
    },
    {
      title: "Ruc",
      value: "10463922905 Lizbeth Barragan samame",
      icon: "location"
    }
  ]
  constructor() { }

  ngOnInit() { }
}
