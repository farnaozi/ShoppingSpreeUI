import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyWishListService } from 'src/app/shared/services/my-wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
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
