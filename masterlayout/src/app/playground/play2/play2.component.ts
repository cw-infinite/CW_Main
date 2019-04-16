import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-play2',
  templateUrl: './play2.component.html',
  styleUrls: ['./play2.component.css']
})
export class Play2Component implements OnInit {

  genders = ['male', 'female'];

  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() { }

  // before the html code is rendered
  ngOnInit() {
    this.signupForm = new FormGroup({
      // include controls {key: value}

      'userData': new FormGroup({
        'username': new FormControl(null, [
          Validators.required,
          this.forbiddenName.bind(this)
        ]),
        'email': new FormControl(null, [
          Validators.required,
          Validators.email
        ], this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies' : new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // this.signupForm.statusChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.setValue({
      'userdata': {
        'username' : 'Max',
        'email' : 'max@test.com'
      },
      'gender' : 'male',
      'hobbies' : []
    });
    this.signupForm.patchValue({
      'userdata': {
        'username' : 'Max'
      }
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameisForbidden' : true};
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        }
        else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
