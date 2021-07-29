import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCarouselComponent } from '../components/products-carousel/products-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { BuyingDetailsSectionComponent } from '../components/quick-view/buying-details-section/buying-details-section.component';
import { ImagesSectionComponent } from '../components/quick-view/images-section/images-section.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsCarouselComponent, BuyingDetailsSectionComponent, ImagesSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    RouterModule
  ],
  exports:[
    ProductsCarouselComponent,
    BuyingDetailsSectionComponent,
    ImagesSectionComponent
  ]
})
export class SheredComponentsModule { }
