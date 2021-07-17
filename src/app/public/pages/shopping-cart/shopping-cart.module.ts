import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { TableComponent } from './table/table.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    TableComponent,
    ActionButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShoppingCartComponent
  ]
})

export class ShoppingCartModule { }
