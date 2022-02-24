import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ReactiveService } from '../../services/reactive.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  
  registerForm:FormGroup;
  submitted=false;

  constructor(private fb: FormBuilder,
    private customValidator: ReactiveService
    ){}

  ngOnInit():void {

    this.registerForm= this.fb.group({
      fullName :['',Validators.required,],
      userName : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],   
      email : ['',[Validators.required,Validators.email]],
      // password:['',Validators.compose([Validators.required, this.customValidator.passwordValidation()])],
      password :['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(40),this.customValidator.passwordValidation()])],
      confirmPassword : ['',Validators.required],
      checkBox:['',Validators.required],
    },
    {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
    }); 
    
  }
  get functionVal(){
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted=true;
    console.log(this.registerForm.value);
  }
  onReset(){
    this.submitted=false;
    this.registerForm.reset();
  }
}
