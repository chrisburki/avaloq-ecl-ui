import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
      path: '',
      redirectTo: '/dashboards/dashboard-ecl',
      pathMatch: 'full'
    }, {
      path: 'dashboards',
      loadChildren: './dashboards/dashboards.module#DashboardsModule'
    }, {
      path: 'ecl-model',
      loadChildren: './ecl-model/ecl-model.module#EclModelModule'
    }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule'
  }, {
    path: 'icons',
    loadChildren: './icons/mat-icon.module#IconsModule'
  }]
}];

