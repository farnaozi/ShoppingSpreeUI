import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountDashboardComponent } from './account-dashboard.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { MyWishlistModule } from '../my-wishlist/my-wishlist.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AccountDashboardComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  declarations: [
    AccountInfoComponent,
    AccountDashboardComponent,
    OrderHistoryComponent,
    WishListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MyWishlistModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AccountDashboardComponent
  ]
})
export class AccountDashboardModule { }
