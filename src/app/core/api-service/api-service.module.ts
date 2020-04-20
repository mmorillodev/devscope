import { NgModule } from '@angular/core';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';

@NgModule({
  imports: [
    QuestionModule,
    AnswerModule
  ],
  exports: [
    QuestionModule,
    AnswerModule
  ]
})
export class ApiServiceModule {}
