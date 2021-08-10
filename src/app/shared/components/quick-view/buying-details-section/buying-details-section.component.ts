import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { Product } from 'src/app/shared/models/product.model';
import { MyWishListService } from 'src/app/shared/services/my-wishlist.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-buying-details-section',
  templateUrl: './buying-details-section.component.html',
  styleUrls: ['./buying-details-section.component.css']
})
export class BuyingDetailsSectionComponent implements OnInit {
  @Input() product: Product | undefined;

  selectedSize:string = '';
  selectedColor:string = '';
  quantity:number = 1;
  reviewStarCount:number[] = [];
  constructor(private productService: ProductService,private myWishlistService:MyWishListService) {
  }

  ngOnInit(): void {
    this.selectedSize = this.product?.sizes[0]!;
    this.selectedColor = this.product?.colors[0]!;
  }

  selectSize(size:string){
    this.selectedSize = size;
  }
  
  selectColor(color:string){
    this.selectedColor = color;
  }

  addToCart(){
    this.productService.addToCart(this.product!, this.quantity, 
      this.selectedColor, this.selectedSize)
  }

  counter(reviews:any[] | undefined) {
    if(reviews?.length != 0){
      let sum = 0;
      reviews!.forEach(rev => sum+=rev.rating );
      return new Array(Math.ceil(sum/reviews?.length!));
    }

    return new Array(0);
  }

  updateWishlistIcon:boolean = false;

  addToWishlist(){
    this.updateWishlistIcon = !this.updateWishlistIcon;
  }

}
