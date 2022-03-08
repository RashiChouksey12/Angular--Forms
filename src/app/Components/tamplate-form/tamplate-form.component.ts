import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/modal/tamplate';

@Component({
  selector: 'app-tamplate-form',
  templateUrl: './tamplate-form.component.html',
  styleUrls: ['./tamplate-form.component.css']
})
export class TamplateFormComponent {
  errorMessage:string;
  schema = new loginForm('','','' ,'');

  regUser(){
    console.table(this.schema.firstName);
    console.table(this.schema.lastName);
    console.table(this.schema.userEmail);
    console.table(this.schema.password)
  }

}
