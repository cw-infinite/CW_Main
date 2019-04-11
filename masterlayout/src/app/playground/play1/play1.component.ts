import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-play1',
  templateUrl: './play1.component.html',
  styleUrls: ['./play1.component.css']
})
export class Play1Component implements OnInit {

  @ViewChild('submitForm') submitForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = "Superuser";
    this.submitForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'teacher',
      questionAnswer: '',
      gender: 'Female'
    });
  }
  suggestUserName2() {
    const suggestedName = "Superuser2";
    this.submitForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(submitForm: NgForm) {
  //   console.log(submitForm);
  // }

  onSubmit() {
    console.log(this.submitForm);

    this.submitForm.reset();
  }
}
