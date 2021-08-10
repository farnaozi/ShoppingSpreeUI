import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component,  OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.css']
})
export class AccountDashboardComponent implements OnInit, AfterViewInit {

  constructor(private scroller: ViewportScroller,
    private route: ActivatedRoute) {
   }
  
  ngOnInit(): void {
  }

  ngAfterViewInit() { 
    this.route.queryParams
    .subscribe(params => {
      if(params.scrollToWishlist != undefined 
        && params.scrollToWishlist == 'true')
           this.scroller.scrollToAnchor("wishlist");
    }
  );
  
  }

}
