import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCarouselComponent } from '../components/products-carousel/products-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProductsCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports:[
    ProductsCarouselComponent,
  ]
})
export class SheredComponentsModule { }
