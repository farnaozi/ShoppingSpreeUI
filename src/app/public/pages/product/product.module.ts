import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SheredComponentsModule } from 'src/app/shared/modules/shered-components.module';
import { DescriptionReviewSectionComponent } from './description-review-section/description-review-section.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { QuickViewModule } from 'src/app/shared/components/quick-view/quick-view.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  declarations: [ProductComponent, DescriptionReviewSectionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SheredComponentsModule,
    MaterialModule,
    QuickViewModule,
    RouterModule.forChild(routes)
  ],
  exports:[ProductComponent]
})
export class ProductModule { }
