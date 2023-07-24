import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then((r) => r.homeRoutes),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.routes').then((r) => r.aboutRoutes),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.routes').then((r) => r.contactRoutes),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.routes').then((r) => r.skillsRoutes),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
