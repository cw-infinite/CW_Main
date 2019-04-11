import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-play2',
  templateUrl: './play2.component.html',
  styleUrls: ['./play2.component.css']
})
export class Play2Component implements OnInit {

  genders = ['male', 'female'];

  signupForm: FormGroup;

  constructor() { }

  // before the html code is rendered
  ngOnInit() {
    this.signupForm = new FormGroup({
      // include controls {key: value}
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
