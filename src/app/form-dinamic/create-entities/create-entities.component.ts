import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-entities',
  templateUrl: './create-entities.component.html',
  styleUrls: ['./create-entities.component.scss']
})
export class CreateEntitiesComponent implements OnInit {
  json: any = {
    name: {
      label: 'Name',
      value: '',
      type: 'text',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 10
      },
    },
    hola: {
      label: 'Name',
      value: '',
      type: 'text',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 10
      },
    },
    posya: {
      label: 'Name',
      value: '',
      type: 'text',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 10
      },
    },
   

  };

  constructor() { }

  ngOnInit(): void {
  }

}
