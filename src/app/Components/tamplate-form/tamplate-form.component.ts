import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/modal/tamplate';
@Component({
  selector: 'app-tamplate-form',
  templateUrl: './tamplate-form.component.html',
  styleUrls: ['./tamplate-form.component.css']
})
export class TamplateFormComponent {
  schema = new loginForm( "", "","", "");

  regUser() {
    console.log("Firstname", this.schema.firstName);
    console.log("Lastname", this.schema.lastName);
    console.log("email", this.schema.email);
    console.log("password", this.schema.password);
  
  
  
  }
}
