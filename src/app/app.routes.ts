import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "", loadComponent: () => import("./modules/home/home.page")
  },

  {
    path: "productos", loadComponent: () => import("./modules/products/products.page")
  }
];
