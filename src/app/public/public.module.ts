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
import { HomeModule } from './pages/home/home.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductModule } from './pages/product/product.module';
import { ContactModule } from './pages/contact/contact.module';
import { AboutUsModule } from './pages/about-us/about-us.module';




@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    BreadcrumbComponent,
    PublicComponent
    ],
  imports: [
    CommonModule,
    ProductsModule,
    ShoppingCartModule,
    CheckoutModule,
    SheredComponentsModule,
    HomeModule,
    ProductModule,
    ContactModule,
    AboutUsModule 
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
