import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ControlsService } from '../services/controls.service';

export interface form {
  id?: string;
  formGroup?: FormGroup;
  metaData?: any[];
  transactionalData?: any[];
}
@Component({
  selector: 'app-dinamic-inputs',
  templateUrl: './dinamic-inputs.component.html',
  styleUrls: ['./dinamic-inputs.component.scss'],
})
export class DinamicInputsComponent implements OnInit {
  forms: form[] = [];
  @Input() formJson: any; // inputs

  @Output() output: EventEmitter<FormGroup> = new EventEmitter(); // inputs value

  fg: FormGroup; // formulario dinamico

  constructor(private fb: FormBuilder, public controls: ControlsService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let dataObject = this.formJson;
    // recorremos las propiedades del arreglo
    let objectProps = Object.keys(dataObject).map((prop) => {
      return Object.assign({}, { key: prop }, dataObject[prop]);
    });

    const formGroup = {};
    for (let prop of Object.keys(dataObject)) {
      formGroup[prop] = new FormControl(
        dataObject[prop].value || '',
        // this.mapValidators(dataObject[prop])
        this.controls.mapValidators(dataObject[prop])
        );
        // console.log(formGroup);
      
    }

    this.fg = new FormGroup(formGroup);
    const form: form = {
      formGroup: this.fg,
      metaData: objectProps,
    };

    this.forms.push(form);
    return form;
  }

  // private mapValidators(validators) {
  
  // }

  getError(controlName: string) {
    return this.controls.getError(controlName, this.fg);
  }

  onSubmit() {
    console.log(this.fg);
  }
}
