import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurLocationComponent } from './our-location/our-location.component';
import { ContactComponent } from './contact.component';
import { SendMessageComponent } from './send-message/send-message.component';



@NgModule({
  declarations: [
    OurLocationComponent,
    ContactComponent,
    SendMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
