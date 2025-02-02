import { Component, OnInit } from '@angular/core';
import { BreadcumbComponent } from '../../components/breadcumb/breadcumb.component';
import { ProductItemComponent } from './components/item/product-item.component';
import { Product } from './product.types';
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

  products: Product[] = []

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {

    this._productService.list().subscribe( res => {
      console.log(res)
    })
  }
}
