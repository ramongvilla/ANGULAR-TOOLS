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
      // validation: {
        required: true,
        // minLength: 3,
        // maxLength: 10,
        maxLength: 8,
        // email:true
      },
    name1: {
      label: 'email',
      value: '',
      type: 'text',
      // validation: {
        required: true,
        // minLength: 3,
        maxLength: 5,
      },
      name8: {
        label: 'KIOÑA',
        value: '',
        type: 'text',
        // validation: {
          required: false,
          // minLength: 3,
          maxLength: 1,
          id: 'email',
          email:true
      },

 
   

  };

  constructor() { }

  ngOnInit(): void {
  }

}
