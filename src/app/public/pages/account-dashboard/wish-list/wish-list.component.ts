import { Component, OnInit } from '@angular/core';
import { WishlistItem } from 'src/app/shared/models/wishlist-item.model';
import { MyWishListService } from 'src/app/shared/services/my-wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  itemAmount:number = 1;
  itemAmountFullPrice:any;
  itemPrice:any;
  constructor(public myWishlistService:MyWishListService) { }

  ngOnInit(): void {
    this.myWishlistService.WishlistItems = this.myWishlistService.getWishlistItems();
  }
  reduceAmount(WishlistItem: WishlistItem){
    if(WishlistItem.quantity > 1){
      WishlistItem.quantity--;
      this.myWishlistService.updateWishlistItemQuantity(WishlistItem);
    }
  }
  increaseAmount(WishlistItem: WishlistItem){
      WishlistItem.quantity++;
      this.myWishlistService.updateWishlistItemQuantity(WishlistItem); 
  }

  deleteWishlistItem(WishlistItem: WishlistItem){
    this.myWishlistService.deleteWishlistItem(WishlistItem);
    this.myWishlistService.WishlistItems = this.myWishlistService.getWishlistItems();
  }

}
