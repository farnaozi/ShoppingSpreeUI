import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurLocationComponent } from './our-location/our-location.component';
import { ContactComponent } from './contact.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  declarations: [
    OurLocationComponent,
    ContactComponent,
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
