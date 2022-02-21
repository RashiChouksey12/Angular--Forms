import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { TamplateFormComponent } from './Components/tamplate-form/tamplate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TamplateFormComponent,
    ReactiveFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ReactiveFormComponent},
      {path: 'template-form', component: TamplateFormComponent},
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
