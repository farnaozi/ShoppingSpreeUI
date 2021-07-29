import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicComponent } from './public.component';
import { SheredComponentsModule } from '../shared/modules/shered-components.module';
import { MyWishlistModule } from './pages/my-wishlist/my-wishlist.module';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    FooterComponent,
    PublicComponent
    ],
   

  imports: [
    CommonModule,
    SheredComponentsModule,
    PublicRoutingModule,
    NavbarModule
  ],
  exports: [
    PublicComponent,
  ]
})
export class PublicModule { }
