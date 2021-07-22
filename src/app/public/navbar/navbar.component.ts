import { Component, OnInit } from '@angular/core';
import { DialogPosition } from '@angular/material/dialog';
import { LoginRegisterComponent } from 'src/app/shared/components/login-register/login-register.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  DialogPosition: DialogPosition = {top:"100px"};
  constructor(public modalService:ModalService) { 
  }

  ngOnInit(): void {
  }
  
  openLoginRegister(){
    this.modalService.openDialog(LoginRegisterComponent, 
      {minHeight:"400px",width:"600px", position: this.DialogPosition});
  }
  


}
