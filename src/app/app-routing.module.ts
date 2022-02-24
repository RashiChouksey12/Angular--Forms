import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { TamplateFormComponent } from './Components/tamplate-form/tamplate-form.component';

const routes: Routes = [
 
    {path: '', component: ReactiveFormComponent},
    {path: 'template-form', component: TamplateFormComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
