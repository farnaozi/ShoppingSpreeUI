import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SheredComponentsModule } from 'src/app/shared/modules/shered-components.module';
import { DescriptionReviewSectionComponent } from './description-review-section/description-review-section.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { QuickViewModule } from 'src/app/shared/components/quick-view/quick-view.module';

@NgModule({
  declarations: [ProductComponent, DescriptionReviewSectionComponent],
  imports: [
    CommonModule,
    SheredComponentsModule,
    MaterialModule,
    QuickViewModule
  ],
  exports:[ProductComponent]
})
export class ProductModule { }
