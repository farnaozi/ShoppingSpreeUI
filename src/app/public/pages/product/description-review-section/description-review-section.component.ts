import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-description-review-section',
  templateUrl: './description-review-section.component.html',
  styleUrls: ['./description-review-section.component.css']
})
export class DescriptionReviewSectionComponent implements OnInit {
  reviewForm: FormGroup = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'review': new FormControl('', Validators.required)
  });
  @Input() productDescReview:any | undefined;
  // description
  constructor() { }

  ngOnInit(): void {
  }

  isFieldValid(formControl: string) {
    return !this.reviewForm.get(formControl)?.valid && this.reviewForm.get(formControl)?.touched;
  }

}
