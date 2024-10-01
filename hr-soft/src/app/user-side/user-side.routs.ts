import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";


export const userSideRouts: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(() => HomeComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
