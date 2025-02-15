import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '../../product.types';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-item',
  templateUrl: 'product-item.component.html',
  imports: [ CurrencyPipe, RouterLink]
})

export class ProductItemComponent implements OnInit {

  @Input("data") product!: ProductItem

  constructor() { }

  ngOnInit() { }

  get productUrl()
  {
    return ["/productos", this.product.slug ]
  }

  get queryParams()
  {
    return {
      mg: this.product.mg,
      pills: this.product.pills
    }
  }
}
