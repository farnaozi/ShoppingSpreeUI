import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWishlistComponent } from './my-wishlist.component';



@NgModule({
  declarations: [MyWishlistComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyWishlistComponent
  ]
})
export class MyWishlistModule { }
