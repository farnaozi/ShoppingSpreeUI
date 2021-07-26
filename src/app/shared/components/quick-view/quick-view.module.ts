import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickViewComponent } from './quick-view.component';
import { BuyingDetailsSectionComponent } from './buying-details-section/buying-details-section.component';
import { ImagesSectionComponent } from './images-section/images-section.component';
import { MaterialModule } from '../../modules/material.module';
import { SheredComponentsModule } from '../../modules/shered-components.module';



@NgModule({
  declarations: [QuickViewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SheredComponentsModule
  ],
  exports:[QuickViewComponent]
})
export class QuickViewModule { }
