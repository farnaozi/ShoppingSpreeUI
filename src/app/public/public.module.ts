import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCaruselComponent } from './pages/home/main-carusel/main-carusel.component';
import { LatestNewsComponent } from './pages/home/latest-news/latest-news.component';
import { ImagesGridComponent } from './pages/home/images-grid/images-grid.component';
import { FashionSectionComponent } from './pages/home/fashion-section/fashion-section.component';
import { ProductsModule } from './pages/products/products.module';
import { ShoppingCartModule } from './pages/shopping-cart/shopping-cart.module';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';
import { ProductsCarouselComponent } from '../shared/components/products-carousel/products-carousel.component';
import { PublicComponent } from './public.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MainCaruselComponent,
    LatestNewsComponent,
    ImagesGridComponent,
    FashionSectionComponent,
    
    BreadcrumbComponent,
    ProductsCarouselComponent,
  
    PublicComponent],
  imports: [
    CommonModule,
    ProductsModule,
    ShoppingCartModule,
    CarouselModule
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
