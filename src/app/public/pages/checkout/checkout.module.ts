import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { SheredComponentsModule } from 'src/app/shared/modules/shered-components.module';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CheckoutComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  declarations: [CheckoutComponent, CheckoutFormComponent, CheckoutDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SheredComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports:[CheckoutComponent]
})
export class CheckoutModule { }
