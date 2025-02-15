import { Routes } from '@angular/router';
import { productResolverResolver } from './modules/products/product-resolver.resolver';

export const routes: Routes = [
  {
    path: "",
    resolve: {
      products:  productResolverResolver
    },
    children: [
      {
        path: "", loadComponent: () => import("./modules/home/home.page")
      },
      {
        path: "sobre-nosotros", loadComponent: () => import("./modules/about-us/about-us.page")
      },
      {
        path: "productos", loadComponent: () => import("./modules/products/products.page")
      },
      {
        path: "productos/:slug", loadComponent: () => import("./modules/products/view/product-view.page")
      }
    ]
  },
  {
    path: "contactanos", loadComponent: () => import("./modules/contact/contact.page")
  }

];
