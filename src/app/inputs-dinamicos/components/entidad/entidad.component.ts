import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.scss']
})
export class EntidadComponent implements OnInit {
  public hola: string;
  public conceptosFormGroup: FormGroup;

//   DATA = [
//     e
// ]
addConcepto(){

}
  constructor() { }

  ngOnInit(): void {
  }

}
