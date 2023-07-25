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
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.routes').then((r) => r.projectsRoutes),
  },
  {
    path: 'projects/:no',
    loadChildren: () =>
      import('./project-detail/project-detail.routes').then(
        (r) => r.projectDetailRoutes
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
