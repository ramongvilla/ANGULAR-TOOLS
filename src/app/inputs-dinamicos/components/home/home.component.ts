import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionService } from '../../service/question.service';
import { QuestionBase } from '../../model/question-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  questions$: QuestionBase[]=[];
  // questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
