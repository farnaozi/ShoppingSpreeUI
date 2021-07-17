import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionSectionComponent } from './fashion-section/fashion-section.component';
import { HotSalesComponent } from './hot-sales/hot-sales.component';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { MainCaruselComponent } from './main-carusel/main-carusel.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { SheredComponentsModule } from 'src/app/shared/modules/shered-components.module';
import { HomeComponent } from './home.component';
import { CompanyBenefitsComponent } from './company-benefits/company-benefits.component';


@NgModule({
  declarations: [
    FashionSectionComponent,
    HotSalesComponent,
    ImagesGridComponent,
    LatestNewsComponent,
    MainCaruselComponent,
    TopBrandsComponent,
    HomeComponent,
    CompanyBenefitsComponent
  ],
  imports: [
    CommonModule,
    SheredComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
