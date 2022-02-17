import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tamplate-form',
  templateUrl: './tamplate-form.component.html',
  styleUrls: ['./tamplate-form.component.css']
})
export class TamplateFormComponent {
  
  ngOnInit(): void {}
  
  regUser(item:any){
    console.log(item);
  }
}
