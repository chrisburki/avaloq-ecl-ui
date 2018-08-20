import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { Shape } from './shape/shape';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
   ],
  providers: [ MenuItems, Shape ]
})
export class SharedModule { }
