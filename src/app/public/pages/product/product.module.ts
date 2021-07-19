import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SheredComponentsModule } from 'src/app/shared/modules/shered-components.module';
import { ImagesSectionComponent } from './images-section/images-section.component';
import { DescriptionReviewSectionComponent } from './description-review-section/description-review-section.component';
import { BuyingDetailsSectionComponent } from './buying-details-section/buying-details-section.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';



@NgModule({
  declarations: [ProductComponent, ImagesSectionComponent, DescriptionReviewSectionComponent, BuyingDetailsSectionComponent],
  imports: [
    CommonModule,
    SheredComponentsModule,
    MaterialModule
  ],
  exports:[ProductComponent]
})
export class ProductModule { }
