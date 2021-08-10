import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() pageName: string = "";
  prevUrl: string = "Home";
  currUrl: string = "";

  constructor(router: Router,private activatedRoute: ActivatedRoute) { 
    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      console.log(event.url);
      if(event.url.length > 0){
        this.currUrl = event.url.split("/",2)[1].split("?",2)[0];
        this.pageName = event.url.split("/",2)[1].split("?",2)[0];
      }
      else{
        this.currUrl = "";
      }
    });
  }

  ngOnInit(): void {
  }

}
