import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWishlistComponent } from './my-wishlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MyWishlistComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  declarations: [MyWishlistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MyWishlistComponent
  ]
})
export class MyWishlistModule { }
