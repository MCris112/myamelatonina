import { Component, OnInit } from '@angular/core';
import { BreadcumbComponent } from '../../components/breadcumb/breadcumb.component';
import { ProductItemComponent } from './components/item/product-item.component';
import { Product, ProductItem } from './product.types';
import { ProductService } from './products.service';

@Component({
  selector: 'products-page',
  imports: [
    BreadcumbComponent,
    ProductItemComponent
  ],
  templateUrl: './products.page.html'
})
export default class ProductsComponent implements OnInit {

  columnsToShow = 3
  columns = [
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
  ];

  products: ProductItem[] = []

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {

    this.products = this._productService.getAsItem()
  }
}
