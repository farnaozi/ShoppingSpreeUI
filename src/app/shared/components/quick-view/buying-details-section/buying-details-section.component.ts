import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-buying-details-section',
  templateUrl: './buying-details-section.component.html',
  styleUrls: ['./buying-details-section.component.css']
})
export class BuyingDetailsSectionComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
