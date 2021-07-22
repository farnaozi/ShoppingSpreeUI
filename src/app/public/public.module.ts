import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsModule } from './pages/products/products.module';
import { ShoppingCartModule } from './pages/shopping-cart/shopping-cart.module';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';
import { PublicComponent } from './public.component';

import { CheckoutModule } from './pages/checkout/checkout.module';
import { SheredComponentsModule } from '../shared/modules/shered-components.module';
import { HomeModule } from './pages/home/home.module';
import { ProductComponent } from './pages/product/product.component';

import { AboutUsModule } from './pages/about-us/about-us.module';
import { ProductModule } from './pages/product/product.module';
import { ContactModule } from './pages/contact/contact.module';
import { AccountDashboardModule } from './pages/account-dashboard/account-dashboard.module';
import { MyWishlistModule } from './pages/my-wishlist/my-wishlist.module';

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
    AboutUsModule ,
    ProductModule,
    ContactModule,
    AccountDashboardModule,
    MyWishlistModule
  ],
  exports: [
    PublicComponent,
  ]
})
export class PublicModule { }
