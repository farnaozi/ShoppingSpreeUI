import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCarouselComponent } from '../components/products-carousel/products-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [ProductsCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[
    ProductsCarouselComponent
  ]
})
export class SheredComponentsModule { }
