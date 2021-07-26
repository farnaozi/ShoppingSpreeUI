import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutOurCompanyComponent } from './about-our-company/about-our-company.component';
import { OurPurposeComponent } from './our-purpose/our-purpose.component';
import { MeetOurTeamComponent } from './meet-our-team/meet-our-team.component';
import { OurBrandsAndCompaniesComponent } from './our-brands-and-companies/our-brands-and-companies.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutUsComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  declarations: [
    AboutOurCompanyComponent,
    OurPurposeComponent,
    MeetOurTeamComponent,
    OurBrandsAndCompaniesComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
