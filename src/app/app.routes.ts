import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'stories',
    loadComponent: () => import('./pages/stories/stories.page').then( m => m.StoriesPage)
  },
];
