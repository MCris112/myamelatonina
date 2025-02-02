import { HttpInterceptorFn } from '@angular/common/http';

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('Mock API Interceptor');
  return next(req);
};
