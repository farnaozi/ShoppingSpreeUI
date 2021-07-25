import { Component, OnInit } from '@angular/core';
import { DialogPosition } from '@angular/material/dialog';
import { LoginRegisterComponent } from 'src/app/shared/components/login-register/login-register.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  ngOnInit(): void {
  }
  DialogPosition: DialogPosition = {top:"100px"};
  constructor(public modalService:ModalService) { 
  }
  
  openLoginRegister(){
    this.modalService.openDialog(LoginRegisterComponent, 
      {minHeight:"400px",width:"600px", position: this.DialogPosition});
  }
  

}
