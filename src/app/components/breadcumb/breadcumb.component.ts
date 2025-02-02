import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  imports: [],
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss'
})
export class BreadcumbComponent {

  @Input() title = "Error";
}
