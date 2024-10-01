import {Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user-side/user-side.module').then((m) => m.UserSideModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
