import { FullDashboardLayoutComponent } from './containers/full-dashboard-layout/full-dashboard-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullDashboardLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'regular',
        loadChildren: './views/regular-pensions/regular-pensions.module#RegularPensionsModule'
      },
      {
        path: 'gen',
        loadChildren: './views/generalff-pensions/generalff-pensions.module#GeneralffPensionsModule'
      },
      {
        path: 'revisions',
        loadChildren: './views/pension-revisions/pension-revisions.module#PensionRevisionsModule'
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
