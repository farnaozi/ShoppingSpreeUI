import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../models/product.model';
import { ModalService } from '../../services/modal.service';
import { MyWishListService } from '../../services/my-wishlist.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent implements OnInit {
  @Input() title:string = "";
  @Input() data:Product[] = [];
  @Input() centerTitle:boolean = false;
  @Input() width:string = "";
  constructor(private modalService:ModalService, private productService:ProductService
    ,private myWishlistService:MyWishListService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.data = [...data.filter(p=> p.salePrice != undefined)]
    })
  }

  openQuickView(id:number){
    this.productService.getProductById(id).subscribe(data=>{
      this.modalService.openQuickView(data);
    })
  }

  counter(reviews:any[]) {
    if(reviews.length != 0){
      let sum = 0;
      reviews!.forEach(rev => sum+=rev.rating );
      return new Array(Math.ceil(sum/reviews.length!));
    }

    return new Array(0);
  }
  
  addToCart(product:Product){
    this.productService.addToCart(product, 1);
  }

  addToWishlist(myWishlistProd: Product){
    this.myWishlistService.addToWishlist(myWishlistProd, 1)
  }

  customOptions: OwlOptions = {
    margin: 30,
    autoplay:true,
    loop: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
}
