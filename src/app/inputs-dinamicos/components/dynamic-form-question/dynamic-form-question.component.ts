import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { QuestionBase } from '../../model/question-base';
@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.idCampos].valid; }

  constructor() { }

  ngOnInit(): void {
  }

}
