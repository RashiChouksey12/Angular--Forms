import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
