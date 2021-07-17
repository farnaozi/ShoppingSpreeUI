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
import { PublicComponent } from './public.component';
import { HotSalesComponent } from './pages/home/hot-sales/hot-sales.component';
import { TopBrandsComponent } from './pages/home/top-brands/top-brands.component';

import { CheckoutModule } from './pages/checkout/checkout.module';
import { SheredComponentsModule } from '../shared/modules/shered-components.module';




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
  
    PublicComponent,
        HotSalesComponent,
        TopBrandsComponent],
  imports: [
    CommonModule,
    ProductsModule,
    ShoppingCartModule,
    CheckoutModule,
    SheredComponentsModule
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
