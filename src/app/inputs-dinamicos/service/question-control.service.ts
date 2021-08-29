import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../model/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      console.log('key',question.key);
      
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) 
      // [question.key] = "emailAddress" ? new FormControl(question.value || '', [Validators.required, Validators.email])
      
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}

