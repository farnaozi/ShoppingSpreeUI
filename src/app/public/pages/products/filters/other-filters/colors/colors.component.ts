import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colors:string[] = ['black', '#20315F', '#F1AF4D', '#225AC5',
  '#7917B6', '#D30000', '#E9E007', '#1BEFC9', '#FF3FE0', 
  'white']
  rowsNumber: number = 0;
  constructor() { 
    this.rowsNumber = Math.ceil((this.colors.length)/6);
  }

  ngOnInit(): void {
  }

}
