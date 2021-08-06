import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  itemAmount:number = 1;
  itemAmountFullPrice:any;
  itemPrice:any;
  constructor(public shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
  }
  reduceAmount(cartItem: CartItem){
    if(cartItem.quantity > 1){
      cartItem.quantity--;
      this.shoppingCartService.updateCartItemQuantity(cartItem);
    }
  }
  increaseAmount(cartItem: CartItem){
      cartItem.quantity++;
      this.shoppingCartService.updateCartItemQuantity(cartItem); 
  }

  deleteCartItem(cartItem: CartItem){
    this.shoppingCartService.deleteCartItem(cartItem);
    this.shoppingCartService.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
  }

}
