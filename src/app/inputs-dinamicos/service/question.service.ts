import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../model/question-dropdown';
import { QuestionBase } from '../model/question-base';
import { TextboxQuestion } from '../model/question-textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [
      // const questions: QuestionBase<string>[] = [
      {
        "fixCampo": false,
        "idCatalogoAnswers": null,
        "idCampos": 68005,
        "catalogoAnswers": [],
        "text": null,
        "label": "Fecha llegada ",
        "idEntidadG": null,
        "idCampoExtra": 385,
        "type": "date",
        "idTipoEntidad": null,
        "value": 1577858400000,
        "idCampoType": 35
      }

      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),

      // new TextboxQuestion({
      //   key: 'firstName',
      //   label: 'First name',
      //   value: 'Bombasto',
      //   required: true,
      //   order: 1
      // }),

      // new TextboxQuestion({
      //   key: 'emailAddress',
      //   label: 'Email',
      //   type: 'email',
      //   order: 2,
      //   required: true,
      // })
    ];

    // return of(questions.sort((a, b) => a.order - b.order));
    return questions;
  }
}
