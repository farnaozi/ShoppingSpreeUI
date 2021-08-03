import { Component, OnInit } from '@angular/core';
import { ProductImagesService } from 'src/app/shared/services/product-images.service';

@Component({
  selector: 'app-images-section',
  templateUrl: './images-section.component.html',
  styleUrls: ['./images-section.component.css']
})
export class ImagesSectionComponent implements OnInit {
  productImagesData:any;
  constructor(private productImagesService:ProductImagesService) { }

  ngOnInit(): void {
    this.productImagesData = this.productImagesService.getProductImages();
  }

}
