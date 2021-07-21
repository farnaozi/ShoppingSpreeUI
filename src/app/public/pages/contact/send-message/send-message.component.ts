import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  sendMessageForm: FormGroup = new FormGroup({
    'fullname': new FormControl('', Validators.required),
    'emailAddress': new FormControl('', [Validators.required, Validators.email]),
    'messageComment': new FormControl('', [Validators.required,Validators.minLength(20)])
  });

  constructor() {
   
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.sendMessageForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.sendMessageForm); 
    }
  }

  isFieldValid(formControl: string) {
    return !this.sendMessageForm.get(formControl)?.valid && this.sendMessageForm.get(formControl)?.touched;
  }

  validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }

}
