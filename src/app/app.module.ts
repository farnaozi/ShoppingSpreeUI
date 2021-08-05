import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicModule } from './public/public.module';
import { LoginRegisterComponent } from './shared/components/login-register/login-register.component';
import { LoginRegisterModule } from './shared/components/login-register/login-register.module';
import { QuickViewComponent } from './shared/components/quick-view/quick-view.component';
import { QuickViewModule } from './shared/components/quick-view/quick-view.module';
import { MaterialModule } from './shared/modules/material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    BrowserAnimationsModule,
    LoginRegisterModule,
    QuickViewModule,
    MaterialModule
  ],
  providers: [],
  entryComponents:[LoginRegisterComponent, QuickViewComponent,
    LoginRegisterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
