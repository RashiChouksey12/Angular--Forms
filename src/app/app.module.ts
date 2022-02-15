import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TampleteComponent } from './components/tamplete/tamplete.component';
import { TamplateFormComponent } from './Components/tamplate-form/tamplate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TampleteComponent,
    TamplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
