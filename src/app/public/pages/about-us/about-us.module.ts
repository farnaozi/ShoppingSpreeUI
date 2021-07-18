import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutOurCompanyComponent } from './about-our-company/about-our-company.component';
import { OurPurposeComponent } from './our-purpose/our-purpose.component';
import { MeetOurTeamComponent } from './meet-our-team/meet-our-team.component';
import { OurBrandsAndCompaniesComponent } from './our-brands-and-companies/our-brands-and-companies.component';

@NgModule({
  declarations: [
    AboutOurCompanyComponent,
    AboutUsComponent,
    OurPurposeComponent,
    MeetOurTeamComponent,
    OurBrandsAndCompaniesComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
