import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListingsComponent } from './products-listings/products-listings.component';
import { ProductsComponent } from './products.component';
import { OptionsComponent } from './options/options.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FiltersComponent } from './filters/filters.component';
import { CategoriesComponent } from './filters/categories/categories.component';
import { ColorsComponent } from './filters/other-filters/colors/colors.component';
import { PriceComponent } from './filters/other-filters/price/price.component';
import { ReviewsComponent } from './filters/other-filters/reviews/reviews.component';
import { SizeComponent } from './filters/other-filters/size/size.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListingsComponent,
    OptionsComponent,
    FiltersComponent,
    CategoriesComponent,
    ColorsComponent,
    PriceComponent,
    ReviewsComponent,
    SizeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxSliderModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
