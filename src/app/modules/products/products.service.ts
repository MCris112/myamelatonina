import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { parseApi } from '../../core/utils/parse-api';

import ProductsData from "../../mockapi/data/melatonina.json";
import { Product, ProductItem } from './product.types';
import { tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {

  products = signal<Product[]>(ProductsData)

  constructor(
    private _http: HttpClient
  ) {
  }

  list()
  {
    return this._http.get<Product[]>( parseApi("products")).pipe(
      tap( products => {
        this.products.set(products)
      })
    )
  }

  get( slug: string )
  {
    return this.products().find( p => p.slug == slug)
  }
  getAsItem(limit?: number)
  {
    let data: Product[] = []
    if(!this.list)
    {
      data = this.products()
    }else{
      data = this.products().slice(0, limit)
    }

    let items: ProductItem[] = []

    data.forEach(item => {
      item.variations.forEach((variation, index) => {
        items.push({
          id: item.id+"_"+index,
          slug: item.slug,
          name: `${item.name} - ${variation.mg}mg - ${variation.pills} cápsulas`,
          introduction: item.introduction,
          image: variation.image,
          mg: variation.mg,
          pills: variation.pills,
          price: variation.price
        })
      })
    } )

    return items
  }
}
