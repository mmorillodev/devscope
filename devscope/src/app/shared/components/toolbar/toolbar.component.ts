import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/core/api-service/question/question.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{

  questionx: any;

  constructor(
    private service: QuestionService
  ){}

  ngOnInit(): void {
    const question = this.service.getQuestionById(3).subscribe(
      questionResponse => {
        console.log(questionResponse);
      }
    );

    console.log(this.questionx);
  }
}
