import { Routes } from '@angular/router';

import { DashboardEclComponent } from './dashboard-ecl/dashboard-ecl.component';

export const DashboardsRoutes: Routes = [
 {
    path: '',
    children: [{
      path: 'dashboard-ecl',
      component: DashboardEclComponent
    }]
  }
];
