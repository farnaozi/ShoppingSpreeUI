import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { PublicComponent } from './public/public.component';
import { ProductsModule } from './public/pages/products/products.module';
import { NavbarComponent } from './public/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './public/footer/footer.component';
import { HomeComponent } from './public/pages/home/home.component';
import { MainCaruselComponent } from './public/pages/home/main-carusel/main-carusel.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MainCaruselComponent,
    
    PublicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
