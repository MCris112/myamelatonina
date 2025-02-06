import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '../../product.types';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'product-item',
  templateUrl: 'product-item.component.html',
  imports: [ CurrencyPipe]
})

export class ProductItemComponent implements OnInit {

  @Input("data") product!: ProductItem

  constructor() { }

  ngOnInit() { }
}
