import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadComponent } from './components/entidad/entidad.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';



@NgModule({
  declarations: [
    EntidadComponent,
    InputsComponent,
    HomeComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    EntidadComponent,
    InputsComponent,
    HomeComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
    
  ]
})
export class InputsDinamicosModule { }
