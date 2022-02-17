import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  RegisterForm:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit():void {

    this.RegisterForm= this.fb.group({
      fullName :[''],
      userName:[''],
      email :[''],
      password :[''],
      confirmPassword :[''],
      checkBox:[''],
    }); 
  }
  onSubmit() {
    console.log(this.RegisterForm.value);
  }
}
