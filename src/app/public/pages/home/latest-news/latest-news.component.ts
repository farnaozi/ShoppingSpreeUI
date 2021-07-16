import { Component, OnInit } from '@angular/core'
import { NewsDataService } from '../../../../shared/services/news-data.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  constructor(private newsData: NewsDataService) { }
  data:any;

  ngOnInit(): void {
    this.data = this.newsData.getNewsData();

  }

}
