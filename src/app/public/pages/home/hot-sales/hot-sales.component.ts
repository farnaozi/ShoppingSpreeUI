import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-sales',
  templateUrl: './hot-sales.component.html',
  styleUrls: ['./hot-sales.component.css']
})
export class HotSalesComponent implements OnInit {
  title:string = "Hot Sales";
  // data:number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
