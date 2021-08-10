import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product:Product | undefined = {
    id:0,
    name:'',
    category: '',
    price:0,
    salePrice:0,
    reviews:[],
    sizes:[],
    colors:[],
    description:''
  };

  public productDescReview:{
    description:string | undefined;
    reviews:any[] | undefined;
  } = {
    description:'',
    reviews:[]
  }
  constructor(private route: ActivatedRoute, private productService:ProductService) {
    route.params.subscribe(data=>{
      productService.getProductById(data.id).subscribe(product=>{
        this.product = product;
        this.productDescReview.description = product?.description;
        this.productDescReview.reviews = product?.reviews;
      });
    })
   }

  ngOnInit(): void {
  }

}
