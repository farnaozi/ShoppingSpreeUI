import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  value: number = 0;
  highValue: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
  constructor() { }

  ngOnInit(): void {
  }

}
