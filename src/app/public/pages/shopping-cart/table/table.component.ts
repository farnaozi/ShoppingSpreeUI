import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  shoppingCartData:any;
  itemAmount:number = 1;
  itemAmountFullPrice:any;
  itemPrice:any;
  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCartData().subscribe(data => {
      this.shoppingCartData = data;
    })
  }
  reduceAmount(){
    if(this.itemAmount > 1){
      this.itemAmount--;
    }
  }
  increaseAmount(){
    this.itemAmount++;    
  }

}
