import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { SheredComponentsModule } from 'src/app/shared/modules/shered-components.module';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';



@NgModule({
  declarations: [CheckoutComponent, CheckoutFormComponent, CheckoutDetailsComponent],
  imports: [
    CommonModule,
    SheredComponentsModule
  ],
  exports:[CheckoutComponent]
})
export class CheckoutModule { }
