import { Component, Input, OnInit, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() pageName: string = "Products";
  prevUrl: string = "";
  currUrl: string = "";

  constructor(router: Router) { 
    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      if(this.prevUrl.length == 0)
        this.prevUrl = event.url.slice(1,event.url.length);
      else if(this.prevUrl.length != 0 
        && this.currUrl.length == 0)
          this.currUrl = event.url.slice(1,event.url.length);
      else{
        this.prevUrl = event.url.slice(1,event.url.length);
        this.currUrl = ""
      }
    });
  }

  ngOnInit(): void {
  }

}
