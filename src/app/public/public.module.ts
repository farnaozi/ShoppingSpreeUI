import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';
import { PublicComponent } from './public.component';
import { SheredComponentsModule } from '../shared/modules/shered-components.module';
import { MyWishlistModule } from './pages/my-wishlist/my-wishlist.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    BreadcrumbComponent,
    PublicComponent
    ],
   

  imports: [
    CommonModule,
    SheredComponentsModule,
    MyWishlistModule,
    PublicRoutingModule
  ],
  exports: [
    PublicComponent,
  ]
})
export class PublicModule { }
