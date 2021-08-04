import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor() { }
  getShoppingCartData() {
    return of([
      {
        id: 0,
        imgSrc: "/assets/images/product.jpg",
        imgAlt: "...",
        itemName: "Piqué Biker Jacket",
        itemPrice: 15.00,
        itemColor: "blue",
        itemSize: 'M'
      },
      {
        id: 1,
        imgSrc: "/assets/images/product.jpg",
        imgAlt: "...",
        itemName: "Piqué Biker Jacket",
        itemPrice: 7.99,
        itemColor: 'red',
        itemSize: 'S'

      },
      {
        id: 2,
        imgSrc: "/assets/images/product.jpg",
        imgAlt: "...",
        itemName: "Piqué Biker Jacket",
        itemPrice: 30.00,
        itemColor: 'green',
        itemSize: 'XXL'
      }
    ])
  }

  public getShoppingCartItems() {
    return JSON.parse(localStorage.getItem("cart")!)
  }

  public saveCartItem(cartItem: CartItem) {
    if (localStorage.getItem("cart") == null) {
      alert("new added to empty")
      let cartArray: CartItem[] = [];
      cartArray.push({ ...cartItem })
      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
    else {
      let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
      let index = tempCartItems.indexOf(tempCartItems.find(cart => cart.product.id == cartItem.product.id)!);
      if (index == -1) {
        tempCartItems.push({ ...cartItem });
        this.finalAct(tempCartItems);
        alert("new added to existing")
      }
      else {
        let res = tempCartItems.filter(cart => cart.product.id == cartItem.product.id)
          .find(item => item.color == cartItem.color && item.size == cartItem.size)
        if (res == undefined) {
          tempCartItems.push({ ...cartItem });
          this.finalAct(tempCartItems);
          alert("new added to existing")
          return;
        }
        tempCartItems[index].quantity += cartItem.quantity;
        this.finalAct(tempCartItems);
        alert("new added and updated existing")
      }
    }
  }

  public updateCartItem(id: number, updatedCartItem: CartItem) {
    let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
    let index = tempCartItems.indexOf(tempCartItems.find(cartItem => cartItem.product.id == id)!);
    tempCartItems[index] = { ...updatedCartItem };
    this.finalAct(tempCartItems);
  }

  public deleteCartItem(id: number) {
    let tempCartItems: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
    let index = tempCartItems.indexOf(tempCartItems.find(cartItem => cartItem.product.id == id)!);
    tempCartItems.splice(index, 1);
    this.finalAct(tempCartItems);
  }

  private finalAct(cartItems: CartItem[]): void {
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
}
