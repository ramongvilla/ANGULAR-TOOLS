import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEntitiesComponent } from './create-entities/create-entities.component';
import { DinamicInputsComponent } from './dinamic-inputs/dinamic-inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateEntitiesComponent,
    DinamicInputsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CreateEntitiesComponent,
    DinamicInputsComponent
  ]
})
export class FormDinamicModule { }
