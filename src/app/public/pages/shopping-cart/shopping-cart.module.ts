import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { TableComponent } from './table/table.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { SheredComponentsModule } from 'src/app/shared/modules/shered-components.module';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    TableComponent,
    ActionButtonsComponent
  ],
  imports: [
    CommonModule,
    SheredComponentsModule
  ],
  exports:[
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
