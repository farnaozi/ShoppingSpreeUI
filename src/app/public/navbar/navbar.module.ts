import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MainNavComponent,
    SideNavComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
