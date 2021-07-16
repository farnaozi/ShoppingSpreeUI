import { Component, OnInit } from '@angular/core';
import { FashionDataService } from '../../../../shared/services/fashion-data.service';

@Component({
  selector: 'app-fashion-section',
  templateUrl: './fashion-section.component.html',
  styleUrls: ['./fashion-section.component.css']
})
export class FashionSectionComponent implements OnInit {
  constructor(private fashionDataService: FashionDataService) { }
  fashionData:any;

  ngOnInit(): void {
    this.fashionData = this.fashionDataService.getFashionData();
  }

}
