import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then( m => m.HomePage)
      },
      /* {
        path: 'search',
        loadComponent: () =>
          import('../search/search.page').then( m => m.SearchPage)
      }, */
      {
        path: 'explore',
        loadComponent: () =>
          import('../pages/explore/explore.page').then( m => m.ExplorePage)
      },
      {
        path: 'new',
        loadComponent: () =>
          import('../pages/new/new.page').then( m => m.NewPage)
      },
      {
        path: 'reels',
        loadComponent: () =>
          import('../pages/reels/reels.page').then( m => m.ReelsPage)
      },
      {
        path: 'profile',
        loadComponent: () =>
        import('../pages/profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: 'inbox',
        loadComponent: () =>
          import('../pages/inbox/inbox.page').then( m => m.InboxPage)
      },
      /* {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      }, */
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
