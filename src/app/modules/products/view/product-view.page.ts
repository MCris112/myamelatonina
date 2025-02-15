import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { BreadcumbComponent } from '../../../components/breadcumb/breadcumb.component';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Product, ProductItem } from '../product.types';
import { ProductService } from '../products.service';
import { ProductItemComponent } from '../components/item/product-item.component';
@Component({
  selector: 'product-view-page',
  templateUrl: 'product-view.page.html',
  imports: [ BreadcumbComponent, ProductItemComponent  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export default class ProductViewPage implements OnInit {

  product = signal<Product|undefined>(undefined)
    products = signal<ProductItem[]>([])

  constructor(
    private route: ActivatedRoute,
        private _productService: ProductService,
  ) { }

  ngOnInit() {
    this.products.set( this._productService.getAsItem(6) )


    combineLatest([
      this.route.params,
      this.route.queryParams
    ]).subscribe(([params, queryParams]) => {

      this.product.set( this._productService.get(params["slug"]) )
      console.log( params, queryParams)
    });
  }
}
