import { Component, Inject, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnInit {
  @Input() product: Product | undefined;
  constructor(  @Inject(MAT_DIALOG_DATA) data:Product | undefined) {
    this.product = data;
   }

  ngOnInit(): void {
  }

}
