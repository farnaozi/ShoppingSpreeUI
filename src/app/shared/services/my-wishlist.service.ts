import { Injectable } from '@angular/core';
import { WishlistItem } from '../models/wishlist-item.model';
import { AlertService } from './alert.service';
import { of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class MyWishListService {
public WishlistItems:any;

constructor(private alertService: AlertService) { }

public getWishlistItems() {
  return JSON.parse(localStorage.getItem("wishlist")!)
}

public getWishlistItemsCount() {
  let tempWishlistItems: WishlistItem[] = JSON.parse(localStorage.getItem("wishlist")!);
  if(tempWishlistItems == null)
    return 0;

  let count = 0;
  tempWishlistItems.forEach(item => {
    count += item.quantity;
  });

  return count;
}

public getWishlistItemsTotalPrice(){
  let total: number = 0;
  let tempWishlistItems: WishlistItem[] = JSON.parse(localStorage.getItem("wishlist")!);
  if(tempWishlistItems == null)
    return 0;
  
  tempWishlistItems.forEach(item =>{
    if(item.product.salePrice! > 0)
      total += item.product.salePrice!*item.quantity;
    else
      total += item.product.price!*item.quantity;
  })

  return total;
}

public saveWishlistItem(WishlistItem: WishlistItem) {
  if (localStorage.getItem("wishlist") == null) {
    let cartArray: WishlistItem[] = [];
    cartArray.push({ ...WishlistItem })
    localStorage.setItem("wishlist", JSON.stringify(cartArray));
    this.WishlistItems = this.getWishlistItems();
  }
  else {
    let tempWishlistItems: WishlistItem[] = JSON.parse(localStorage.getItem("wishlist")!);
    let index = tempWishlistItems.indexOf(tempWishlistItems.filter(cart => cart.product.id == WishlistItem.product.id)
    .find(item => item.color == WishlistItem.color && item.size == WishlistItem.size)!);
    if (index == -1) {
      tempWishlistItems.push({ ...WishlistItem });
      this.finalAct(tempWishlistItems);
    }
    else {
      tempWishlistItems[index].quantity += WishlistItem.quantity;
      this.finalAct(tempWishlistItems);
    }
  }
  this.alertService.showSuccess("Item has been Added to Wishlist")
}

public updateWishlistItemQuantity(updatedWishlistItem: WishlistItem) {
  let tempWishlistItems: WishlistItem[] = JSON.parse(localStorage.getItem("wishlist")!);
  let index = tempWishlistItems.indexOf(tempWishlistItems.filter(cart => cart.product.id == updatedWishlistItem.product.id)
  .find(item => item.color == updatedWishlistItem.color && item.size == updatedWishlistItem.size)!);
  tempWishlistItems[index] = { ...updatedWishlistItem };
  this.finalAct(tempWishlistItems);
}

public deleteWishlistItem(WishlistItem: WishlistItem) {
  let tempWishlistItems: WishlistItem[] = JSON.parse(localStorage.getItem("wishlist")!);
  let index = tempWishlistItems.indexOf(tempWishlistItems.filter(cart => cart.product.id == WishlistItem.product.id)
  .find(item => item.color == WishlistItem.color && item.size == WishlistItem.size)!);
  tempWishlistItems.splice(index, 1);
  this.finalAct(tempWishlistItems);
}

private finalAct(WishlistItems: WishlistItem[]): void {
  if(WishlistItems.length == 0){
    localStorage.removeItem("wishlist");
    return;
  }

  localStorage.removeItem("wishlist");
  localStorage.setItem("wishlist", JSON.stringify(WishlistItems));
  this.WishlistItems = this.getWishlistItems();
}
createWishlistItem(product: Product, quantity: number,
    selectedColor?: string, selectedSize?: string): WishlistItem {
    let wishListItem: WishlistItem = {
      quantity: quantity,
      size: selectedSize == undefined ? product.sizes[0] : selectedSize,
      color: selectedColor == undefined ? product.colors[0] : selectedColor,
      product: product
    }
    return wishListItem;
  }

    addToWishlist(product: Product, quantity: number,
    selectedColor?: string, selectedSize?: string) {
    this.saveWishlistItem(this.createWishlistItem(product, quantity,
      selectedColor, selectedSize));
  }

}