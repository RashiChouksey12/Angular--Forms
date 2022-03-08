import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { TamplateFormComponent } from './Components/tamplate-form/tamplate-form.component';
import { EmailvalidatorDirective } from './directives/email/emailvalidator.directive';
import { PasswordvalidatorDirective } from './directives/password/passwordvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TamplateFormComponent,
    ReactiveFormComponent,
    EmailvalidatorDirective,
    PasswordvalidatorDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
