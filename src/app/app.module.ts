import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicModule } from './public/public.module';
import { LoginRegisterComponent } from './shared/components/login-register/login-register.component';
import { LoginRegisterModule } from './shared/components/login-register/login-register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    BrowserAnimationsModule,
    LoginRegisterModule
  ],
  providers: [],
  entryComponents:[LoginRegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
