import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from './products.service';
import { Product } from './product.types';

export const productResolverResolver: ResolveFn<Product[]> = (route, state) => {
;
  return  inject(ProductService).list();
};
