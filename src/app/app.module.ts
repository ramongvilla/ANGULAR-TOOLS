import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsDinamicosModule } from './inputs-dinamicos/inputs-dinamicos.module';
import { EntidadComponent } from './dinamic-inputs/entidad/entidad.component';



@NgModule({
  declarations: [
    AppComponent,
    EntidadComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsDinamicosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
