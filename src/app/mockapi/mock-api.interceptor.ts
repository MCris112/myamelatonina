import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import MockApi from './mock-api';
import productsData from "./data/melatonina.json";

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith('/api/')) {
    const router = new MockApi();

    router.get("products", () => {
      return {
        data: productsData
      }
    });

    return of( router.response(req) );
  }

  return next(req);
};

