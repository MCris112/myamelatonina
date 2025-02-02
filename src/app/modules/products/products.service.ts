import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parseApi } from '../../core/utils/parse-api';

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  list()
  {
    return this._http.get( parseApi("products") )
  }
}
