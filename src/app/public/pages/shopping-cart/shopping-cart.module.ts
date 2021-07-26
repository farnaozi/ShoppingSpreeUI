import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { TableComponent } from './table/table.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { SheredComponentsModule } from 'src/app/shared/modules/shered-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  declarations: [
    ShoppingCartComponent,
    TableComponent,
    ActionButtonsComponent
  ],
  imports: [
    CommonModule,
    SheredComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ShoppingCartComponent
  ]
})

export class ShoppingCartModule { }
