import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEntitiesComponent } from './create-entities/create-entities.component';
import { DinamicInputsComponent } from './dinamic-inputs/dinamic-inputs.component';



@NgModule({
  declarations: [
    CreateEntitiesComponent,
    DinamicInputsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CreateEntitiesComponent,
    DinamicInputsComponent
  ]
})
export class FormDinamicModule { }
