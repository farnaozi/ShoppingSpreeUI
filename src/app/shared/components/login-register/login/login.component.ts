import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    'loginEmail': new FormControl('', [Validators.required, Validators.email]),
    'loginPassword': new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  isFieldValid(formControl: string) {
    return !this.loginForm.get(formControl)?.valid && this.loginForm.get(formControl)?.touched;
  }
}
