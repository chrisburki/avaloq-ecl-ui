import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardsRoutes } from './dashboards.routing';
import { ChartsModule } from 'ng2-charts';

import { DashboardEclComponent } from './dashboard-ecl/dashboard-ecl.component';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartsModule,
    RouterModule.forChild(DashboardsRoutes)

  ],
  declarations: [ DashboardEclComponent ]
})

export class DashboardsModule {


}
