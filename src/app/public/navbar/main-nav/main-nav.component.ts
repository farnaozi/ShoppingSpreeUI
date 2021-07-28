import { Component, OnInit } from '@angular/core';
import { NavbarRoutersService } from '../navbar-routers.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  navbarRoutersData:any;
  showSearchBar:boolean = false;

  constructor(private navbarRouters: NavbarRoutersService) { }

  ngOnInit(): void {
    this.navbarRoutersData = this.navbarRouters.getRoutersData();
  }

  showSearchBarFunc(){
    this.showSearchBar = !this.showSearchBar;
  }

}
