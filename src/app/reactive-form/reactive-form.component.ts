import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

loginForm:FormGroup = new FormGroup({
  username : new FormControl(''),
  password : new FormControl('')
});

loginCalled(){
  console.log(this.loginForm.value);
}
}
