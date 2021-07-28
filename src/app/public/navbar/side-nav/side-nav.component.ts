import { Component, OnInit } from '@angular/core';
import { NavbarRoutersService } from '../navbar-routers.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  navbarRoutersData:any;
  constructor(private navbarRouters: NavbarRoutersService) { }

  ngOnInit(): void {
    this.navbarRoutersData = this.navbarRouters.getRoutersData();
  }
}
