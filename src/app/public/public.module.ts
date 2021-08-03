import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PublicComponent } from './public.component';
import { SheredComponentsModule } from '../shared/modules/shered-components.module';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
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
