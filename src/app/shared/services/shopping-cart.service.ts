import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public shoppingCartItems:any;

  constructor(private alertService: AlertService) { }

  public getShoppingCartItems() {
    return JSON.parse(localStorage.getItem("cart")!)
  }

  public getShoppingCartItemsCount() {
    let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
    if(tempCartItems == null)
      return 0;

    let count = 0;
    tempCartItems.forEach(item => {
      count += item.quantity;
    });

    return count;
  }

  public getShoppingCartItemsTotalPrice(){
    let total: number = 0;
    let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
    if(tempCartItems == null)
      return 0;
    
    tempCartItems.forEach(item =>{
      if(item.product.salePrice! > 0)
        total += item.product.salePrice!*item.quantity;
      else
        total += item.product.price!*item.quantity;
    })

    return total;
  }

  public saveCartItem(cartItem: CartItem) {
    if (localStorage.getItem("cart") == null) {
      // alert("new added to empty")
      let cartArray: CartItem[] = [];
      cartArray.push({ ...cartItem })
      localStorage.setItem("cart", JSON.stringify(cartArray));
      this.shoppingCartItems = this.getShoppingCartItems();
    }
    else {
      let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
      let index = tempCartItems.indexOf(tempCartItems.filter(cart => cart.product.id == cartItem.product.id)
      .find(item => item.color == cartItem.color && item.size == cartItem.size)!);
      if (index == -1) {
        tempCartItems.push({ ...cartItem });
        this.finalAct(tempCartItems);
        // alert("new added to existing")
      }
      else {
        // let res = tempCartItems.filter(cart => cart.product.id == cartItem.product.id)
        //   .find(item => item.color == cartItem.color && item.size == cartItem.size)
        // if (res == undefined) {
        //   tempCartItems.push({ ...cartItem });
        //   this.finalAct(tempCartItems);
        //   alert("new added to existing")
        //   return;
        // }
        tempCartItems[index].quantity += cartItem.quantity;
        this.finalAct(tempCartItems);
        // alert("new added and updated existing")
      }
    }
    this.alertService.showSuccess("Item has been Added to Cart")
  }

  // public updateCartItem(id: number, updatedCartItem: CartItem) {
  //   let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
  //   let index = tempCartItems.indexOf(tempCartItems.find(cartItem => cartItem.product.id == id)!);
  //   tempCartItems[index] = { ...updatedCartItem };
  //   this.finalAct(tempCartItems);
  // }

  public updateCartItemQuantity(updatedCartItem: CartItem) {
    let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
    let index = tempCartItems.indexOf(tempCartItems.filter(cart => cart.product.id == updatedCartItem.product.id)
    .find(item => item.color == updatedCartItem.color && item.size == updatedCartItem.size)!);
    tempCartItems[index] = { ...updatedCartItem };
    this.finalAct(tempCartItems);
  }

  public deleteCartItem(cartItem: CartItem) {
    let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
    let index = tempCartItems.indexOf(tempCartItems.filter(cart => cart.product.id == cartItem.product.id)
    .find(item => item.color == cartItem.color && item.size == cartItem.size)!);
    tempCartItems.splice(index, 1);
    this.finalAct(tempCartItems);
  }

  private finalAct(cartItems: CartItem[]): void {
    if(cartItems.length == 0){
      localStorage.removeItem("cart");
      return;
    }

    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cartItems));
    this.shoppingCartItems = this.getShoppingCartItems();
  }
}
