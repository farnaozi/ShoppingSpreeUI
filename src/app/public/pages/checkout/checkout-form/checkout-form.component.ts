import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'country': new FormControl('', Validators.required),
    'town/city': new FormControl('', Validators.required),
    'state/country': new FormControl('', Validators.required),
    'postalCode': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required)
  });

  constructor() { }

  isFieldValid(formControl: string) {
    return !this.checkoutForm.get(formControl)?.valid && this.checkoutForm.get(formControl)?.touched;
  }

  ngOnInit(): void {
  }

}
