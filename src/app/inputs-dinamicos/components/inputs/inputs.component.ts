import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() DATA: any;
  datos: any;
  public conceptosFormGroup: FormGroup = this.formBuilder.group({
    inputs: this.formBuilder.array([]),
  });
  constructor(private formBuilder: FormBuilder) {}

  get inputs() {
    return this.conceptosFormGroup.controls['inputs'] as FormArray;
  }
  addInputs() {
    // let list = [4, 5, 6];
    for (let i of this.DATA) {
      let prueba = i.idCampos;
      // console.log(i); // 4, 5, 6
      const addInputs = this.formBuilder.group({
        
        prueba: ['', Validators.required],
      });
      this.inputs.push(addInputs);
    }
  }
  ngOnInit(): void {
    console.log(this.datos);
    this.buildForm();
    // this.addInputs(); nb
    
    // let resultado = this.operandoA + this.operandoB;
    // this.resultadoSuma.emit(resultado);
  }
  private buildForm() {
    // this.conceptosFormGroup =
  }
  
  addConcepto() {
    console.log('kko', this.conceptosFormGroup);
  }
}
