import { Injectable } from '@angular/core';

import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor() { }

  validacionMensaje = [
    { type: 'required', mensaje: 'Campo requerido.' },
    { type: 'maxlength', mensaje: 'Campo con tamaño de 10 caracteres máximo' },
    { type: 'minlength', mensaje: 'Campo con tamaño minimo 3 caracteres' },
    { type: 'email', mensaje: 'email invalido' },
  ];

  public getError(controlName: string, conceptosFormGroup: FormGroup): string {
    let error = '';
    const control = conceptosFormGroup.get(controlName);
    for (let i of this.validacionMensaje) {
      if (control?.hasError(i.type) && (control.dirty || control.touched)) {
        error = i.mensaje;
      }
    }
    return error;
  }

  public mapValidators(validators) {
    const formValidators = []; 
    // console.log(validators.required);
    
    
    console.log('kioña',validators.required);
    // const controls1 = {
    //   required: (){
        
    //   }


    // }

    // const obj1 = {
    //   // ( ? {c:3} : {}),
    //   // ...(otherCondition ? {c:4} : {})
    // };

    // const req  = obj1[Validators];
    
    for (const validation of Object.keys(validators)) {
      console.log(validation);
      
      
      
      validators.required?  formValidators.push(Validators.required):{}
      validation === 'maxLength'? formValidators.push(Validators.maxLength(validators.maxLength)):{}
      validation === 'email'? formValidators.push(Validators.email):{}
      
      // if (validators.required === true) {
      //   formValidators.push(Validators.required);
      //   formValidators.push(Validators.maxLength(validators.maxLength));
      // } else if (validation === 'maxLength') {
      //   console.log(validation,validators.maxLength);
      // }

    }

    return formValidators;
  }
}
