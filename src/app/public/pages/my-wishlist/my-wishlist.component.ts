import { Component, OnInit } from '@angular/core';
import { MyWishListService } from 'src/app/shared/services/my-wishlist.service';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.css']
})
export class MyWishlistComponent implements OnInit {
  wishListData:any;
  itemAmount:number = 1;
  itemAmountFullPrice:any;
  itemPrice:any;

  constructor(private myWishList:MyWishListService) {
   }

  ngOnInit(): void {
    this.myWishList.getMyWishListData().subscribe(data => {
      this.wishListData = data;
    });
  }

  reduceAmount(){
    if(this.itemAmount > 1){
      this.itemAmount--;
    }
  }
  increaseAmount(){
    this.itemAmount++;    
  }

  removeElementFromArray(element: number) {
    this.wishListData.forEach((value:any,index:number)=>{
        if(value == element) 
          this.wishListData.splice(index,1);
    });
    console.log(this.myWishList);
  }

}
