import { Routes } from '@angular/router';

import { ModelDetailsComponent } from './model-details/model-details.component';
import { ModelPositionsComponent } from './model-positions/model-positions.component';

export const EclModelRoutes: Routes = [
 {
    path: '',
    children: [
      {
        path: 'model-details',
        component: ModelDetailsComponent
      },
      {
        path: 'model-positions',
        component: ModelPositionsComponent
      }
    ]
  }
];
