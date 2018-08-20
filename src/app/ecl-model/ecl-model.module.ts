import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EclModelRoutes } from './ecl-model.routing';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { ModelPositionsComponent } from './model-positions/model-positions.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(EclModelRoutes)

  ],
  declarations: [ ModelDetailsComponent, ModelPositionsComponent ]
})

export class EclModelModule {


}
