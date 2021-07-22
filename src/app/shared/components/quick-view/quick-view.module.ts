import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickViewComponent } from './quick-view.component';
import { BuyingDetailsSectionComponent } from './buying-details-section/buying-details-section.component';
import { ImagesSectionComponent } from './images-section/images-section.component';



@NgModule({
  declarations: [QuickViewComponent, BuyingDetailsSectionComponent, ImagesSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[QuickViewComponent]
})
export class QuickViewModule { }
