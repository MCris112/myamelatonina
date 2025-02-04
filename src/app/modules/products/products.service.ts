import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { parseApi } from '../../core/utils/parse-api';

import ProductsData from "../../mockapi/data/melatonina.json";
import { Product } from './product.types';

@Injectable({providedIn: 'root'})
export class ProductService {

  products = signal<Product[]>(ProductsData)
  constructor(
    private _http: HttpClient
  ) {
  }

  list()
  {
    return this._http.get<{ data: Product }>( parseApi("products"))
  }
}
