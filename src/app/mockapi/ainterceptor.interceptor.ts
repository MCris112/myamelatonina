import { HttpInterceptorFn } from '@angular/common/http';

export const ainterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
