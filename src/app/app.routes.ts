import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((r) => r.homeRoutes),
  },
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('./about/about.routes').then((r) => r.aboutRoutes),
  // },
];
