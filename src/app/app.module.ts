import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDinamicModule } from './form-dinamic/form-dinamic.module';




@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormDinamicModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
