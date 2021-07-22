import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';
import { LoginRegisterComponent } from './login-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginRegisterComponent, 
    LoginComponent, 
    RegisterComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [LoginRegisterComponent]
})
export class LoginRegisterModule { }
